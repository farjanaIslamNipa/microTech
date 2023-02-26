import responseErrorHandler from "../helper/responseErrorHandler";

export const state = () => ({
  serviceCategories: [],
  paginateLinks: {},
  serviceCategory: {},
});

export const getters = {
  serviceCategories: (state) => {
    return state.serviceCategories;
  },

  paginateLinks: (state) => {
    return state.paginateLinks;
  },

  serviceCategory: (state) => {
    return state.serviceCategory;
  },
};



export const mutations = {
  SET_SERVICE_CATEGORIES(state, serviceCategories) {
    state.serviceCategories = serviceCategories;
  },

  SET_PAGINATE_LINKS(state, paginateLinks) {
    state.paginateLinks = paginateLinks;
  },

  SET_SERVICE_CATEGORY(state, serviceCategory) {
    state.serviceCategory = serviceCategory;
  },

  CREATE_SERVICE_CATEGORY_ON_LIST(state, serviceCategory) {
    state.serviceCategories.unshift(serviceCategory);
  },

  CREATE_SERVICE_CATEGORY(state, serviceCategory) {
    state.serviceCategory = serviceCategory;
  },

  UPDATE_SERVICE_CATEGORY_ON_LIST(state, serviceCategory) {
    let index = state.serviceCategories.findIndex(item => item.id === serviceCategory.id);
    state.serviceCategories.splice(index, 1, serviceCategory);
  },

  UPDATE_SERVICE_CATEGORY(state, serviceCategory) {
    state.serviceCategory = serviceCategory;
  },

  DELETE_SERVICE_CATEGORY_ON_LIST(state, serviceCategoryId) {
    let index = state.serviceCategories.findIndex(item => item.id === serviceCategoryId);
    state.serviceCategories.splice(index, 1);
  },

  DELETE_SERVICE_CATEGORY(state) {
    state.serviceCategory = {};
  },

  RESET_SERVICE_CATEGORIES(state) {
    state.serviceCategories = [];
  },

  RESET_SERVICE_CATEGORY(state) {
    state.serviceCategory = {};
  },
};


export const actions = {
  commitSetServiceCategories: async ({ commit }, responseData) => {
    await commit('SET_SERVICE_CATEGORIES', responseData.data);
  },

  commitSetPaginateLinks: async ({ commit }, responseData) => {
    await commit('SET_PAGINATE_LINKS', responseData.meta);
  },

  commitSetServiceCategory: async ({ commit }, responseData) => {
    await commit('SET_SERVICE_CATEGORY', responseData.data)
  },

  commitCreateServiceCategoryOnList: async ({ commit }, responseData) => {
    await commit('CREATE_SERVICE_CATEGORY_ON_LIST', responseData.data);
  },

  commitCreateServiceCategory: async ({ commit }, responseData) => {
    await commit('CREATE_SERVICE_CATEGORY', responseData.data);
  },

  commitUpdateServiceCategoryOnList: async ({ commit }, responseData) => {
    await commit('UPDATE_SERVICE_CATEGORY_ON_LIST', responseData.data);
  },

  commitUpdateServiceCategory: async ({ commit }, responseData) => {
    await commit('UPDATE_SERVICE_CATEGORY', responseData.data);
  },

  commitDeleteServiceCategoryOnList: async ({ commit }, serviceCategoryId) => {
    await commit('DELETE_SERVICE_CATEGORY_ON_LIST', serviceCategoryId);
  },

  commitDeleteServiceCategory: async ({ commit }) => {
    await commit('DELETE_SERVICE_CATEGORY');
  },

  commitResetServiceCategories: async ({ commit }) => {
    await commit('RESET_SERVICE_CATEGORIES');
  },

  commitResetServiceCategory: async ({ commit }) => {
    await commit('RESET_SERVICE_CATEGORY');
  },

  // get list of service category by api call.
  async getServiceCategories({ dispatch }, params = {}) {
    const path = `v1/service-categories`;
    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetServiceCategories', response.data);
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


  // get single service category by api call.
  async getServiceCategory({ dispatch }, paramObj) {
    const path = `v1/service-categories/${paramObj.id}`;
    const params = paramObj.params ?? {};

    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetServiceCategory', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },

  // get a single service category by slug api call
  async getServiceCategoryBySlug({ dispatch }, paramObj) {
    const path = `v1/service-categories/slug/${paramObj.slug}`;
    const params = paramObj.params ?? {};
    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetServiceCategory', response.data);
      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },

  // create new service category on list by api call.
  async postServiceCategoryOnList({ dispatch }, data) {
    const path = `v1/service-categories`;

    return this.$axios.post(path, data).then((response) => {
      dispatch('commitCreateServiceCategoryOnList', response.data);

      return {
        message: response.statusText,
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // create new service category by api call.
  async postServiceCategory({ dispatch }, data) {
    const path = `v1/service-categories`;

    return this.$axios.post(path, data).then((response) => {
      dispatch('commitCreateServiceCategory', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // update single existing service category on list by api call.
  async putServiceCategoryOnList({ dispatch }, dataObj) {
    const path = `v1/service-categories/${dataObj.id}`;
    const data = dataObj.data;
    return this.$axios.put(path, data).then((response) => {
      dispatch('commitUpdateServiceCategoryOnList', response.data);

      return {
        message: 'Updated',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // update single existing service category by api call.
  async putServiceCategory({ dispatch }, dataObj) {
    const path = `v1/service-categories/${dataObj.id}`;
    const data = dataObj.data;

    return this.$axios.put(path, data).then((response) => {
      dispatch('commitUpdateServiceCategory', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // delete a particular service category on list by api call.
  async deleteServiceCategoryOnList({ dispatch }, id) {
    const path = `v1/service-categories/${id}`;

    return this.$axios.delete(path).then((response) => {
      dispatch('commitDeleteServiceCategoryOnList', id);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // delete a particular service category by api call.
  async deleteServiceCategory({ dispatch }, id) {
    const path = `v1/service-categories/${id}`;

    return this.$axios.delete(path).then((response) => {
      dispatch('commitDeleteServiceCategory', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // reset serviceCategories state.
  resetServiceCategories({ dispatch }) {
    dispatch('commitResetServiceCategories');
  },

  // reset serviceCategory state.
  resetServiceCategory({ dispatch }) {
    dispatch('commitResetServiceCategory')
  },


}
