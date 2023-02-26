<template>
<div class="bg-white">
    <header class="blog-banner position-relative d-flex align-items-center justify-content-center">
        <div class="blog-header-content text-white">
            <h1 class="mb-2"><span class="brand-color">{{ title }}</span></h1>
        </div>
    </header>
    <main class="py-sm-4 py-2">
        <div class="container">
            <div>
                <div class="row justify-content-center">
                    <div class="col-md-7">
                        <div class="position-relative">
                            <div class="d-flex align-items-center justify-content-end w-100">
                                <input v-model="searchBlogString" class="blog-search-input w-100" type="text" name="blog-search" placeholder="Search ..." area-label="Search" />
                                <button @click="applyBlogFilter(null)" class="btn p-0" type="button">
                                    <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/blog/search-icon.webp" alt="Search blog" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- categories -->
                <div class="my-4 position-relative">
                    <div class="py-3 px-2 bg-light rounded ">
                        <span v-for="(blogCategory, index) in blogCategories" :key="index">
                            <button @click="categoriesWiseBlogs(blogCategory.id)" class="d-inline-block bg-white blog-category-name text-capitalize mb-1 mx-1 style-none">
                                {{ blogCategory.name }}
                            </button>
                        </span>
                    </div>
                </div>
            </div>

            <!-- blog section -->
            <div>
                <div v-if="blogs.length" class="row">
                    <div v-for="(blog, index) in blogs" :key="index" class="col-12 col-sm-12 col-md-4 mb-lg-5 mb-4">
                        <NuxtLink :to="{name: 'blogs-slug', params: {slug: blog.slug}}" class="blog-card d-block style-none card h-100 position-relative">
                            <nuxt-img preload format="webp" quality="80" loading="lazy" class="blog-card-img" :src="blog?.thumbnail" :alt="blog?.title" />
                            <div class="text-right mr-4 blog-date">
                                <p class="d-inline-block mb-0 text-white">{{ blog.created_at }}</p>
                            </div>
                            <div class="px-3">
                                <h5 class="pt-4 pb-5 font-weight-bold text-capitalize">{{ blog.title }}</h5>
                                <div class="d-flex align-items-center justify-content-between pb-3">
                                    <p class="brand-color text-capitalize mb-0">{{ blog.blogCategory?.name }}</p>
                                    <div class="d-flex align-items-center">
                                        <nuxt-img preload format="webp" quality="80" loading="lazy" class="d-inline-block" src="/images/blog/clock.svg" />
                                        <p class="brand-color text-capitalize mb-0 ml-1">20 min read</p>
                                    </div>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>

        </div>
    </main>
</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex';
import Loader from '~/mixins/Loader';
import ShowToastMessage from '~/mixins/ShowToastMessage';
import Authorization from '~/mixins/Authorization';
export default {

    name: 'BlogPage',
    layout: 'website-layout',
    mixins: [Loader, ShowToastMessage, Authorization],
    props: {
        title: {
            type: String,
            required: false,
            default: "Blogs",
        },

        searchString: {
            type: String,
            required: false,
            default: "",
        },

        blogCategoryId: {
            type: Number,
            required: false,
            default: null,
        }

    },
    data() {
        return {
            searchBlogString: '',
            getBlogsParams: {
                title: '',
                blog_category_id: null,
                is_featured: null,
                status: 1,
                where_has_blog_category_status: 1,
                with_relation: ['media', 'blogCategory'],
                // paginate: 1,
                // pagination: '',
                order_by_created_at: 'DESC',
                // page: null,
            },

            getBlogCategoriesParams: {
                status: 1,
                order_by_name: 'ASC',
                where_has_blogs_status: 1,
            },
        }
    },
    computed: {
        ...mapGetters({
            blogs: 'blogs/blogs',
            paginateLinks: 'blogs/paginateLinks',
            blogCategories: 'blogCategories/blogCategories',
            settingDefaultWebsiteUrl: 'settings/settingDefaultWebsiteUrl'
        }),

    },


    methods: {
        ...mapActions({
            getBlogs: 'blogs/getBlogs',
            getBlogCategories: 'blogCategories/getBlogCategories',
            getSettings: 'settings/getSettings',
        }),

        async getBlogList() {
           await this.getBlogs(this.getBlogsParams).then(async response => {
                if (response.message) {
                    this.showToastMessage(response);
                }
            });
        },

        async getBlogCategoriesList() {
            await this.getBlogCategories(this.getBlogCategoriesParams);
        },
       async categoriesWiseBlogs(blogCategoryId) {
            this.loader(true);
            this.getBlogsParams.blog_category_id = blogCategoryId;
            await this.getBlogList();
            this.loader(false);
        },

        async applyBlogFilter(pageNumber) {
            this.loader(true);
            this.getBlogsParams.title = this.searchBlogString;
            this.getBlogsParams.blog_category_id = "";
            // this.getBlogsParams.page = pageNumber;
            await this.getBlogList();
            this.loader(false);
        },
    },
    async mounted() {
      console.log(this.$route.params.blogCategoryId);
        await this.loader(true);
        if (this.$route?.params?.blogCategoryId) {
          this.getBlogsParams.blog_category_id = this.$route.params.blogCategoryId;
        }
        if (this.$route?.params?.title) {
          this.getBlogsParams.blog_category_id = this.$route.params.blogCategoryId;
        }
        // this.getBlogsParams.title = this.searchString;
        // this.searchBlogString = this.searchString;
        await this.getBlogList();
        await this.getBlogCategoriesList();
        await this.loader(false);

    },

    head() {
        return {
            // title: 'Blogs |',
          meta: [
            { hid: 'og:title',property: 'og:title',  name:'meta', content: `Blogs | ${process.env.app_name}`},
            { hid: 'twitter:title', property:"twitter:title", name:'meta', content:`Blogs | ${process.env.app_name}`},
            { hid: 'og:url', property: 'og:url',  name:'meta', content: 'https://geekify.au/blogs'},
            { hid: 'twitter:domain', property: 'twitter:domain',  name:'meta', content: 'https://geekify.au/blogs/'}
          ],
          link: [
            { hid:'canonical', rel: 'canonical', href: 'https://geekify.au/blogs/' }
          ],
        }
    }

}
</script>

<style scoped>
.blog-card-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
}

/*Blog common css starts*/
.blog-card {
    background-color: white !important;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
    transition: all 0.3s ease;
    color: rgb(32, 32, 32) !important;
}

.blog-card:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
}

.blog-card-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
}

.blog-category-name {
    padding: 5px 15px;
    border-radius: 5px;
    color: black !important;
    background-color: white !important;
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;
    transition: all 0.5s ease-in-out;
}

.blog-category-name:hover {
    box-shadow: rgba(252, 114, 23, 0.35) 0 -30px 30px -28px inset;
    transition: all 0.5s ease-in-out;
}

.blog-banner {
    background-image: url('/images/blog/blog-banner.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom center;
    height: 450px;
}

.blog-header-content h1 {
    font-size: 80px;
    font-weight: bold;
    color: #fff;
}

.blog-search-input {
    padding: 15px;
    border-radius: 0;
    background-color: #f8f8f8;
    border: none !important;
    outline: none !important;
}

.blog-search-input:focus {
    padding: 19px;
    border-radius: 0;
    background-color: #f8f8f8 !important;
    border: none;
}

.blog-search-input::placeholder {
    color: #000;
    font-size: 16px;
}

@media (max-width: 1023px) {
    .blog-banner {
        height: 300px;
    }
}

@media (max-width: 767px) {
    .blog-header-content h1 {
        font-size: 55px;
    }
}
</style>
