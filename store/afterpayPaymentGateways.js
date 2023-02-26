import responseErrorHandler from "../helper/responseErrorHandler";



export const state = () => ({
  minimumAmount: {
    amount: null,
    currency: null,
  },
  maximumAmount: {
    amount: null,
    currency: null,
  },
  checkout: {},
  afterpayPaymentGateway: {},
  payments: [],
});


export const getters = {
  minimumAmount: (state) => {
    return state.minimumAmount;
  },
  maximumAmount: (state) => {
    return state.maximumAmount
  },
  checkout: (state) => {
    return state.checkout;
  },
  afterpayPaymentGateway: (state) => {
    return state.afterpayPaymentGateway;
  },
  payments: (state) => {
    return state.payments;
  }
};


export const mutations = {
  SET_MINIMUM_AMOUNT(state, minimumAmount) {
    state.minimumAmount.amount = minimumAmount.amount;
    state.minimumAmount.currency = minimumAmount.currency;
  },

  SET_MAXIMUM_AMOUNT(state, maximumAmount) {
    state.maximumAmount.amount = maximumAmount.amount;
    state.maximumAmount.currency = maximumAmount.currency;
  },

  SET_CHECKOUT(state, checkout) {
    state.checkout = checkout;
  },

  SET_PAYMENT(state, afterpayPaymentGateway) {
    state.afterpayPaymentGateway = afterpayPaymentGateway;
  },

  SET_PAYMENTS(state, payments) {
    state.payments = payments;
  }
};

export const actions = {
  commitSetMinimumAmount: async ({ commit }, responseData) => {
    let data = responseData.data;
    await commit('SET_MINIMUM_AMOUNT', data.minimumAmount);
  },
  commitSetMaximumAmount: async ({ commit }, responseData) => {
    let data = responseData.data;
    await commit('SET_MAXIMUM_AMOUNT', data.maximumAmount);
  },
  commitSetCheckout: async ({ commit }, responseData) => {
    await commit('SET_CHECKOUT', responseData.data);
  },
  commitSetPayment: async ({ commit }, responseData) => {
    await commit('SET_PAYMENT', responseData.data);
  },
  commitSetPayments: async ({ commit }, responseData) => {
    await commit('SET_PAYMENTS', responseData.data);
  },

  /**
   * Use to check that the service is available and reachable.
   */

  async tryPing ()  {
    const path = `v1/afterpay-payment-gateways/ping`;

    return this.$axios.get(path).then((response) => {
      return {
        message: '',
        type: 'success',
        status: response.status,
        data: response.data.data
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  async getConfiguration ({ dispatch })  {
    const path = `v1/afterpay-payment-gateways/configuration`;

    return this.$axios.get(path).then((response) => {
      dispatch('commitSetMinimumAmount', response.data);
      dispatch('commitSetMaximumAmount', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
        data: response.data.data
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  async createCheckout  ({ dispatch }, data)  {
    const path = `v1/afterpay-payment-gateways/checkouts`;

    return this.$axios.post(path, data).then((response) => {
      dispatch('commitSetCheckout', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
        data: response.data.data
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  async getCheckout ({ dispatch }, token)  {
    const path = `v1/afterpay-payment-gateways/checkouts/${token}`;

    return this.$axios.get(path).then((response) => {
      dispatch('commitSetCheckout', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
        data: response.data.data
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  async captureImmediateFullPayment ({ dispatch }, data)  {
    const path = `v1/afterpay-payment-gateways/payments/immediate/capture`;

    return this.$axios.post(path, data).then((response) => {
      dispatch('commitSetPayment', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
        data: response.data.data
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  async authDeferredPayment ({ dispatch }, data)  {
    const path = `v1/afterpay-payment-gateways/payments/deferred/auth`;

    return this.$axios.post(path, data).then((response) => {
      dispatch('commitSetPayment', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
        data: response.data.data
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  async captureDeferredPayment ({ dispatch }, dataObj)  {
    const path = `v1/afterpay-payment-gateways/payments/deferred/capture/${dataObj.id}`;
    const data = dataObj.data

    return this.$axios.post(path, data).then((response) => {
      dispatch('commitSetPayment', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
        data: response.data.data
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  async voidDeferredPayment ({ dispatch }, dataObj)  {
    const path = `v1/afterpay-payment-gateways/payments/deferred/capture/void/${dataObj.id}`;
    const data = dataObj.data

    return this.$axios.post(path, data).then((response) => {
      dispatch('commitSetPayment', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
        data: response.data.data
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  async updateShippingCourier ({ dispatch }, dataObj)  {
    const path = `v1/afterpay-payment-gateways/payments/courier/${dataObj.id}`;
    const data = dataObj.data

    return this.$axios.put(path, data).then((response) => {
      dispatch('commitSetPayment', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
        data: response.data.data
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  async getPaymentByOrderId ({ dispatch }, orderId)  {
    const path = `v1/afterpay-payment-gateways/payments/order/${orderId}`;

    return this.$axios.get(path).then((response) => {
      dispatch('commitSetPayment', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
        data: response.data.data
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  async getPaymentByToken ({ dispatch }, token)  {
    const path = `v1/afterpay-payment-gateways/payments/${token}`;

    return this.$axios.get(path).then((response) => {
      dispatch('commitSetPayment', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
        data: response.data.data
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  async getPayments ({ dispatch }, params)  {
    const path = `v1/afterpay-payment-gateways/payments`;

    return this.$axios.get(path, { params: params }).then((response) => {
      dispatch('commitSetPayments', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
        data: response.data.data
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  async createRefund ({ dispatch }, dataObj)  {
    const path = `v1/afterpay-payment-gateways/payments/order/${dataObj.id}/refund`;
    const data = dataObj.data

    return this.$axios.post(path, data).then((response) => {
      dispatch('commitSetPayment', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
        data: response.data.data
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  async updatePaymentByOrderId ({ dispatch }, dataObj)  {
    const path = `v1/afterpay-payment-gateways/payments/order/${dataObj.id}`;
    const data = dataObj.data

    return this.$axios.put(path, data).then((response) => {
      dispatch('commitSetPayment', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
        data: response.data.data
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  async reversalPaymentByToken ({ dispatch }, dataObj)  {
    const path = `v1/afterpay-payment-gateways/payments/${dataObj.token}/reversal`;
    const data = dataObj.data

    return this.$axios.post(path, data).then((response) => {
      dispatch('commitSetPayment', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
        data: response.data.data
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },
}

