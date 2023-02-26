import responseErrorHandler from "../helper/responseErrorHandler";



export const state = () => ({
  customerOpinions: [],
  paginateLinks: {},
  customerOpinion: {},
});


export const getters = {
  customerOpinions: (state) => {
    return state.customerOpinions;
  },

  paginateLinks: (state) => {
    return state.paginateLinks;
  },

  customerOpinion: (state) => {
    return state.customerOpinion;
  },
};


export const mutations = {
  SET_CUSTOMER_OPINIONS(state, customerOpinions) {
    state.customerOpinions = customerOpinions;
  },

  SET_PAGINATE_LINKS(state, paginateLinks) {
    state.paginateLinks = paginateLinks;
  },

  SET_CUSTOMER_OPINION(state, customerOpinion) {
    state.customerOpinion = customerOpinion;
  },

  CREATE_CUSTOMER_OPINION_ON_LIST(state, customerOpinion) {
    state.customerOpinions.unshift(customerOpinion);
  },

  CREATE_CUSTOMER_OPINION(state, customerOpinion) {
    state.customerOpinion = customerOpinion;
  },

  UPDATE_CUSTOMER_OPINION_ON_LIST(state, customerOpinion) {
    let index = state.customerOpinions.findIndex(item => item.id === customerOpinion.id);
    state.customerOpinions.splice(index, 1, customerOpinion);
  },

  UPDATE_CUSTOMER_OPINION(state, customerOpinion) {
    state.customerOpinion = customerOpinion;
  },

  DELETE_CUSTOMER_OPINION_ON_LIST(state, customerId) {
    let index = state.customerOpinions.findIndex(item => item.id === customerId);
    state.customerOpinions.splice(index, 1);
  },

  DELETE_CUSTOMER_OPINION(state) {
    state.customerOpinion = {};
  },

  RESET_CUSTOMER_OPINIONS(state) {
    state.customerOpinions = [];
  },

  RESET_CUSTOMER_OPINION(state) {
    state.customerOpinion = {};
  },
};

export const actions = {
  commitSetCustomerOpinions: async ({ commit }, responseData) => {
    await commit('SET_CUSTOMER_OPINIONS', responseData.data);
  },

  commitSetPaginateLinks: async ({ commit }, responseData) => {
    await commit('SET_PAGINATE_LINKS', responseData.meta);
  },

  commitSetCustomerOpinion: async ({ commit }, responseData) => {
    await commit('SET_CUSTOMER_OPINION', responseData.data)
  },

  commitCreateCustomerOpinionOnList: async ({ commit }, responseData) => {
    await commit('CREATE_CUSTOMER_OPINION_ON_LIST', responseData.data);
  },
  commitCreateCustomerOpinion: async ({ commit }, responseData) => {
    await commit('CREATE_CUSTOMER_OPINION', responseData.data);
  },

  commitUpdateCustomerOpinionOnList: async ({ commit }, responseData) => {
    await commit('UPDATE_CUSTOMER_OPINION_ON_LIST', responseData.data);
  },
  commitUpdateCustomerOpinion: async ({ commit }, responseData) => {

    await commit('UPDATE_CUSTOMER_OPINION', responseData.data);
  },

  commitDeleteCustomerOpinionOnList: async ({ commit }, customerId) => {
    await commit('DELETE_CUSTOMER_OPINION_ON_LIST', customerId);
  },

  commitDeleteCustomerOpinion: async ({ commit }) => {
    await commit('DELETE_CUSTOMER_OPINION');
  },

  commitResetCustomerOpinions: async ({ commit }) => {
    await commit('RESET_CUSTOMER_OPINION_OPINIONS');
  },

  commitResetCustomerOpinion: async ({ commit }) => {
    await commit('RESET_CUSTOMER_OPINION');
  },

  // get list of customerOpinion by api call.
  async getCustomerOpinions ({ dispatch }, params)  {
    const path = `v1/customer-opinions`;

    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetCustomerOpinions', response.data);
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

  // get single customerOpinion
  async getCustomerOpinion ({ dispatch }, paramObj)  {
    const path = `v1/customer-opinions/${paramObj.id}`;
    const params = paramObj.params ?? {};

    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetCustomerOpinion', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },

  // create new customerOpinion on list
  async  postCustomerOpinionOnList ({ dispatch }, data)  {
    const path = `v1/customer-opinions`;
    return this.$axios.post(path, data).then((response) => {
      dispatch('commitCreateCustomerOpinionOnList', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // create new customerOpinion
  async postCustomerOpinion ({ dispatch }, data)  {
    const path = `v1/customer-opinions`;
    return this.$axios.post(path, data).then((response) => {
      dispatch('commitCreateCustomerOpinion', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // update single existing customerOpinion on list by api call.
  async putCustomerOpinionOnList ({ dispatch }, dataObj)  {
    const path = `v1/customer-opinions/${dataObj.id}`;
    const data = dataObj.data;

    return this.$axios.put(path, data).then((response) => {
      dispatch('commitUpdateCustomerOpinionOnList', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // update single existing customerOpinion by api call.
  async putCustomerOpinion ({ dispatch }, dataObj)  {
    const path = `v1/customer-opinions/${dataObj.id}`;
    const data = dataObj.data;

    return this.$axios.put(path, data).then((response) => {

      dispatch('commitUpdateCustomerOpinion', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // delete a particular customerOpinion on list by api call.
  async deleteCustomerOpinionOnList ({ dispatch }, id)  {
    const path = `v1/customer-opinions/${id}`;

    return this.$axios.delete(path).then((response) => {
      dispatch('commitDeleteCustomerOpinionOnList', id);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // delete a particular customerOpinion by api call.
  async deleteCustomerOpinion ({ dispatch }, id)  {
    const path = `v1/customer-opinions/${id}`;

    return this.$axios.delete(path).then((response) => {
      dispatch('commitDeleteCustomerOpinion', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // reset customerOpinions
  async resetCustomerOpinions ({ dispatch })  {
    dispatch('commitResetCustomerOpinions');
  },
  // reset customerOpinion
  async resetCustomerOpinion ({ dispatch })  {
    dispatch('commitResetCustomerOpinion');
  },
}
