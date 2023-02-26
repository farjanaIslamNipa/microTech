import responseErrorHandler from "../helper/responseErrorHandler";



export const state = () => ({
  couponUsages: [],
  paginateLinks: {},
  couponUsage: {},

});


export const getters = {
  couponUsages: (state) => {
    return state.couponUsages;
  },

  paginateLinks: (state) => {
    return state.paginateLinks;
  },

  couponUsage: (state) => {
    return state.couponUsage;
  },
};


export const mutations = {
  SET_COUPON_USAGES(state, couponUsages) {
    state.couponUsages = couponUsages;
  },


  SET_PAGINATE_LINKS(state, paginateLinks) {
    state.paginateLinks = paginateLinks;
  },

  SET_COUPON_USAGE(state, couponUsage) {
    state.couponUsage = couponUsage;
  },

  CREATE_COUPON_USAGE_ON_LIST(state, couponUsage) {
    state.couponUsages.unshift(couponUsage);
  },

  CREATE_COUPON_USAGE(state, couponUsage) {
    state.couponUsage = couponUsage;
  },

  UPDATE_COUPON_USAGE_ON_LIST(state, couponUsage) {
    let index = state.couponUsages.findIndex(item => item.id === couponUsage.id);
    state.couponUsages.splice(index, 1, couponUsage);
  },

  UPDATE_COUPON_USAGE(state, couponUsage) {
    state.couponUsage = couponUsage;
  },

  DELETE_COUPON_USAGE_ON_LIST(state, couponUsageId) {
    let index = state.couponUsages.findIndex(item => item.id === couponUsageId);
    state.couponUsages.splice(index, 1);
  },

  DELETE_COUPON_USAGE(state) {
    state.couponUsage = {};
  },

  RESET_COUPON_USAGES(state) {
    state.couponUsages = [];
  },

  RESET_COUPON_USAGE(state) {
    state.couponUsage = {};
  },
};

export const actions = {

  commitSetCouponUsages: async ({ commit }, responseData) => {
    await commit('SET_COUPON_USAGES', responseData.data);
  },

  commitSetPaginateLinks: async ({ commit }, responseData) => {
    await commit('SET_PAGINATE_LINKS', responseData.meta);
  },

  commitSetCouponUsage: async ({ commit }, responseData) => {
    await commit('SET_COUPON_USAGE', responseData.data)
  },

  commitCreateCouponUsageOnList: async ({ commit }, responseData) => {
    await commit('CREATE_COUPON_USAGE_ON_LIST', responseData.data);
  },

  commitCreateCouponUsage: async ({ commit }, responseData) => {
    await commit('CREATE_COUPON_USAGE', responseData.data);
  },

  commitUpdateCouponUsageOnList: async ({ commit }, responseData) => {
    await commit('UPDATE_COUPON_USAGE_ON_LIST', responseData.data);
  },

  commitUpdateCouponUsage: async ({ commit }, responseData) => {
    await commit('UPDATE_COUPON_USAGE', responseData.data);
  },

  commitDeleteCouponUsageOnList: async ({ commit }, couponUsageId) => {
    await commit('DELETE_COUPON_USAGE_ON_LIST', couponUsageId);
  },

  commitDeleteCouponUsage: async ({ commit }) => {
    await commit('DELETE_COUPON_USAGE');
  },

  commitResetCouponUsages: async ({ commit }) => {
    await commit('RESET_COUPON_USAGES');
  },

  commitResetCouponUsage: async ({ commit }) => {
    await commit('RESET_COUPON_USAGE');
  },

  // get list of couponUsage by api call.
  async getCouponUsages ({ dispatch }, params = {}) {
    const path = `v1/coupon-usages`;

    return this.$axios.get(path, { params: params }).then(response => {

      dispatch('commitSetCouponUsages', response.data);
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


  // get single couponUsage by api call.
  async getCouponUsage ({ dispatch }, paramObj)  {
    const path = `v1/coupon-usages/${paramObj.id}`;
    const params = paramObj.params ?? {};

    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetCouponUsage', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },

  // create new couponUsage on list by api call.
  async postCouponUsageOnList ({ dispatch }, data)  {
    const path = `v1/coupon-usages`;

    return this.$axios.post(path, data).then((response) => {
      dispatch('commitCreateCouponUsageOnList', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // create new couponUsage by api call.
  async  postCouponUsage ({ dispatch }, data)  {
    const path = `v1/coupon-usages`;

    return this.$axios.post(path, data).then((response) => {

      dispatch('commitCreateCouponUsage', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // update single existing couponUsage on list by api call.
  async putCouponUsageOnList ({ dispatch }, dataObj)  {
    const path = `v1/coupon-usages/${dataObj.id}`;
    const data = dataObj.data;

    return this.$axios.put(path, data).then((response) => {
      dispatch('commitUpdateCouponUsageOnList', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // update single existing couponUsage by api call.
  async putCouponUsage ({ dispatch }, dataObj) {
    const path = `v1/coupon-usages/${dataObj.id}`;
    const data = dataObj.data;

    return this.$axios.put(path, data).then((response) => {
      dispatch('commitUpdateCouponUsage', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // delete a particular couponUsage on list by api call.
  async deleteCouponUsageOnList ({ dispatch }, id)  {
    const path = `v1/coupon-usages/${id}`;

    return this.$axios.delete(path).then((response) => {
      dispatch('commitDeleteCouponUsageOnList', id);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // delete a particular couponUsage by api call.
  async deleteCouponUsage ({ dispatch }, id)  {
    const path = `v1/coupon-usages/${id}`;

    return this.$axios.delete(path).then((response) => {
      dispatch('commitDeleteCouponUsage', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // reset couponUsages state.
  async  resetCouponUsages ({ dispatch })  {
    dispatch('commitResetCouponUsages');
  },

  // reset couponUsage state.
  async resetCouponUsage ({ dispatch })  {
    dispatch('commitResetCouponUsage')
  },
}
