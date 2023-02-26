import responseErrorHandler from "../helper/responseErrorHandler";



export const state = () => ({
  loyaltyPoints: [],
  paginateLinks: {},
  loyaltyPoint: {},
  loyaltyPointStatus: {},
});


export const getters = {
  loyaltyPoints: (state) => {
    return state.loyaltyPoints;
  },

  paginateLinks: (state) => {
    return state.paginateLinks;
  },

  loyaltyPoint: (state) => {
    return state.loyaltyPoint;
  },
  loyaltyPointStatus: (state) => {
    return state.loyaltyPointStatus;
  },
};


export const mutations = {
  SET_LOYALTY_POINTS(state, loyaltyPoints) {
    state.loyaltyPoints = loyaltyPoints;
  },

  SET_PAGINATE_LINKS(state, paginateLinks) {
    state.paginateLinks = paginateLinks;
  },

  SET_LOYALTY_POINT(state, loyaltyPoint) {
    state.loyaltyPoint = loyaltyPoint;
  },
  SET_LOYALTY_POINT_STATUS(state, loyaltyPointStatus) {
    state.loyaltyPointStatus = loyaltyPointStatus;
  },

  CREATE_LOYALTY_POINT_ON_LIST(state, loyaltyPoint) {
    state.loyaltyPointS.unshift(loyaltyPoint);
  },

  CREATE_LOYALTY_POINT(state, loyaltyPoint) {
    state.loyaltyPoint = loyaltyPoint;
  },

  UPDATE_LOYALTY_POINT_ON_LIST(state, loyaltyPoint) {
    let index = state.loyaltyPointS.findIndex(item => item.id === loyaltyPoint.id);
    state.loyaltyPointS.splice(index, 1, loyaltyPoint);
  },

  UPDATE_LOYALTY_POINT(state, loyaltyPoint) {
    state.loyaltyPoint = loyaltyPoint;
  },

  DELETE_LOYALTY_POINT_ON_LIST(state, roleId) {
    let index = state.loyaltyPointS.findIndex(item => item.id === roleId);
    state.loyaltyPointS.splice(index, 1);
  },

  DELETE_LOYALTY_POINT(state) {
    state.loyaltyPoint = {};
  },

  RESET_LOYALTY_POINTS(state) {
    state.loyaltyPointS = [];
  },

  RESET_LOYALTY_POINT(state) {
    state.loyaltyPoint = {};
  },
};

export const actions = {
  commitSetLoyaltyPoints: async ({ commit }, responseData) => {
    await commit('SET_LOYALTY_POINTS', responseData.data);
  },

  commitSetPaginateLinks: async ({ commit }, responseData) => {
    await commit('SET_PAGINATE_LINKS', responseData.meta);
  },

  commitSetLoyaltyPoint: async ({ commit }, responseData) => {
    await commit('SET_LOYALTY_POINT', responseData.data)
  },
  commitSetLoyaltyPointStatus: async ({ commit }, responseData) => {
    await commit('SET_LOYALTY_POINT_STATUS', responseData.data)
  },

  commitCreateLoyaltyPointOnList: async ({ commit }, responseData) => {
    await commit('CREATE_LOYALTY_POINT_ON_LIST', responseData.data);
  },

  commitCreateLoyaltyPoint: async ({ commit }, responseData) => {
    await commit('CREATE_LOYALTY_POINT', responseData.data);
  },

  commitUpdateLoyaltyPointOnList: async ({ commit }, responseData) => {
    await commit('UPDATE_LOYALTY_POINT_ON_LIST', responseData.data);
  },

  commitUpdateLoyaltyPoint: async ({ commit }, responseData) => {
    await commit('UPDATE_LOYALTY_POINT', responseData.data);
  },

  commitDeleteLoyaltyPointOnList: async ({ commit }, roleId) => {
    await commit('DELETE_LOYALTY_POINT_ON_LIST', roleId);
  },

  commitDeleteLoyaltyPoint: async ({ commit }) => {
    await commit('DELETE_LOYALTY_POINT');
  },

  commitResetLoyaltyPoints: async ({ commit }) => {
    await commit('RESET_LOYALTY_POINTS');
  },

  commitResetLoyaltyPoint: async ({ commit }) => {
    await commit('RESET_LOYALTY_POINT');
  },

  // get list of loyaltyPoint by api call.
  async getLoyaltyPoints ({ dispatch }, params = {})  {
    const path = `v1/loyalty-points`;

    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commtiSetLoyaltyPoints', response.data);
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

  // get single loyaltyPoint by api call.
  async getLoyaltyPoint ({ dispatch }, paramObj)  {
    const path = `v1/loyalty-points/${paramObj.id}`;
    const params = paramObj.params ?? {};

    return this.$axios.get(path, { params: params }).then(response => {
      dispatch('commitSetLoyaltyPoint', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },
  // get single loyaltyPoint status by api call.
  async getLoyaltyPointStatus ({ dispatch }, paramObj)  {
   
    const path = `v1/loyalty-points/${paramObj.id}/status`;
    return this.$axios.get(path).then(response => {
      dispatch('commitSetLoyaltyPointStatus', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch(error => {
      return responseErrorHandler(error);
    });
  },

  // create new loyaltyPoint on list by api call.
  async postLoyaltyPointOnList ({ dispatch }, data)  {
    const path = `v1/loyalty-points`;

    return this.$axios.post(path, data).then((response) => {
      dispatch('commitCreateLoyaltyPointOnList', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // create new loyaltyPoint by api call.
  async postLoyaltyPoint ({ dispatch }, data)  {
    const path = `v1/loyalty-points`;

    return this.$axios.post(path, data).then((response) => {

      dispatch('commitCreateLoyaltyPoint', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // update single existing loyaltyPoint on list by api call.
  async putLoyaltyPointOnList ({ dispatch }, dataObj)  {
    const path = `v1/loyalty-points/${dataObj.id}`;
    const data = dataObj.data;

    return this.$axios.put(path, data).then((response) => {
      dispatch('commitUpdateLoyaltyPointOnList', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // update single existing loyaltyPoint by api call.
  async putLoyaltyPoint ({ dispatch }, dataObj)  {
    const path = `v1/loyalty-points/${dataObj.id}`;
    const data = dataObj.data;

    return this.$axios.put(path, data).then((response) => {
      dispatch('commitUpdateLoyaltyPoint', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // delete a particular loyaltyPoint on list by api call.
  async deleteLoyaltyPointOnList ({ dispatch }, id)  {
    const path = `v1/loyalty-points/${id}`;

    return this.$axios.delete(path).then((response) => {
      dispatch('commitDeleteLoyaltyPointOnList', id);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  // delete a particular loyaltyPoint by api call.
  async deleteLoyaltyPoint ({ dispatch }, id)  {
    const path = `v1/loyalty-points/${id}`;

    return this.$axios.delete(path).then((response) => {
      dispatch('commitDeleteLoyaltyPoint', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },

  async postLoyaltyCustomerRegistration (_, data)  {
    const path = `v1/loyalty-points/registration`;

    try {
      const response = this.$axios.post(path, data);
      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    } catch (error) {
      return responseErrorHandler(error);
    }
  },
  async postLoyaltyCustomerRefferar (_, data)  {
    const path = `v1/loyalty-points/referral`;

    try {
      const response = this.$axios.post(path, data);
      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    } catch (error) {
      return responseErrorHandler(error);
    }
  },

  // reset roles state.
  async resetLoyaltyPoints ({ dispatch })  {
    dispatch('commitResetLoyaltyPoints');
  },

  // reset loyaltyPoint state.
  async resetLoyaltyPoint ({ dispatch })  {
    dispatch('commitResetLoyaltyPoint')
  },

}
