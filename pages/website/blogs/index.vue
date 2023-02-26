<template>
<div class="bg-white">
    <header class="blog-banner position-relative d-flex align-items-center justify-content-center"></header>
    <main class="py-sm-5 py-2">
        <div class="container-fluid">
            <div class="default-container-width">
                <div class="row mt-xl-3 mt-0">
                    <!-- Latest Blogs -->
                    <div class="col-xl-9 col-md-8 order-md-1 order-2">
                        <div class="">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h3 class="text-capitalize font-weight-bold">Latest <span class="brand-color">Blogs</span></h3>
                                <NuxtLink class="view-all-blog-btn brand-color style-none" :to="{name: 'blogs-list', params: {title: 'Blogs'}}">View All <span class="ms-1 brand-color"><i class="fas fa-long-arrow-alt-right"></i></span></NuxtLink>
                            </div>
                            <div v-if="latestBlogs.length" class="row">
                                <div v-for="(blog, index) in latestBlogs" :key="index" class="col-xl-4 col-lg-6 col-12 mb-xl-3 mb-4">
                                    <NuxtLink :to="{name: 'blogs-slug', params: {slug: blog.slug}}" class="blog-card bg-white d-block style-none h-100 position-relative">
                                        <nuxt-img preload format="webp" quality="80" loading="lazy" class="blog-card-img" :src="blog?.thumbnail" :alt="blog?.title" />
                                        <div class="text-end mr-4 blog-date">
                                            <p class="d-inline-block mb-0 text-white">{{ blog.created_at }}</p>
                                        </div>
                                        <div class="px-3">
                                            <h5 class="pt-4 pb-xl-5 pb-3 font-weight-bold text-capitalize">{{ blog.title }}</h5>
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
                            <div v-else class="text-center">
                                <h5 class="text-capitalize font-weight-bold">No Blogs Found</h5>
                            </div>
                        </div>
                        <!-- Featured blog section -->
                        <div class="mt-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h3 class="text-capitalize font-weight-bold">Featured <span class="brand-color">Blog</span></h3>
                                <NuxtLink class="view-all-blog-btn brand-color style-none" :to="{name: 'blogs-list', params: {title: 'Blogs'}}">View All <span class="ms-1 brand-color"><i class="fas fa-long-arrow-alt-right"></i></span></NuxtLink>
                            </div>
                            <div v-if="featuredBlogs.length" class="row">
                                <div v-for="(blog, index) in featuredBlogs" :key="index" class="col-xl-4 col-lg-6 col-12 mb-xl-3 mb-4">
                                    <NuxtLink :to="{name: 'blogs-slug', params: {slug: blog.slug}}" class="blog-card bg-white d-block style-none h-100 position-relative">
                                        <nuxt-img preload format="webp" quality="80" loading="lazy" class="blog-card-img" :src="blog?.thumbnail" :alt="blog.title" />
                                        <div class="text-end mr-4 blog-date">
                                            <p class="d-inline-block mb-0 text-white">{{ blog.created_at }}</p>
                                        </div>
                                        <div class="px-3">
                                            <h5 class="pt-4 pb-xl-5 pb-3 font-weight-bold text-capitalize">{{ blog.title }}</h5>
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
                            <div v-else class="text-center">
                                <h5 class="text-capitalize font-weight-bold">No Blogs Found</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-md-4 order-md-2 order-1">
                        <div class="d-flex align-items-center justify-content-end w-100">
                            <input v-model="searchString" class="blog-search-input w-100" type="text" name="blog-search" placeholder="Search ..." area-label="Search" />
                            <button @click="searchBlogs" class="btn p-0" type="button">
                                <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/blog/search-icon.webp" alt="Search blog" />
                            </button>
                        </div>
                        <!-- Categories -->
                        <div class="blog-categories">
                            <div style="background-color:#f8f8f8;" class=" mt-4 pb-3">
                                <div class="blog-tags-header">
                                    <p class="mb-0 blog-tag-title font-semi-bold pt-3 ps-3">Categories</p>
                                </div>
                                <div class="py-4 px-2">
                                    <span v-for="(blogCategory, index) in blogCategories" :key="index">
                                        <NuxtLink :to="{name: 'blogs-list', params: {title: blogCategory.name, blogCategoryId: blogCategory.id}}" class="d-inline-block bg-white blog-category-name mb-3 text-capitalize mx-1 style-none">
                                            {{ blogCategory.name }}
                                        </NuxtLink>
                                    </span>
                                </div>
                            </div>
                            <!-- Most popular section -->
                            <div class="">
                                <h3 class="font-weight-bold py-4 ml-2 mb-0">Most <span class="brand-color">Popular</span></h3>
                                <div style="background-color: #f8f8f8;" class="py-lg-5 py-3 px-3 mb-4">
                                    <div v-for="(blog, index) in mostPopularBlogs" :key="index">
                                        <NuxtLink style="color: black !important;" :to="{name: 'blogs-slug', params: {slug: blog.slug}}" class="style-none text-dark">
                                            <div class="row mb-2">
                                                <div class="col-lg-4 col-md-12 col-6">
                                                    <nuxt-img preload format="webp" quality="80" loading="lazy" class="img-fluid" style="width: 100px; height: 50px" :src="blog?.thumbnail" :alt="blog.title" />
                                                </div>
                                                <div class="col-lg-8 col-md-12 col-6 pl-lg-0 pl-3">
                                                    <h6 class="font-weight-bold mt-lg-0 mt-md-3 mt-0">{{ blog.title }}</h6>
                                                </div>
                                            </div>
                                            <hr>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-lg-5 mt-0 mb-md-0 mb-4">
                    <NuxtLink :to="{name: 'blogs-list', params: {title: 'Blogs'}}">
                        <button class="brand-fill-btn px-5">View All Blogs</button>
                    </NuxtLink>
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

  data() {
    return {
      searchString: '',
      getLatestBlogsPrams: {
        status: 1,
        limit: 4,
        where_has_blog_category_status: 1,
        with_relation: ['media', 'blogCategory']
      },

      getFeaturedBlogsParams: {
        status: 1,
        where_has_blog_category_status: 1,
        with_relation: ['media', 'blogCategory'],
        chunk: '3',

      },

      getMostPopularBlogsParams: {
        status: 1,
        limit: 6,
        where_has_blog_category_status: 1,
        with_relation: ['media', 'blogCategory']
      },

      getBlogCategoriesParams: {
        status: 1,
        where_has_blogs_status: 1,
        order_by_name: 'ASC',
      },
    }
  },
  computed: {
    ...mapGetters({
      latestBlogs: 'blogs/latestBlogs',
      featuredBlogs: 'blogs/featuredBlogs',
      mostPopularBlogs: 'blogs/mostPopularBlogs',
      blogCategories: 'blogCategories/blogCategories',
    }),

  },
  methods: {
    ...mapActions({
      getLatestBlogs: "blogs/getLatestBlogs",
      getFeaturedBlogs: "blogs/getFeaturedBlogs",
      getMostPopularBlogs: "blogs/getMostPopularBlogs",
      getBlogCategories: "blogCategories/getBlogCategories",
    }),

    async getLatestBlogList() {
      await this.getLatestBlogs(this.getLatestBlogsPrams);
    },

    async getFeaturedBlogList() {
      await this.getFeaturedBlogs(this.getFeaturedBlogsParams);
    },

    async getMostPopularBlogList() {
      await this.getMostPopularBlogs(this.getMostPopularBlogsParams);
    },

    async getBlogCategoriesList() {
      await this.getBlogCategories(this.getBlogCategoriesParams);
    },

    async searchBlogs() {
      await this.$router.push({
        name: 'blogs-list',
        params: {
          title: 'Blogs',
          searchString: this.searchString
        }
      });
    },
  },
  async mounted() {
    await this.loader(true);
    await this.getLatestBlogList();
    await this.getFeaturedBlogList();
    await this.getMostPopularBlogList();
    await this.getBlogCategoriesList();
    await this.loader(false);

  },
  head() {
    return {
      // title: 'Blogs |',
      meta: [
        {hid: 'og:title', property: 'og:title', name: 'meta', content: `Blogs | ${process.env.app_name}`},
        {hid: 'twitter:title', property: "twitter:title", name: 'meta', content: `Blogs | ${process.env.app_name}`},
        {hid: 'og:url', property: 'og:url', name: 'meta', content: 'https://geekify.au/blogs/'},
        {hid: 'twitter:domain', property: 'twitter:domain', name: 'meta', content: 'https://geekify.au/blogs/'}
      ],
      link: [
        {hid: 'canonical', rel: 'canonical', href: 'https://geekify.au/blogs/'}
      ],
    }
  }
}
</script>

<style scoped>

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

.blog-card-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
}

.blog-date {
    margin-top: -20px;
}

.blog-date p {
    background-color: var(--brandColor);
    padding: 10px 30px;
    display: inline-block;
}

.blog-banner {
    background-image: url('/images/blog/blog-banner.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom center;
    height: 450px;
}

.blog-search-input {
    padding: 18px;
    border-radius: 0;
    background-color: #f8f8f8;
    border: none;
}

.blog-search-input:focus {
    padding: 19px;
    border-radius: 0;
    background-color: #f8f8f8 !important;
    border: none !important;
    outline: none !important;
}

.blog-search-input::placeholder {
    color: #000;
    font-size: 16px;
}

.blog-tags-header {
    background-image: url('/images/blog/category-bg.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom left;
    height: 100px;
}

.blog-tag-title {
    color: #fff;
    font-size: 22px;
}

.blog-categories {
    position: -webkit-sticky !important;
    position: sticky !important;
    top: 80px;
    align-self: flex-start;
    height: auto;
}

@media (max-width: 1023px) {
    .blog-banner {
        height: 300px;
    }
}

@media (max-width: 991px) {
    .blog-tag-title {
        top: 8px;
    }
}

@media (max-width: 767px) {
    .blog-tag-title {
        top: 28px;
    }
}

@media (max-width: 499px) {
    .blog-tag-title {
        top: 22px;
    }
}

@media (max-width: 425px) {
    .blog-tag-title {
        top: 17px;
    }
}

@media (max-width: 375px) {
    .blog-tag-title {
        top: 8px;
    }
}
</style>
