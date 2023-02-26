import responseErrorHandler from "../helper/responseErrorHandler";



export const state = () => ({
  coupons: [],
  paginateLinks: {},
  coupon: {},
});


export const getters = {
  coupons: (state) => {
    return state.coupons;
  },

  paginateLinks: (state) => {
    return state.paginateLinks;
  },

  coupon: (state) => {
    return state.coupon;
  },
};


export const mutations = {
  SET_COUPONS(state, coupons) {
    state.coupons = coupons;
  },

  SET_PAGINATE_LINKS(state, paginateLinks) {
    state.paginateLinks = paginateLinks;
  },

  SET_COUPON(state, coupon) {
    state.coupon = coupon;
  },

  CREATE_COUPON_ON_LIST(state, coupon) {
    state.coupons.unshift(coupon);
  },

  CREATE_COUPON(state, coupon) {
    state.coupon = coupon;
  },

  UPDATE_COUPON_ON_LIST(state, coupon) {
    let index = state.coupons.findIndex(item => item.id === coupon.id);
    state.coupons.splice(index, 1, coupon);
  },

  UPDATE_COUPON(state, coupon) {
    state.coupon = coupon;
  },

  DELETE_COUPON_ON_LIST(state, couponId) {
    let index = state.coupons.findIndex(item => item.id === couponId);
    state.coupons.splice(index, 1);
  },

  DELETE_COUPON(state) {
    state.coupon = {};
  },

  RESET_COUPONS(state) {
    state.coupons = [];
  },

  RESET_COUPON(state) {
    state.coupon = {};
  },
};

export const actions = {
  commitSetCoupons: async ({ commit }, responseData) => {
    await commit('SET_COUPONS', responseData.data);
  },

  commitSetPaginateLinks: async ({ commit }, responseData) => {
    await commit('SET_PAGINATE_LINKS', responseData.meta);
  },

  commitSetCoupon: async ({ commit }, responseData) => {
    await commit('SET_COUPON', responseData.data)
  },

  commitCreateCouponOnList: async ({ commit }, responseData) => {
    await commit('CREATE_COUPON_ON_LIST', responseData.data);
  },

  commitCreateCoupon: async ({ commit }, responseData) => {
    await commit('CREATE_COUPON', responseData.data);
  },

  commitUpdateCouponOnList: async ({ commit }, responseData) => {
    await commit('UPDATE_COUPON_ON_LIST', responseData.data);
  },

  commitUpdateCoupon: async ({ commit }, responseData) => {
    await commit('UPDATE_COUPON', responseData.data);
  },

  commitDeleteCouponOnList: async ({ commit }, couponId) => {
    await commit('DELETE_COUPON_ON_LIST', couponId);
  },

  commitDeleteCoupon: async ({ commit }) => {
    await commit('DELETE_COUPON');
  },

  commitResetCoupons: async ({ commit }) => {
    await commit('RESET_COUPONS');
  },

  commitResetCoupon: async ({ commit }) => {
    await commit('RESET_COUPON');
  },

  // get list of coupon by api call.
  async getCoupons({ dispatch }, params = {}) {
    const path = `v1/coupons`;

    return this.$axios.get(path, { params: params }).then(response => {

      dispatch('commitSetCoupons', response.data);
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
  // get list of coupon by api call.
  async getAvailableValidCoupons({ dispatch }, params = {}) {
    const path = `v1/coupons/available-valid-coupons`;

    return this.$axios.get(path, { params: params }).then(response => {

      dispatch('commitSetCoupons', response.data);
      // dispatch('commitSetPaginateLinks', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },

  // get single coupon by api call.
  async getCoupon({ dispatch }, paramObj) {
    const path = `v1/coupons/${paramObj.id}`;
    const params = paramObj.params ?? {};

    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetCoupon', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },

  // create new coupon on list by api call.
  async postCouponOnList({ dispatch }, data) {
    const path = `v1/coupons`;

    return this.$axios.post(path, data).then((response) => {
      dispatch('commitCreateCouponOnList', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // create new coupon by api call.
  async postCoupon({ dispatch }, data) {
    const path = `v1/coupons`;

    return this.$axios.post(path, data).then((response) => {

      dispatch('commitCreateCoupon', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // update single existing coupon on list by api call.
  async putCouponOnList({ dispatch }, dataObj) {
    const path = `v1/coupons/${dataObj.id}`;
    const data = dataObj.data;

    return this.$axios.put(path, data).then((response) => {
      dispatch('commitUpdateCouponOnList', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // update single existing coupon by api call.
  async putCoupon({ dispatch }, dataObj) {
    const path = `v1/coupons/${dataObj.id}`;
    const data = dataObj.data;

    return this.$axios.put(path, data).then((response) => {
      dispatch('commitUpdateCoupon', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // delete a particular coupon on list by api call.
  async deleteCouponOnList({ dispatch }, id) {
    const path = `v1/coupons/${id}`;

    return this.$axios.delete(path).then((response) => {
      dispatch('commitDeleteCouponOnList', id);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // delete a particular coupon by api call.
  async deleteCoupon({ dispatch }, id) {
    const path = `v1/coupons/${id}`;

    return this.$axios.delete(path).then((response) => {
      dispatch('commitDeleteCoupon', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // reset coupons state.
  async resetCoupons({ dispatch }) {
    dispatch('commitResetCoupons');
  },

  // reset coupon state.
  async resetCoupon({ dispatch }) {
    dispatch('commitResetCoupon')
  },

}

