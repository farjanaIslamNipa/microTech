import responseErrorHandler from "../helper/responseErrorHandler";



export const state = () => ({

});


export const getters = {

};


export const mutations = {

};

export const actions = {
  // create new bank account by api call.
  async paymentCreate(_, data) {
    const path = `v1/payment-gateways/payments/create`;

    return this.$axios.post(path, data).then((response) => {
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

  // payment create by token
  async paymentCreateByToken({ dispatch }, data) {
    const path = `v1/payment-gateways/payments/create-by-token`;

    return this.$axios.post(path, data).then((response) => {

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
  // create card token by api call.
  async cardTokenCreate({ dispatch }, data) {
    const path = `v1/payment-gateways/card-tokens/create`;

    return this.$axios.post(path, data).then((response) => {

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
  async authorizationCreateByToken({ dispatch }, data) {
    const path = `v1/payment-gateways/authorizations/create-by-token`;

    return this.$axios.post(path, data).then((response) => {

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
  async paymentCapture({ dispatch }, data) {
    const path = `v1/payment-gateways/payments/capture`;

    return this.$axios.post(path, data).then((response) => {

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
