import responseErrorHandler from "../helper/responseErrorHandler";



export const state = () => ({
  blogCategories: [],
  paginateLinks: {},
  blogCategory: {},
});


export const getters = {
  blogCategories: (state) => {
    return state.blogCategories;
  },

  paginateLinks: (state) => {
    return state.paginateLinks;
  },

  blogCategory: (state) => {
    return state.blogCategory;
  },
};


export const mutations = {
  SET_BLOG_CATEGORIES(state, blogCategories) {
    state.blogCategories = blogCategories;
  },

  SET_PAGINATE_LINKS(state, paginateLinks) {
    state.paginateLinks = paginateLinks;
  },

  SET_BLOG_CATEGORY(state, blogCategory) {
    state.blogCategory = blogCategory;
  },

  CREATE_BLOG_CATEGORY_ON_LIST(state, blogCategory) {
    state.blogCategories.unshift(blogCategory);
  },

  CREATE_BLOG_CATEGORY(state, blogCategory) {
    state.blogCategory = blogCategory;
  },

  UPDATE_BLOG_CATEGORY_ON_LIST(state, blogCategory) {
    let index = state.blogCategories.findIndex(item => item.id === blogCategory.id);
    state.blogCategories.splice(index, 1, blogCategory);
  },

  UPDATE_BLOG_CATEGORY(state, blogCategory) {
    state.blogCategory = blogCategory;
  },

  DELETE_BLOG_CATEGORY_ON_LIST(state, blogCategoryId) {
    let index = state.blogCategories.findIndex(item => item.id === blogCategoryId);
    state.blogCategories.splice(index, 1);
  },

  DELETE_BLOG_CATEGORY(state) {
    state.blogCategory = {};
  },

  RESET_BLOG_CATEGORIES(state) {
    state.blogCategories = [];
  },

  RESET_BLOG_CATEGORY(state) {
    state.blogCategory = {};
  },
};

export const actions = {
  commitSetBlogCategories: async ({ commit }, responseData) => {
    await commit('SET_BLOG_CATEGORIES', responseData.data);
  },

  commitSetPaginateLinks: async ({ commit }, responseData) => {
    await commit('SET_PAGINATE_LINKS', responseData.meta);
  },

  commitSetBlogCategory: async ({ commit }, responseData) => {
    await commit('SET_BLOG_CATEGORY', responseData.data)
  },

  commitCreateBlogCategoryOnList: async ({ commit }, responseData) => {
    await commit('CREATE_BLOG_CATEGORY_ON_LIST', responseData.data);
  },

  commitCreateBlogCategory: async ({ commit }, responseData) => {
    await commit('CREATE_BLOG_CATEGORY', responseData.data);
  },

  commitUpdateBlogCategoryOnList: async ({ commit }, responseData) => {
    await commit('UPDATE_BLOG_CATEGORY_ON_LIST', responseData.data);
  },

  commitUpdateBlogCategory: async ({ commit }, responseData) => {
    await commit('UPDATE_BLOG_CATEGORY', responseData.data);
  },

  commitDeleteBlogCategoryOnList: async ({ commit }, blogCategoryId) => {
    await commit('DELETE_BLOG_CATEGORY_ON_LIST', blogCategoryId);
  },

  commitDeleteBlogCategory: async ({ commit }) => {
    await commit('DELETE_BLOG_CATEGORY');
  },

  commitResetBlogCategories: async ({ commit }) => {
    await commit('RESET_BLOG_CATEGORIES');
  },

  commitResetBlogCategory: async ({ commit }) => {
    await commit('RESET_BLOG_CATEGORY');
  },

  // get list of blogCategory by api call.
  async getBlogCategories({ dispatch }, params = {}) {
    const path = `v1/blog-categories`;

    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetBlogCategories', response.data);
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

  // get single blogCategory by api call.
  async getBlogCategory({ dispatch }, paramObj) {
    const path = `v1/blog-categories/${paramObj.id}`;
    const params = paramObj.params ?? {};

    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetBlogCategory', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },

  // create new blogCategory on list by api call.
  async postBlogCategoryOnList({ dispatch }, data) {
    const path = `v1/blog-categories`;

    return this.$axios.post(path, data).then((response) => {
      dispatch('commitCreateBlogCategoryOnList', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // create new blogCategory by api call.
  async postBlogCategory({ dispatch }, data) {
    const path = `v1/blog-categories`;

    return this.$axios.post(path, data).then((response) => {

      dispatch('commitCreateBlogCategory', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // update single existing blogCategory on list by api call.
  async putBlogCategoryOnList({ dispatch }, dataObj) {
    const path = `v1/blog-categories/${dataObj.id}`;
    const data = dataObj.data;

    return this.$axios.put(path, data).then((response) => {
      dispatch('commitUpdateBlogCategoryOnList', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // update single existing blogCategory by api call.
  async putBlogCategory({ dispatch }, dataObj) {
    const path = `v1/blog-categories/${dataObj.id}`;
    const data = dataObj.data;

    return this.$axios.put(path, data).then((response) => {
      dispatch('commitUpdateBlogCategory', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // delete a particular blogCategory on list by api call.
  async deleteBlogCategoryOnList({ dispatch }, id) {
    const path = `v1/blog-categories/${id}`;

    return this.$axios.delete(path).then((response) => {
      dispatch('commitDeleteBlogCategoryOnList', id);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // delete a particular blogCategory by api call.
  async deleteBlogCategory({ dispatch }, id) {
    const path = `v1/blog-categories/${id}`;

    return this.$axios.delete(path).then((response) => {
      dispatch('commitDeleteBlogCategory', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // reset blogCategories state.
  async resetBlogCategories({ dispatch }) {
    dispatch('commitResetBlogCategories');
  },

  // reset blogCategory state.
  async resetBlogCategory({ dispatch }) {
    dispatch('commitResetBlogCategory')
  },

}

