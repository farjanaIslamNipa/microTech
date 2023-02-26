import responseErrorHandler from "../helper/responseErrorHandler";



export const state = () => ({
  discountStoreList: {},
});


export const getters = {

};


export const mutations = {
  CREATE_DISCOUNT_STORE_LIST(state, discountStoreList) {
    state.discountStoreList = discountStoreList;
  },
};

export const actions = {
  async commitCreateDiscountStoreList ({ commit }, responseData)  {
    await commit('CREATE_DISCOUNT_STORE_LIST', responseData.data);
  },


  // create new discount store list by api call.
  async postDiscountStoreList ({ dispatch }, data)  {
    const path = `v1/discounts/store-list`;

    return this.$axios.post(path, data).then((response) => {

      dispatch('commitCreateDiscountStoreList', response.data);

      return {
        message: '',
        type: 'success',
        status: response.status,
      };
    }).catch((error) => {
      return responseErrorHandler(error);
    });
  },
}
