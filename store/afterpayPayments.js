import responseErrorHandler from "../helper/responseErrorHandler";



export const state = () => ({
  afterpayPayments: [],
  paginateLinks: {},
  afterpayPayment: {},
});


export const getters = {
  afterpayPayments: (state) => {
    return state.afterpayPayments;
  },

  paginateLinks: (state) => {
    return state.paginateLinks;
  },

  afterpayPayment: (state) => {
    return state.afterpayPayment;
  },
};


export const mutations = {
  SET_AFTERPAY_PAYMENTS(state, afterpayPayments) {
    state.afterpayPayments = afterpayPayments;
  },


  SET_PAGINATE_LINKS(state, paginateLinks) {
    state.paginateLinks = paginateLinks;
  },

  SET_AFTERPAY_PAYMENT(state, afterpayPayment) {
    state.afterpayPayment = afterpayPayment;
  },

  CREATE_AFTERPAY_PAYMENT_ON_LIST(state, afterpayPayment) {
    state.afterpayPayments.unshift(afterpayPayment);
  },

  CREATE_AFTERPAY_PAYMENT(state, afterpayPayment) {
    state.afterpayPayment = afterpayPayment;
  },

  UPDATE_AFTERPAY_PAYMENT_ON_LIST(state, afterpayPayment) {
    let index = state.afterpayPayments.findIndex(item => item.id === afterpayPayment.id);
    state.afterpayPayments.splice(index, 1, afterpayPayment);
  },

  UPDATE_AFTERPAY_PAYMENT(state, afterpayPayment) {
    state.afterpayPayment = afterpayPayment;
  },

  DELETE_AFTERPAY_PAYMENT_ON_LIST(state, afterpayPaymentId) {
    let index = state.afterpayPayments.findIndex(item => item.id === afterpayPaymentId);
    state.afterpayPayments.splice(index, 1);
  },

  DELETE_AFTERPAY_PAYMENT(state) {
    state.afterpayPayment = {};
  },

  RESET_AFTERPAY_PAYMENTS(state) {
    state.afterpayPayments = [];
  },

  RESET_AFTERPAY_PAYMENT(state) {
    state.afterpayPayment = {};
  },
};

export const actions = {
  commitSetAfterpayPayments: async ({ commit }, responseData) => {
    await commit('SET_AFTERPAY_PAYMENTS', responseData.data);
  },

  commitSetPaginateLinks: async ({ commit }, responseData) => {
    await commit('SET_PAGINATE_LINKS', responseData.meta);
  },

  commitSetAfterpayPayment: async ({ commit }, responseData) => {
    await commit('SET_AFTERPAY_PAYMENT', responseData.data)
  },

  commitCreateAfterpayPaymentOnList: async ({ commit }, responseData) => {
    await commit('CREATE_AFTERPAY_PAYMENT_ON_LIST', responseData.data);
  },

  commitCreateAfterpayPayment: async ({ commit }, responseData) => {
    await commit('CREATE_AFTERPAY_PAYMENT', responseData.data);
  },

  commitUpdateAfterpayPaymentOnList: async ({ commit }, responseData) => {
    await commit('UPDATE_AFTERPAY_PAYMENT_ON_LIST', responseData.data);
  },

  commitUpdateAfterpayPayment: async ({ commit }, responseData) => {
    await commit('UPDATE_AFTERPAY_PAYMENT', responseData.data);
  },

  commitDeleteAfterpayPaymentOnList: async ({ commit }, afterpayPaymentId) => {
    await commit('DELETE_AFTERPAY_PAYMENT_ON_LIST', afterpayPaymentId);
  },

  commitDeleteAfterpayPayment: async ({ commit }) => {
    await commit('DELETE_AFTERPAY_PAYMENT');
  },

  commitResetAfterpayPayments: async ({ commit }) => {
    await commit('RESET_AFTERPAY_PAYMENTS');
  },

  commitResetAfterpayPayment: async ({ commit }) => {
    await commit('RESET_AFTERPAY_PAYMENT');
  },

  // get list of afterpay payment by api call.
  async getAfterpayPayments({ dispatch }, params = {}) {
    const path = `v1/afterpay-payments`;

    return this.$axios.get(path, { params: params }).then(response => {

      dispatch('commitSetAfterpayPayments', response.data);
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



  // get single afterpay payment by api call.
  async getAfterpayPayment({ dispatch }, paramObj) {
    const path = `v1/afterpay-payment/${paramObj.id}`;
    const params = paramObj.params ?? {};

    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetAfterpayPayment', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },

  // create new afterpay payments on list by api call.
  async postAfterpayPaymentOnList({ dispatch }, data) {
    const path = `v1/afterpay-payments`;

    return this.$axios.post(path, data).then((response) => {
      dispatch('commitCreateAfterpayPaymentOnList', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // create new afterpay payments by api call.
  async postAfterpayPayment({ dispatch }, data) {
    const path = `v1/afterpay-payments`;

    return this.$axios.post(path, data).then((response) => {

      dispatch('commitCreateAfterpayPayment', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // update single existing afterpay payments on list by api call.
  async putAfterpayPaymentOnList({ dispatch }, dataObj) {
    const path = `v1/afterpay-payments/${dataObj.id}`;
    const data = dataObj.data;

    return this.$axios.put(path, data).then((response) => {
      dispatch('commitUpdateAfterpayPaymentOnList', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // update single existing afterpay payments by api call.
  async putAfterpayPayment({ dispatch }, dataObj) {
    const path = `v1/afterpay-payments/${dataObj.id}`;
    const data = dataObj.data;

    return this.$axios.put(path, data).then((response) => {
      dispatch('commitUpdateAfterpayPayment', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // delete a particular afterpay payments on list by api call.
  async deleteAfterpayPaymentOnList({ dispatch }, id) {
    const path = `v1/afterpay-payments/${id}`;

    return this.$axios.delete(path).then((response) => {
      dispatch('commitDeleteAfterpayPaymentOnList', id);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // delete a particular afterpay payments by api call.
  async deleteAfterpayPayment({ dispatch }, id) {
    const path = `v1/afterpay-payments/${id}`;

    return this.$axios.delete(path).then((response) => {
      dispatch('commitDeleteAfterpayPayment', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // reset afterpay payments state.
  async resetAfterpayPayments({ dispatch }) {
    dispatch('commitResetAfterpayPayments');
  },

  // reset afterpay payment state.
  async resetAfterpayPayment({ dispatch }) {
    dispatch('commitResetAfterpayPayment')
  },
}

