import responseErrorHandler from "../helper/responseErrorHandler";



export const state = () => ({
    addresses: [],
    paginateLinks: {},
    address: {},
});


export const getters = {
    addresses: (state) => {
        return state.addresses;
    },
    paginateLinks: (state) => {
        return state.paginateLinks;
    },
    address: (state) => {
        return state.address;
    },
};


export const mutations = {
    SET_ADDRESSES(state, addresses) {
        state.addresses = addresses;
    },

    SET_PAGINATE_LINKS(state, paginateLinks) {
        state.paginateLinks = paginateLinks;
    },

    SET_ADDRESS(state, address) {
        state.address = address;
    },

    CREATE_ADDRESS_ON_LIST(state, address) {
        state.addresses.unshift(address);
    },

    CREATE_ADDRESS(state, address) {
        state.address = address;
    },

    UPDATE_ADDRESS_ON_LIST(state, address) {
        let index = state.addresses.findIndex(item => item.id === address.id);
        state.addresses.splice(index, 1, address);
    },

    UPDATE_ADDRESS(state, address) {
        state.address = address;
    },

    DELETE_ADDRESS_ON_LIST(state, addressId) {
        let index = state.addresses.findIndex(item => item.id === addressId);
        state.addresses.splice(index, 1);
    },

    DELETE_ADDRESS(state) {
        state.address = {};
    },

    RESET_ADDRESSES(state) {
        state.addresses = [];
    },

    RESET_ADDRESS(state) {
        state.address = {};
    },
};

export const actions = {
    commitSetAddresses: async ({ commit }, responseData) => {
        await commit('SET_ADDRESSES', responseData.data)
    },

    commitSetPaginateLinks: async ({ commit }, responseData) => {
        await commit('SET_PAGINATE_LINKS', responseData.meta);
    },

    commitSetAddress: async ({ commit }, responseData) => {
        await commit('SET_ADDRESS', responseData.data)
    },

    commitCreateAddressOnList: async ({ commit }, responseData) => {
        await commit('CREATE_ADDRESS_ON_LIST', responseData.data);
    },

    commitCreateAddress: async ({ commit }, responseData) => {
        await commit('CREATE_ADDRESS', responseData.data);
    },

    commitUpdateAddressOnList: async ({ commit }, responseData) => {
        await commit('UPDATE_ADDRESS_ON_LIST', responseData.data);
    },

    commitUpdateAddress: async ({ commit }, responseData) => {
        await commit('UPDATE_ADDRESS', responseData.data);
    },

    commitDeleteAddressOnList: async ({ commit }, addressId) => {
        await commit('DELETE_ADDRESS_ON_LIST', addressId);
    },

    commitDeleteAddress: async ({ commit }) => {
        await commit('DELETE_ADDRESS');
    },

    commitResetAddresses: async ({ commit }) => {
        await commit('RESET_ADDRESSES');
    },

    commitResetAddress: async ({ commit }) => {
        await commit('RESET_ADDRESS');
    },

    // get list of address by api call.
    async getAddresses ({ dispatch }, params) {
        const path = `v1/addresses`;

        return this.$axios.get(path, { params: params }).then(response => {
            dispatch('commitSetAddresses', response.data);
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

    // get single address by api call.
    async getAddress ({ dispatch }, paramObj)  {
        const path = `v1/addresses/${paramObj.id}`;
        const params = paramObj.params ?? {};

        return this.$axios.get(path, { params: params }).then(response => {
            dispatch('commitAddress', response.data);

            return {
                message: '',
                type: 'success',
                status: response.status,
            };
        }).catch(error => {
            return responseErrorHandler(error);
        });
    },

    // create new address on list by api call.
    async postAddressOnList ({ dispatch }, data) {
        const path = `v1/addresses`;

        return this.$axios.post(path, data).then((response) => {
            dispatch('commitCreateAddressOnList', response.data);

            return {
                message: '',
                type: 'success',
                status: response.status,
            };
        }).catch((error) => {
            return responseErrorHandler(error);
        });
    },

    // create new address by api call.
    async postAddress ({ dispatch }, data) {
        const path = `v1/addresses`;

        return this.$axios.post(path, data).then((response) => {
            dispatch('commitCreateAddress', response.data);

            return {
                message: '',
                type: 'success',
                status: response.status,
            };
        }).catch((error) => {
            return responseErrorHandler(error);
        });
    },

    // update single existing address on list by api call.
    async putAddressOnList ({ dispatch }, dataObj)  {
        const path = `v1/addresses/${dataObj.id}`;
        const data = dataObj.data;

        return this.$axios.put(path, data).then((response) => {
            dispatch('commitUpdateAddressOnList', response.data)
            return {
                message: '',
                type: 'success',
                status: response.status,
            };
        }).catch((error) => {
            return responseErrorHandler(error);
        });
    },

    // update single existing address by api call.
    async  putAddress ({ dispatch }, dataObj)  {
        const path = `v1/addresses/${dataObj.id}`;
        const data = dataObj.data;

        return this.$axios.put(path, data).then((response) => {
            dispatch('commitUpdateAddress', response.data);

            return {
                message: '',
                type: 'success',
                status: response.status,
            };
        }).catch((error) => {
            return responseErrorHandler(error);
        });
    },

    // delete a particular address on list by api call.
    async deleteAddressOnList ({ dispatch }, id)  {
        const path = `v1/addresses/${id}`;

        return this.$axios.delete(path).then((response) => {
            dispatch('commitDeleteAddressOnList', id);

            return {
                message: '',
                type: 'success',
                status: response.status,
            };
        }).catch((error) => {
            return responseErrorHandler(error);
        });
    },

    // delete a particular address on list by api call.
    async  deleteAddress ({ dispatch }, id)  {
        const path = `v1/addresses/${id}`;

        return this.$axios.delete(path).then((response) => {
            dispatch('commitDeleteAddress');

            return {
                message: '',
                type: 'success',
                status: response.status,
            };
        }).catch((error) => {
            return responseErrorHandler(error);
        });
    },


    // reset addresses state.
    resetAddresses ({ dispatch })  {
        dispatch('commitResetAddresses');
    },

    // reset address state.
    resetAddress ({ dispatch })  {
        dispatch('commitResetAddress')
    },
}
