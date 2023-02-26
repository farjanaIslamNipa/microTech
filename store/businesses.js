import responseErrorHandler from "../helper/responseErrorHandler";



export const state = () => ({
  businesses: [],
  paginateLinks: {},
  business: {},
});


export const getters = {
  businesses: (state) =>
  {
      return state.businesses;
  },

  paginateLinks: (state) =>
  {
      return state.paginateLinks;
  },

  business: (state) =>
  {
      return state.business;
  },
};


export const mutations = {
  SET_BUSINESSES (state, businesses)
  {
      state.businesses = businesses;
  },

  SET_PAGINATE_LINKS (state, paginateLinks)
  {
      state.paginateLinks = paginateLinks;
  },

  SET_BUSINESS (state, business)
  {
      state.business = business;
  },

  CREATE_BUSINESS_ON_LIST (state, business)
  {
      state.businesses.unshift(business);
  },

  CREATE_BUSINESS (state, business)
  {
      state.business = business;
  },

  UPDATE_BUSINESS_ON_LIST (state, business)
  {
      let index = state.businesses.findIndex(item => item.id === business.id);
      state.businesses.splice(index, 1, business);
  },

  UPDATE_BUSINESS (state, business)
  {
      state.business = business;
  },

  DELETE_BUSINESS_ON_LIST (state, businessId)
  {
      let index = state.businesses.findIndex(item => item.id === businessId);
      state.businesses.splice(index, 1);
  },

  DELETE_BUSINESS (state)
  {
      state.business = {};
  },

  RESET_BUSINESSES (state)
  {
      state.businesses = [];
  },

  RESET_BUSINESS (state)
  {
      state.business = {};
  },
  };

  export const actions = {
    commitSetBusinesses: async ({ commit }, responseData) =>
        {
            await commit('SET_BUSINESSES', responseData.data);
        },

        commitSetPaginateLinks: async ({ commit }, responseData) =>
        {
            await commit('SET_PAGINATE_LINKS', responseData.meta);
        },

        commitSetBusiness: async ({ commit }, responseData) =>
        {
            await commit('SET_BUSINESS', responseData.data)
        },

        commitCreateBusinessOnList: async ({ commit }, responseData) =>
        {
            await commit('CREATE_BUSINESS_ON_LIST', responseData.data);
        },

        commitCreateBusiness: async ({ commit }, responseData) =>
        {
            await commit('CREATE_BUSINESS', responseData.data);
        },

        commitUpdateBusinessOnList: async ({ commit }, responseData) =>
        {
            await commit('UPDATE_BUSINESS_ON_LIST', responseData.data);
        },

        commitUpdateBusiness: async ({ commit }, responseData) =>
        {
            await commit('UPDATE_BUSINESS', responseData.data);
        },

        commitDeleteBusinessOnList: async ({ commit }, businessId) =>
        {
            await commit('DELETE_BUSINESS_ON_LIST', businessId);
        },

        commitDeleteBusiness: async ({ commit }) =>
        {
            await commit('DELETE_BUSINESS');
        },

        commitResetBusinesses: async ({ commit }) =>
        {
            await commit('RESET_BUSINESSES');
        },

        commitResetBusiness: async ({ commit }) =>
        {
            await commit('RESET_BUSINESS');
        },

        // get list of business by api call.
        async  getBusinesses ({ dispatch }, params)
        {
            const path = `v1/businesses`;

            return this.$axios.get(path, { params: params }).then(response =>
            {
                dispatch('commitSetBusinesses', response.data);
                dispatch('commitSetPaginateLinks', response.data);

                return {
                    message: '',
                    type: 'success',
                    status: response.status,
                };
            }).catch(error =>
            {
                return responseErrorHandler(error);
            });
        },

        // get single business
        async getBusiness ({ dispatch }, paramObj)
        {
            const path = `v1/businesses/${paramObj.id}`;
            const params = paramObj.params ?? {};

            return this.$axios.get(path, { params: params }).then(response =>
            {
                dispatch('commitSetBusiness', response.data);

                return {
                    message: '',
                    type: 'success',
                    status: response.status,
                };
            }).catch(error =>
            {
                return responseErrorHandler(error);
            });
        },

        // create new business on list by api call.
        async postBusinessOnList ({ dispatch }, data)
        {
            const path = `v1/businesses`;
            return this.$axios.post(path, data).then((response) =>
            {
                dispatch('commitCreateBusinessOnList', response.data);

                return {
                    message: '',
                    type: 'success',
                    status: response.status,
                };

            }).catch((error) =>
            {
                return responseErrorHandler(error);
            });
        },

        // create new business
        async postBusiness ({ dispatch }, data)
        {
            const path = `v1/businesses`;

            return this.$axios.post(path, data).then((response) =>
            {

                dispatch('commitCreateBusiness', response.data);

                return {
                    message: '',
                    type: 'success',
                    status: response.status,
                };
            }).catch((error) =>
            {
                return responseErrorHandler(error);
            });
        },

        // update single existing business on list by api call.
        async putBusinessOnList ({ dispatch }, dataObj)
        {
            const path = `v1/businesses/${dataObj.id}`;
            const data = dataObj.data;

            return this.$axios.put(path, data).then((response) =>
            {
                dispatch('commitUpdateBusinessOnList', response.data);

                return {
                    message: '',
                    type: 'success',
                    status: response.status,
                };
            }).catch((error) =>
            {
                return responseErrorHandler(error);
            });
        },

        // update single existing business by api call.
        async  putBusiness ({ dispatch }, dataObj)
        {
            const path = `v1/businesses/${dataObj.id}`;
            const data = dataObj.data;

            return this.$axios.put(path, data).then((response) =>
            {
                dispatch('commitUpdateBusiness', response.data);

                return {
                    message: '',
                    type: 'success',
                    status: response.status,
                };
            }).catch((error) =>
            {
                return responseErrorHandler(error);
            });
        },

        // delete a particular business on list by api call.
        async deleteBusinessOnList ({ dispatch }, id)
        {
            const path = `v1/businesses/${id}`;

            return this.$axios.delete(path).then((response) =>
            {
                dispatch('commitDeleteBusinessOnList', id);

                return {
                    message: '',
                    type: 'success',
                    status: response.status,
                };
            }).catch((error) =>
            {
                return responseErrorHandler(error);
            });
        },

        // delete a particular business on list by api call.
        async  deleteBusiness ({ dispatch }, id)
        {
            const path = `v1/addresses/${id}`;

            return this.$axios.delete(path).then((response) =>
            {
                dispatch('commitDeleteBusiness');

                return {
                    message: '',
                    type: 'success',
                    status: response.status,
                };
            }).catch((error) =>
            {
                return responseErrorHandler(error);
            });
        },


        // reset businesses state.
        async resetBusinesses ({ dispatch })
        {
            dispatch('commitResetBusinesses');
        },

        // reset business state.
        async resetBusiness ({ dispatch })
        {
            dispatch('commitResetBusiness')
        },
  }
