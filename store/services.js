import responseErrorHandler from "../helper/responseErrorHandler";

export const state = () => ({
  services: [],
  menuServices: [],
  paginateLinks: {},
  service: {},
});

export const getters = {
  services: (state) => {
    return state.services;
  },
  menuServices: (state) => {
    return state.menuServices;
  },
  paginateLinks: (state) => {
    return state.paginateLinks;
  },
  service: (state) => {
    return state.service;
  },
};

export const mutations = {
  SET_SERVICES(state, services) {
    state.services = services;
  },
  SET_MENU_SERVICES(state, menuServices) {
    state.menuServices = menuServices;
  },
  SET_PAGINATE_LINKS(state, paginateLinks) {
    state.paginateLinks = paginateLinks;
  },
  SET_SERVICE(state, service) {
    state.service = service;
  },
  CREATE_SERVICE(state, service) {
    state.service = service;
  },
  UPDATE_SERVICE(state, service) {
    state.service = service;
  },
  RESET_SERVICES(state) {
    state.services = [];
    state.paginateLinks = {};
  },
};

export const actions = {
  commitSetServices: ({commit}, responseData) => {
    commit('SET_SERVICES', responseData.data)
  },
  commitSetMenuServices: ({commit}, responseData) => {
    commit('SET_MENU_SERVICES', responseData.data)
  },
  commitSetPaginateLinks: async ({commit}, responseData) => {
    await commit('SET_PAGINATE_LINKS', responseData.meta)
  },
  commitSetService: async ({commit}, responseData) => {
    await commit('SET_SERVICE', responseData.data)
  },
  commitCreateService: async ({commit}, responseData) => {
    await commit('CREATE_SERVICE', responseData.data);
  },
  commitUpdateService: async ({commit}, responseData) => {
    await commit('UPDATE_SERVICE', responseData.data);
  },
  commitResetServices: async ({commit}) => {
    await commit('RESET_SERVICES');
  },
  // get list of service by api call
  async getServices({dispatch}, params) {
    const path = `v1/services`;
    return this.$axios.get(path, {params: params}).then(response => {
      dispatch('commitSetServices', response.data);
      dispatch('commitSetPaginateLinks', response.data);
    }).catch(error => {
      return responseErrorHandler(error);
    })
  },
  // get list of services for menu by api call
  async getMenuServices({dispatch}, params) {
    const path = `v1/services`;
    return this.$axios.get(path, {params: params}).then(response => {
      dispatch('commitSetMenuServices', response.data);
    }).catch(error => {
      return responseErrorHandler(error);
    })
  },
  // get a single service by api call
  async getService({dispatch}, paramObj) {
    const path = `v1/services/${paramObj.id}`;
    const params = paramObj.params ?? {};
    return this.$axios.get(path, {params: params}).then(response => {
      dispatch('commitSetService', response.data);
      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },

  // get a single service by slug api call
  async getServiceBySlug({dispatch}, paramObj) {
    const path = `v1/services/slug/${paramObj.slug}`;
    const params = paramObj.params ?? {};
    return this.$axios.get(path, {params: params}).then(response => {
      dispatch('commitSetService', response.data);
      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },
  // create new service  by api call.
  async postService({dispatch}, data) {
    const path = `v1/services`;
    return this.$axios.post(path, data).then((response) => {
      dispatch('commitCreateService', response.data);
      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },
  // update single existing service  by api call.
  async putService({dispatch}, dataObj) {
    const path = `v1/services/${dataObj.id}`;
    const data = dataObj.data;
    return this.$axios.put(path, data).then((response) => {
      dispatch('commitUpdateService', response.data);
      return {
        message: 'Updated successfully',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },
  // reset services state.
   resetServices({dispatch}) {
    dispatch('commitResetServices');
  },
};
