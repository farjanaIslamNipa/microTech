import responseErrorHandler from "../helper/responseErrorHandler";



export const state = () => ({
  payments: [],
  paginateLinks: {},
  payment: {},
});


export const getters = {
  payments: (state) => {
    return state.payments;
  },

  paginateLinks: (state) => {
    return state.paginateLinks;
  },

  payment: (state) => {
    return state.payment;
  },
};


export const mutations = {
  SET_PAYMENTS(state, payments) {
    state.payments = payments;
  },


  SET_PAGINATE_LINKS(state, paginateLinks) {
    state.paginateLinks = paginateLinks;
  },

  SET_PAYMENT(state, payment) {
    state.payment = payment;
  },

  CREATE_PAYMENT_ON_LIST(state, payment) {
    state.payments.unshift(payment);
  },

  CREATE_PAYMENT(state, payment) {
    state.payment = payment;
  },

  UPDATE_PAYMENT_ON_LIST(state, payment) {
    let index = state.payments.findIndex(item => item.id === payment.id);
    state.payments.splice(index, 1, payment);
  },

  UPDATE_PAYMENT(state, payment) {
    state.payment = payment;
  },

  DELETE_PAYMENT_ON_LIST(state, paymentId) {
    let index = state.payments.findIndex(item => item.id === paymentId);
    state.payments.splice(index, 1);
  },

  DELETE_PAYMENT(state) {
    state.payment = {};
  },

  RESET_PAYMENTS(state) {
    state.payments = [];
  },

  RESET_PAYMENT(state) {
    state.payment = {};
  },
};

export const actions = {
  commitSetPayments: async ({ commit }, responseData) => {
    await commit('SET_PAYMENTS', responseData.data);
  },

  commitSetPaginateLinks: async ({ commit }, responseData) => {
    await commit('SET_PAGINATE_LINKS', responseData.meta);
  },

  commitSetPayment: async ({ commit }, responseData) => {
    await commit('SET_PAYMENT', responseData.data)
  },

  commitCreatePaymentOnList: async ({ commit }, responseData) => {
    await commit('CREATE_PAYMENT_ON_LIST', responseData.data);
  },

  commitCreatePayment: async ({ commit }, responseData) => {
    await commit('CREATE_PAYMENT', responseData.data);
  },

  commitUpdatePaymentOnList: async ({ commit }, responseData) => {
    await commit('UPDATE_PAYMENT_ON_LIST', responseData.data);
  },

  commitUpdatePayment: async ({ commit }, responseData) => {
    await commit('UPDATE_PAYMENT', responseData.data);
  },

  commitDeletePaymentOnList: async ({ commit }, paymentId) => {
    await commit('DELETE_PAYMENT_ON_LIST', paymentId);
  },

  commitDeletePayment: async ({ commit }) => {
    await commit('DELETE_PAYMENT');
  },

  commitResetPayments: async ({ commit }) => {
    await commit('RESET_PAYMENTS');
  },

  commitResetPayment: async ({ commit }) => {
    await commit('RESET_PAYMENT');
  },

  // get list of payment by api call.
  async getPayments({ dispatch }, params = {}) {
    const path = `v1/payments`;

    return this.$axios.get(path, { params: params }).then(response => {

      dispatch('commitSetPayments', response.data);
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


  // get single payment by api call.
  async getPayment({ dispatch }, paramObj) {
    const path = `v1/payments/${paramObj.id}`;
    const params = paramObj.params ?? {};

    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetPayment', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },

  // create new payment on list by api call.
  async postPaymentOnList({ dispatch }, data) {
    const path = `v1/payments`;

    return this.$axios.post(path, data).then((response) => {
      dispatch('commitCreatePaymentOnList', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // create new payment by api call.
  async postPayment({ dispatch }, data) {
    const path = `v1/payments`;

    return this.$axios.post(path, data).then((response) => {
      dispatch('commitCreatePayment', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // update single existing payment on list by api call.
  async putPaymentOnList({ dispatch }, dataObj) {
    const path = `v1/payments/${dataObj.id}`;
    const data = dataObj.data;

    return this.$axios.put(path, data).then((response) => {
      dispatch('commitUpdatePaymentOnList', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // update single existing payment by api call.
  async putPayment({ dispatch }, dataObj) {
    const path = `v1/payments/${dataObj.id}`;
    const data = dataObj.data;

    return this.$axios.put(path, data).then((response) => {
      dispatch('commitUpdatePayment', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // delete a particular payment on list by api call.
  async deletePaymentOnList({ dispatch }, id) {
    const path = `v1/payments/${id}`;

    return this.$axios.delete(path).then((response) => {
      dispatch('commitDeletePaymentOnList', id);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // delete a particular payment by api call.
  async deletePayment({ dispatch }, id) {
    const path = `v1/payments/${id}`;

    return this.$axios.delete(path).then((response) => {
      dispatch('commitDeletePayment', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // payment creation notify email
  async postPaymentCreationNotifyEmail(_, paramObj) {
    const path = `v1/payments/send-creation-notify/${paramObj.id}`;
    const params = paramObj.params ?? {};
    return this.$axios.post(path, params).then((response) => {
      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);

    });
  },

  // reset payments state.
  async resetPayments({ dispatch }) {
    dispatch('commitResetPayments');
  },

  // reset payment state.
  async resetPayment({ dispatch }) {
    dispatch('commitResetPayment')
  },
}
