import responseErrorHandler from "../helper/responseErrorHandler";



export const state = () => ({
  cardPayments: [],
  paginateLinks: {},
  cardPayment: {},
});


export const getters = {
  cardPayments: (state) => {
    return state.cardPayments;
  },

  paginateLinks: (state) => {
    return state.paginateLinks;
  },

  cardPayment: (state) => {
    return state.cardPayment;
  },
};


export const mutations = {
  SET_CARD_PAYMENTS(state, cardPayments) {
    state.cardPayments = cardPayments;
  },


  SET_PAGINATE_LINKS(state, paginateLinks) {
    state.paginateLinks = paginateLinks;
  },

  SET_CARD_PAYMENT(state, cardPayment) {
    state.cardPayment = cardPayment;
  },

  CREATE_CARD_PAYMENT_ON_LIST(state, cardPayment) {
    state.cardPayments.unshift(cardPayment);
  },

  CREATE_CARD_PAYMENT(state, cardPayment) {
    state.cardPayment = cardPayment;
  },

  UPDATE_CARD_PAYMENT_ON_LIST(state, cardPayment) {
    let index = state.cardPayments.findIndex(item => item.id === cardPayment.id);
    state.cardPayments.splice(index, 1, cardPayment);
  },

  UPDATE_CARD_PAYMENT(state, cardPayment) {
    state.cardPayment = cardPayment;
  },

  DELETE_CARD_PAYMENT_ON_LIST(state, cardPaymentId) {
    let index = state.cardPayments.findIndex(item => item.id === cardPaymentId);
    state.cardPayments.splice(index, 1);
  },

  DELETE_CARD_PAYMENT(state) {
    state.cardPayment = {};
  },

  RESET_CARD_PAYMENTS(state) {
    state.cardPayments = [];
  },

  RESET_CARD_PAYMENT(state) {
    state.cardPayment = {};
  },
};

export const actions = {
  commitSetCardPayments: async ({ commit }, responseData) => {
    await commit('SET_CARD_PAYMENTS', responseData.data);
  },

  commitSetPaginateLinks: async ({ commit }, responseData) => {
    await commit('SET_PAGINATE_LINKS', responseData.meta);
  },

  commitSetCardPayment: async ({ commit }, responseData) => {
    await commit('SET_CARD_PAYMENT', responseData.data)
  },

  commitCreateCardPaymentOnList: async ({ commit }, responseData) => {
    await commit('CREATE_CARD_PAYMENT_ON_LIST', responseData.data);
  },

  commitCreateCardPayment: async ({ commit }, responseData) => {
    await commit('CREATE_CARD_PAYMENT', responseData.data);
  },

  commitUpdateCardPaymentOnList: async ({ commit }, responseData) => {
    await commit('UPDATE_CARD_PAYMENT_ON_LIST', responseData.data);
  },

  commitUpdateCardPayment: async ({ commit }, responseData) => {
    await commit('UPDATE_CARD_PAYMENT', responseData.data);
  },

  commitDeleteCardPaymentOnList: async ({ commit }, cardPaymentId) => {
    await commit('DELETE_CARD_PAYMENT_ON_LIST', cardPaymentId);
  },

  commitDeleteCardPayment: async ({ commit }) => {
    await commit('DELETE_CARD_PAYMENT');
  },

  commitResetCardPayments: async ({ commit }) => {
    await commit('RESET_CARD_PAYMENTS');
  },

  commitResetCardPayment: async ({ commit }) => {
    await commit('RESET_CARD_PAYMENT');
  },

  // get list of card payment by api call.
  async getCardPayments ({ dispatch }, params = {}) {
    const path = `v1/card-payments`;

    return this.$axios.get(path, { params: params }).then(response => {

      dispatch('commitSetCardPayments', response.data);
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



  // get single card payment by api call.
  async getCardPayment ({ dispatch }, paramObj)  {
    const path = `v1/card-payment/${paramObj.id}`;
    const params = paramObj.params ?? {};

    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetCardPayment', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },

  // create new card payments on list by api call.
  async postCardPaymentOnList ({ dispatch }, data)  {
    const path = `v1/card-payments`;

    return this.$axios.post(path, data).then((response) => {
      dispatch('commitCreateCardPaymentOnList', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // create new card payments by api call.
  async postCardPayment ({ dispatch }, data)  {
    const path = `v1/card-payments`;

    return this.$axios.post(path, data).then((response) => {

      dispatch('commitCreateCardPayment', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // update single existing card payments on list by api call.
  async putCardPaymentOnList ({ dispatch }, dataObj)  {
    const path = `v1/card-payments/${dataObj.id}`;
    const data = dataObj.data;

    return this.$axios.put(path, data).then((response) => {
      dispatch('commitUpdateCardPaymentOnList', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // update single existing card payments by api call.
  async  putCardPayment ({ dispatch }, dataObj) {
    const path = `v1/card-payments/${dataObj.id}`;
    const data = dataObj.data;

    return this.$axios.put(path, data).then((response) => {
      dispatch('commitUpdateCardPayment', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // delete a particular card payments on list by api call.
  async deleteCardPaymentOnList ({ dispatch }, id)  {
    const path = `v1/card-payments/${id}`;

    return this.$axios.delete(path).then((response) => {
      dispatch('commitDeleteCardPaymentOnList', id);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // delete a particular card payments by api call.
  async deleteCardPayment ({ dispatch }, id)  {
    const path = `v1/card-payments/${id}`;

    return this.$axios.delete(path).then((response) => {
      dispatch('commitDeleteCardPayment', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // reset card payments state.
  async resetCardPayments ({ dispatch })  {
    dispatch('commitResetCardPayments');
  },

  // reset card payment state.
  async resetCardPayment ({ dispatch }) {
    dispatch('commitResetCardPayment')
  },
}
