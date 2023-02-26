import responseErrorHandler from "../helper/responseErrorHandler";



export const state = () => ({
  blogs: [],
  menuBlogs: [],
  latestBlogs: [],
  featuredBlogs: [],
  mostPopularBlogs: [],
  paginateLinks: {},
  blog: {},
});


export const getters = {
  blogs: (state) => {
    return state.blogs;
  },
  menuBlogs: (state) => {
    return state.menuBlogs;
  },

  latestBlogs: (state) => {
    return state.latestBlogs;
  }
  ,
  featuredBlogs: (state) => {
    return state.featuredBlogs;
  },

  mostPopularBlogs: (state) => {
    return state.mostPopularBlogs;
  },

  paginateLinks: (state) => {
    return state.paginateLinks;
  },

  blog: (state) => {
    return state.blog;
  },
};


export const mutations = {
  SET_BLOGS(state, blogs) {
    state.blogs = blogs;
  },
  SET_MENU_BLOGS(state, blogs) {
    state.menuBlogs = blogs;
  },
  SET_LATEST_BLOGS(state, blogs) {
    state.latestBlogs = blogs;
  },

  SET_FEATURED_BLOGS(state, blogs) {
    state.featuredBlogs = blogs;
  },

  SET_MOST_POPULAR_BLOGS(state, blogs) {
    state.mostPopularBlogs = blogs;
  },

  SET_PAGINATE_LINKS(state, paginateLinks) {
    state.paginateLinks = paginateLinks;
  },

  SET_BLOG(state, blog) {
    state.blog = blog;
  },

  CREATE_BLOG_ON_LIST(state, blog) {
    state.blogs.unshift(blog);
  },

  CREATE_BLOG(state, blog) {
    state.blog = blog;
  },

  UPDATE_BLOG_ON_LIST(state, blog) {
    let index = state.blogs.findIndex(item => item.id === blog.id);
    state.blogs.splice(index, 1, blog);
  },

  UPDATE_BLOG(state, blog) {
    state.blog = blog;
  },

  DELETE_BLOG_ON_LIST(state, blogId) {
    let index = state.blogs.findIndex(item => item.id === blogId);
    state.blogs.splice(index, 1);
  },

  DELETE_BLOG(state) {
    state.blog = {};
  },

  RESET_BLOGS(state) {
    state.blogs = [];
  },

  RESET_BLOG(state) {
    state.blog = {};
  },
};

export const actions = {
  commitSetBlogs: async ({ commit }, responseData) => {
    await commit('SET_BLOGS', responseData.data);
  },

  commitSetMenuBlogs: async ({ commit }, responseData) => {
    await commit('SET_MENU_BLOGS', responseData.data);
  },

  commitSetLatestBlogs: async ({ commit }, responseData) => {
    await commit('SET_LATEST_BLOGS', responseData.data);
  },

  commitSetFeaturedBlogs: async ({ commit }, responseData) => {
    await commit('SET_FEATURED_BLOGS', responseData.data);
  },

  commitSetMostPopularBlogs: async ({ commit }, responseData) => {
    await commit('SET_MOST_POPULAR_BLOGS', responseData.data);
  },

  commitSetPaginateLinks: async ({ commit }, responseData) => {
    await commit('SET_PAGINATE_LINKS', responseData.meta);
  },

  commitSetBlog: async ({ commit }, responseData) => {
    await commit('SET_BLOG', responseData.data)
  },

  commitCreateBlogOnList: async ({ commit }, responseData) => {
    await commit('CREATE_BLOG_ON_LIST', responseData.data);
  },

  commitCreateBlog: async ({ commit }, responseData) => {
    await commit('CREATE_BLOG', responseData.data);
  },

  commitUpdateBlogOnList: async ({ commit }, responseData) => {
    await commit('UPDATE_BLOG_ON_LIST', responseData.data);
  },

  commitUpdateBlog: async ({ commit }, responseData) => {
    await commit('UPDATE_BLOG', responseData.data);
  },

  commitDeleteBlogOnList: async ({ commit }, blogId) => {
    await commit('DELETE_BLOG_ON_LIST', blogId);
  },

  commitDeleteBlog: async ({ commit }) => {
    await commit('DELETE_BLOG');
  },

  commitResetBlogs: async ({ commit }) => {
    await commit('RESET_BLOGS');
  },

  commitResetBlog: async ({ commit }) => {
    await commit('RESET_BLOG');
  },

  // get list of blog by api call.
  async getBlogs({ dispatch }, params = {}) {
    const path = `v1/blogs`;

    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetBlogs', response.data);
      dispatch('commitSetPaginateLinks', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },

  // get list of menu blog by api call.
  async getMenuBlogs({ dispatch }, params = {}) {
    const path = `v1/blogs`;

    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetMenuBlogs', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },

  // get list of the latest blog by api call.
  async getLatestBlogs({ dispatch }, params = {}) {
    const path = `v1/blogs`;

    let paramObj = {
      ...params,
      order_by_created_at: 'DESC',
    };

    return this.$axios.get(path, { params: paramObj }).then(response => {
      dispatch('commitSetLatestBlogs', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },

  // get list of the featured blog by api call.
  async getFeaturedBlogs({ dispatch }, params = {}) {
    const path = `v1/blogs`;

    let paramObj = {
      ...params,
      order_by_created_at: 'DESC',
      is_featured: 1,
    };

    return this.$axios.get(path, { params: paramObj }).then(response => {
      dispatch('commitSetFeaturedBlogs', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },

  // get list of the most popular blog by api call.
  async getMostPopularBlogs({ dispatch }, params = {}) {
    const path = `v1/blogs`;

    let paramObj = {
      ...params,
      order_by_created_at: 'DESC',
      order_by_read_count: 'DESC',
    };

    return this.$axios.get(path, { params: paramObj }).then(response => {
      dispatch('commitSetMostPopularBlogs', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },

  // get single blog by api call.
  async getBlog({ dispatch }, paramObj) {
    const path = `v1/blogs/${paramObj.id}`;
    const params = paramObj.params ?? {};

    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetBlog', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },

  // get single blog by slug by api call.
  async getBlogBySlug({ dispatch }, paramObj) {
    const path = `v1/blogs/slug/${paramObj.slug}`;
    const params = paramObj.params ?? {};

    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetBlog', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },

  // create new blog on list by api call.
  async postBlogOnList({ dispatch }, data) {
    const path = `v1/blogs`;

    return this.$axios.post(path, data).then((response) => {
      dispatch('commitCreateBlogOnList', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // create new blog by api call.
  async postBlog({ dispatch }, data) {
    const path = `v1/blogs`;

    return this.$axios.post(path, data).then((response) => {

      dispatch('commitCreateBlog', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // update single existing blog on list by api call.
  async putBlogOnList({ dispatch }, dataObj) {
    const path = `v1/blogs/${dataObj.id}`;
    const data = dataObj.data;

    return this.$axios.put(path, data).then((response) => {
      dispatch('commitUpdateBlogOnList', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // update single existing blog by api call.
  async putBlog({ dispatch }, dataObj) {
    const path = `v1/blogs/${dataObj.id}`;
    const data = dataObj.data;

    return this.$axios.put(path, data).then((response) => {
      dispatch('commitUpdateBlog', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // delete a particular blog on list by api call.
  async deleteBlogOnList({ dispatch }, id) {
    const path = `v1/blogs/${id}`;

    return this.$axios.delete(path).then((response) => {
      dispatch('commitDeleteBlogOnList', id);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // delete a particular blog by api call.
  async deleteBlog({ dispatch }, id) {
    const path = `v1/blogs/${id}`;

    return this.$axios.delete(path).then((response) => {
      dispatch('commitDeleteBlog', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // reset blog state.
  async resetBlogs({ dispatch }) {
    dispatch('commitResetBlogs');
  },

  // reset blog state.
  async resetBlog({ dispatch }) {
    dispatch('commitResetBlog')
  },

}

