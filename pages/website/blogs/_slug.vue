<template>
<div class="bg-white top-padding">
    <header class="view-blog-header py-5 ">
        <div class="container">
            <h4 class="mb-1">
                {{ blog.created_at }}/ <span class="text-uppercase brand-color">{{ blog.blogCategory?.name }}</span>
            </h4>
            <h2 class="font-weight-bold mb-3">{{ blog.title }}</h2>
            <nuxt-img preload format="webp" quality="80" loading="lazy" v-if="blog.image && !blog.image.includes('no-image')" class="blog-header-img" :src="blog.image" :alt="blog.title" />
        </div>
    </header>
    <main class="py-sm-4 py-2">
        <div class="container">
            <div v-html="blog.description"></div>
            <!--tags-->
            <div v-if="blog.blogTags?.length" style="background-color: #ffa5001a;" class="p-4 mt-1 rounded">
                <span class="d-inline-block mr-3">Tags:</span>
                <span class="blog-tag-name" v-for="(tag, index) in blog.blogTags" :key="index">{{ tag.name }}</span>
            </div>

            <!-- Bottom section -->
            <div v-if="mostPopularBlogs.length" class="py-4">
                <div class="text-center mb-3">
                    <h3 class="text-capitalize font-weight-bold mb-4">Most <span class="brand-color">Popular</span></h3>
                </div>
                <div class="row">
                    <div v-for="(blog, index) in mostPopularBlogs" :key="index" class="col-md-4 mb-lg-5 mb-4">
                        <NuxtLink :to="{name: 'blogs-slug', params: {slug: blog.slug}}" class="blog-card d-block style-none card h-100 position-relative">
                            <nuxt-img preload format="webp" quality="80" loading="lazy" class="blog-card-img" :src="blog.thumbnail" :alt="blog.title" />
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

    name: 'BlogView',
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
          slug:'',
            getSingleBlogBySlugParams: {
                with_relation: ['media', 'blogCategory', 'blogTags']
            },

            getMostPopularBlogsParams: {
                status: 1,
                limit: 3,
                where_has_blog_category_status: 1,
                with_relation: ['media', 'blogCategory']
            },
        }
    },
    computed: {
        ...mapGetters({
            blog: 'blogs/blog',
            mostPopularBlogs: 'blogs/mostPopularBlogs',
            settingDefaultWebsiteUrl: 'settings/settingDefaultWebsiteUrl'
        }),

    },

    watch: {
        async slug() {
            await this.loader(true);
            await this.getSingleBlogBySlug();
            await this.loader(false);
        }
    },
    methods: {
        ...mapActions({
            getBlogBySlug: 'blogs/getBlogBySlug',
            getMostPopularBlogs: 'blogs/getMostPopularBlogs',
            getSettings: 'settings/getSettings',
        }),

        async getSingleBlogBySlug() {
            let paramObj = {
                slug: this.slug,
                params: this.getSingleBlogBySlugParams,
            };

            await this.getBlogBySlug(paramObj).then(async response => {
                if (response.status === 200 && this.blog.status !== 'Active') {
                    this.$store.dispatch("commitNotFoundRouteStatus", true);
                }
                if (response.status === 404) {
                    this.$store.dispatch("commitNotFoundRouteStatus", true);
                }
            });
        },

        async getMostPopularBlogList() {
            await this.getMostPopularBlogs(this.getMostPopularBlogsParams);
        },
    },
    async mounted() {
        await this.loader(true);
        if (!this.blog) {
            await this.$router.push({
                name: 'websiteBlogHome'
            });
        }
        this.slug = this.$route.params.slug;
        await this.getSingleBlogBySlug();
        await this.getMostPopularBlogList();
        await this.loader(false);

    },

    head() {
        return {
            // title: 'Blogs |',
            meta: [
              { hid: 'og:title',property: 'og:title', name:'meta', content: `Blogs | ${process.env.app_name}`},
              { hid: 'twitter:title', property:"twitter:title", name:'meta', content:`Blogs | ${process.env.app_name}`},
              { hid: 'og:url', property: 'og:url', name:'meta', content: 'https://geekify.au/blogs/'},
              { hid: 'twitter:domain', property: 'twitter:domain', name:'meta', content: 'https://geekify.au/blogs/'}
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




.view-blog-header {
  background-image: url('/images/blog/single-blog-bg.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
}

.blog-header-img {
  width: 100%;
}

.blog-tag-name {
  display: inline-block;
  padding: 5px 25px;
  border-radius: 5px;
  color: black !important;
  background-color: white !important;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;
  transition: all 0.5s ease-in-out;
  margin-right: 18px;
}

.blog-tag-name:hover {
  box-shadow: rgba(252, 114, 23, 0.35) 0 -30px 30px -28px inset;
  transition: all 0.5s ease-in-out;
}
@media(max-width:767px){
    .top-padding{
        padding-top: 45px;
    }
}
@media(max-width:424px){
    .top-padding{
        padding-top: 50px;
    }
}

</style>
