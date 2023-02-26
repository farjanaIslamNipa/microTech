import responseErrorHandler from "../helper/responseErrorHandler";



export const state = () => ({
  customerOpinionResponses: [],
  paginateLinks: {},
  customerOpinionResponse: {},
});


export const getters = {
  customerOpinionResponses: (state) => {
    return state.customerOpinionResponses;
  },

  paginateLinks: (state) => {
    return state.paginateLinks;
  },

  customerOpinionResponse: (state) => {
    return state.customerOpinionResponse;
  },
};


export const mutations = {
  SET_CUSTOMER_OPINION_RESPONSES(state, customerOpinionResponses) {
    state.customerOpinionResponses = customerOpinionResponses;
  },

  SET_PAGINATE_LINKS(state, paginateLinks) {
    state.paginateLinks = paginateLinks;
  },

  SET_CUSTOMER_OPINION_RESPONSE(state, customerOpinionResponse) {
    state.customerOpinionResponse = customerOpinionResponse;
  },

  CREATE_CUSTOMER_OPINION_RESPONSE_ON_LIST(state, customerOpinionResponse) {
    state.customerOpinionResponses.unshift(customerOpinionResponse);
  },

  CREATE_CUSTOMER_OPINION_RESPONSE(state, customerOpinionResponse) {
    state.customerOpinionResponse = customerOpinionResponse;
  },

  UPDATE_CUSTOMER_OPINION_RESPONSE_ON_LIST(state, customerOpinionResponse) {
    let index = state.customerOpinionResponses.findIndex(item => item.id === customerOpinionResponse.id);
    state.customerOpinionResponses.splice(index, 1, customerOpinionResponse);
  },

  UPDATE_CUSTOMER_OPINION_RESPONSE(state, customerOpinionResponse) {
    state.customerOpinionResponse = customerOpinionResponse;
  },

  DELETE_CUSTOMER_OPINION_RESPONSE_ON_LIST(state, customerId) {
    let index = state.customerOpinionResponses.findIndex(item => item.id === customerId);
    state.customerOpinionResponses.splice(index, 1);
  },

  DELETE_CUSTOMER_OPINION_RESPONSE(state) {
    state.customerOpinionResponse = {};
  },

  RESET_CUSTOMER_OPINION_RESPONSES(state) {
    state.customerOpinionResponses = [];
  },

  RESET_CUSTOMER_OPINION_RESPONSE(state) {
    state.customerOpinionResponse = {};
  },
};

export const actions = {
  commitSetCustomerOpinionResponses: async ({ commit }, responseData) => {
    await commit('SET_CUSTOMER_OPINION_RESPONSES', responseData.data);
  },

  commitSetPaginateLinks: async ({ commit }, responseData) => {
    await commit('SET_PAGINATE_LINKS', responseData.meta);
  },

  commitSetCustomerOpinionResponse: async ({ commit }, responseData) => {
    await commit('SET_CUSTOMER_OPINION_RESPONSE', responseData.data)
  },

  commitCreateCustomerOpinionResponseOnList: async ({ commit }, responseData) => {
    await commit('CREATE_CUSTOMER_OPINION_RESPONSE_ON_LIST', responseData.data);
  },
  commitCreateCustomerOpinionResponse: async ({ commit }, responseData) => {
    await commit('CREATE_CUSTOMER_OPINION_RESPONSE', responseData.data);
  },

  commitUpdateCustomerOpinionResponseOnList: async ({ commit }, responseData) => {
    await commit('UPDATE_CUSTOMER_OPINION_RESPONSE_ON_LIST', responseData.data);
  },
  commitUpdateCustomerOpinionResponse: async ({ commit }, responseData) => {

    await commit('UPDATE_CUSTOMER_OPINION_RESPONSE', responseData.data);
  },

  commitDeleteCustomerOpinionResponseOnList: async ({ commit }, customerId) => {
    await commit('DELETE_CUSTOMER_OPINION_RESPONSE_ON_LIST', customerId);
  },

  commitDeleteCustomerOpinionResponse: async ({ commit }) => {
    await commit('DELETE_CUSTOMER_OPINION_RESPONSE');
  },

  commitResetCustomerOpinionResponses: async ({ commit }) => {
    await commit('RESET_CUSTOMER_OPINION_RESPONSES');
  },

  commitResetCustomerOpinionResponse: async ({ commit }) => {
    await commit('RESET_CUSTOMER_OPINION_RESPONSE');
  },

  // get list of customerOpinionResponse by api call.
  async getCustomerOpinionResponses({ dispatch }, params) {
    const path = `v1/customer-opinion-responses`;

    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetCustomerOpinionResponses', response.data);
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

  // get single customerOpinionResponse
  async getCustomerOpinionResponse({ dispatch }, paramObj) {
    const path = `v1/customer-opinion-responses/${paramObj.id}`;
    const params = paramObj.params ?? {};

    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetCustomerOpinionResponse', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },

  // create new customerOpinionResponse on list
  async postCustomerOpinionResponseOnList({ dispatch }, data) {
    const path = `v1/customer-opinion-responses`;
    return this.$axios.post(path, data).then((response) => {
      dispatch('commitCreateCustomerOpinionResponseOnList', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // create new customerOpinionResponse
  async postCustomerOpinionResponse({ dispatch }, data) {
    const path = `v1/customer-opinion-responses`;
    return this.$axios.post(path, data).then((response) => {
      dispatch('commitCreateCustomerOpinionResponse', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // update single existing customerOpinionResponse on list by api call.
  async putCustomerOpinionResponseOnList({ dispatch }, dataObj) {
    const path = `v1/customer-opinion-responses/${dataObj.id}`;
    const data = dataObj.data;

    return this.$axios.put(path, data).then((response) => {
      dispatch('commitUpdateCustomerOpinionResponseOnList', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // update single existing customerOpinionResponse by api call.
  async putCustomerOpinionResponse({ dispatch }, dataObj) {
    const path = `v1/customer-opinion-responses/${dataObj.id}`;
    const data = dataObj.data;

    return this.$axios.put(path, data).then((response) => {

      dispatch('commitUpdateCustomerOpinionResponse', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // delete a particular customerOpinionResponse on list by api call.
  async deleteCustomerOpinionResponseOnList({ dispatch }, id) {
    const path = `v1/customer-opinion-responses/${id}`;

    return this.$axios.delete(path).then((response) => {
      dispatch('commitDeleteCustomerOpinionResponseOnList', id);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // delete a particular customerOpinionResponse by api call.
  async deleteCustomerOpinionResponse({ dispatch }, id) {
    const path = `v1/customer-opinion-responses/${id}`;

    return this.$axios.delete(path).then((response) => {
      dispatch('commitDeleteCustomerOpinionResponse', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },
  async postStoreListCustomerOpinionResponse({ dispatch }, data) {
    const path = `v1/customer-opinion-responses/store-list`;
    return this.$axios.post(path, data).then((response) => {
      dispatch('commitCreateCustomerOpinionResponse', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // reset customerOpinionResponses
  async resetCustomerOpinionResponses({ dispatch }) {
    dispatch('commitResetCustomerOpinionResponses');
  },
  // reset customerOpinionResponse
  async resetCustomerOpinionResponse({ dispatch }) {
    dispatch('commitResetCustomerOpinionResponse');
  },
}
