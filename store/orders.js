import responseErrorHandler from "../helper/responseErrorHandler";



export const state = () => ({
  orders: [],
  paginateLinks: {},
  order: {},
});


export const getters = {
  orders: (state) => {
    return state.orders;
  },

  paginateLinks: (state) => {
    return state.paginateLinks;
  },

  order: (state) => {
    return state.order;
  },
};


export const mutations = {
  SET_ORDERS(state, orders) {
    state.orders = orders;
  },


  SET_PAGINATE_LINKS(state, paginateLinks) {
    state.paginateLinks = paginateLinks;
  },

  SET_ORDER(state, order) {
    state.order = order;
  },

  CREATE_ORDER_ON_LIST(state, order) {
    state.orders.unshift(order);
  },

  CREATE_ORDER(state, order) {
    state.order = order;
  },

  UPDATE_ORDER_ON_LIST(state, order) {
    let index = state.orders.findIndex(item => item.id === order.id);
    state.orders.splice(index, 1, order);
  },

  UPDATE_ORDER(state, order) {
    state.order = order;
  },

  DELETE_ORDER_ON_LIST(state, orderId) {
    let index = state.orders.findIndex(item => item.id === orderId);
    state.orders.splice(index, 1);
  },

  DELETE_ORDER(state) {
    state.order = {};
  },

  RESET_ORDERS(state) {
    state.orders = [];
  },

  RESET_ORDER(state) {
    state.order = {};
  },
};

export const actions = {
  commitSetOrders: async ({ commit }, responseData) => {
    await commit('SET_ORDERS', responseData.data);
  },

  commitSetPaginateLinks: async ({ commit }, responseData) => {
    await commit('SET_PAGINATE_LINKS', responseData.meta);
  },

  commitSetOrder: async ({ commit }, responseData) => {
    await commit('SET_ORDER', responseData.data)
  },

  commitCreateOrderOnList: async ({ commit }, responseData) => {
    await commit('CREATE_ORDER_ON_LIST', responseData.data);
  },

  commitCreateOrder: async ({ commit }, responseData) => {
    await commit('CREATE_ORDER', responseData.data);
  },

  commitUpdateOrderOnList: async ({ commit }, responseData) => {
    await commit('UPDATE_ORDER_ON_LIST', responseData.data);
  },

  commitUpdateOrder: async ({ commit }, responseData) => {
    await commit('UPDATE_ORDER', responseData.data);
  },

  commitDeleteOrderOnList: async ({ commit }, orderId) => {
    await commit('DELETE_ORDER_ON_LIST', orderId);
  },

  commitDeleteOrder: async ({ commit }) => {
    await commit('DELETE_ORDER');
  },

  commitResetOrders: async ({ commit }) => {
    await commit('RESET_ORDERS');
  },

  commitResetOrder: async ({ commit }) => {
    await commit('RESET_ORDER');
  },

  // get list of order by api call.
  async getOrders ({ dispatch }, params = {}) {
    const path = `v1/orders`;

    return this.$axios.get(path, { params: params }).then(response => {

      dispatch('commitSetOrders', response.data);
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


  // get single order by api call.
  async getOrder ({ dispatch }, paramObj)  {
    const path = `v1/orders/${paramObj.id}`;
    const params = paramObj.params ?? {};

    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetOrder', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },

  // get single order by uuid.
  async getOrderByUUID ({ dispatch }, paramObj)  {
    const path = `v1/orders/uuid/${paramObj.id}`;
    const params = paramObj.params ?? {};

    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetOrder', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },
  async getOrderByOrderNo ({ dispatch }, paramObj)  {
    const path = `v1/orders/order_no/${paramObj.order_no}`;
    const params = paramObj.params ?? {};

    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetOrder', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },

  // create new order on list by api call.
  async postOrderOnList ({ dispatch }, data)  {
    const path = `v1/orders`;

    return this.$axios.post(path, data).then((response) => {
      dispatch('commitCreateOrderOnList', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // create new order by api call.
  async  postOrder ({ dispatch }, data)  {
    const path = `v1/orders`;

    return this.$axios.post(path, data).then((response) => {

      dispatch('commitCreateOrder', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // update single existing order on list by api call.
  async putOrderOnList ({ dispatch }, dataObj)  {
    const path = `v1/orders/${dataObj.id}`;
    const data = dataObj.data;

    return this.$axios.put(path, data).then((response) => {
      dispatch('commitUpdateOrderOnList', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // update single existing order by api call.
  async putOrder ({ dispatch }, dataObj)  {
    const path = `v1/orders/${dataObj.id}`;
    const data = dataObj.data;

    return this.$axios.put(path, data).then((response) => {
      dispatch('commitUpdateOrder', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },
  //TODO: if dispatch property empty error occurred
  // update status existing order by api call.
  // eslint-disable-next-line no-unused-vars
  async putOrderStatus ({ dispatch = false }, dataObj)  {
    const path = `v1/orders/${dataObj.id}/status`;
    const data = dataObj.data;

    return this.$axios.put(path, data).then((response) => {
      return response;
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // delete a particular order on list by api call.
  async deleteOrderOnList ({ dispatch }, id) {
    const path = `v1/orders/${id}`;

    return this.$axios.delete(path).then((response) => {
      dispatch('commitDeleteOrderOnList', id);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // delete a particular order by api call.
  async deleteOrder ({ dispatch }, id)  {
    const path = `v1/orders/${id}`;

    return this.$axios.delete(path).then((response) => {
      dispatch('commitDeleteOrder', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // reset orders state.
  async resetOrders ({ dispatch })  {
    dispatch('commitResetOrders');
  },

  // reset order state.
  async resetOrder ({ dispatch })  {
    dispatch('commitResetOrder')
  },
  // eslint-disable-next-line no-unused-vars
  async preStoreOrderData ({ dispatch = false }, data)  {
    const path = `v1/orders/pre-store-order-data`;

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

  // post order invoice
  async postOrderInvoice ({ dispatch }, paramObj)  {
    const path = `v1/orders/invoice/${paramObj.uuid}`;
    const params = paramObj.params ?? {};
    return this.$axios.post(path, params).then((response) => {
      dispatch('commitSetOrder', response.data);
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

