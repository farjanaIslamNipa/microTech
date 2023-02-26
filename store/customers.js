import responseErrorHandler from "../helper/responseErrorHandler";



export const state = () => ({
    customers: [],
    paginateLinks: {},
    customer: {},
    referrerCustomer: {},
});


export const getters = {
    customers: (state) => {
        return state.customers;
    },

    paginateLinks: (state) => {
        return state.paginateLinks;
    },

    customer: (state) => {
        return state.customer;
    },
    referrerCustomer: (state) => {
        return state.referrerCustomer;
    },
};

export const mutations = {
    SET_CUSTOMERS(state, customers) {
        state.customers = customers;
    },

    SET_PAGINATE_LINKS(state, paginateLinks) {
        state.paginateLinks = paginateLinks;
    },

    SET_CUSTOMER(state, customer) {
        state.customer = customer;
    },
    SET_REFERRER_CUSTOMER(state, referrerCustomer) {
        state.referrerCustomer = referrerCustomer;
    },

    CREATE_CUSTOMER_ON_LIST(state, customer) {
        state.customers.unshift(customer);
    },

    CREATE_CUSTOMER(state, customer) {
        state.customer = customer;
    },

    UPDATE_CUSTOMER_ON_LIST(state, customer) {
        let index = state.customers.findIndex(item => item.id === customer.id);
        state.customers.splice(index, 1, customer);
    },

    UPDATE_CUSTOMER(state, customer) {
        state.customer = customer;
    },

    DELETE_CUSTOMER_ON_LIST(state, customerId) {
        let index = state.customers.findIndex(item => item.id === customerId);
        state.customers.splice(index, 1);
    },

    DELETE_CUSTOMER(state) {
        state.customer = {};
    },

    RESET_CUSTOMERS(state) {
        state.customers = [];
    },

    RESET_CUSTOMER(state) {
        state.customer = {};
    },
}




export const actions = {

    commitSetCustomers: async ({ commit }, responseData) => {
        await commit('SET_CUSTOMERS', responseData.data);
    },

    commitSetPaginateLinks: async ({ commit }, responseData) => {
        await commit('SET_PAGINATE_LINKS', responseData.meta);
    },

    commitSetCustomer: async ({ commit }, responseData) => {
        await commit('SET_CUSTOMER', responseData.data)
    },
    commitSetReferrerCustomer: async ({ commit }, responseData) => {
        await commit('SET_REFERRER_CUSTOMER', responseData.data)
    },

    commitCreateCustomerOnList: async ({ commit }, responseData) => {
        await commit('CREATE_CUSTOMER_ON_LIST', responseData.data);
    },
    commitCreateCustomer: async ({ commit }, responseData) => {
        await commit('CREATE_CUSTOMER', responseData.data);
    },

    commitUpdateCustomerOnList: async ({ commit }, responseData) => {
        await commit('UPDATE_CUSTOMER_ON_LIST', responseData.data);
    },
    commitUpdateCustomer: async ({ commit }, responseData) => {

        await commit('UPDATE_CUSTOMER', responseData.data);
    },

    commitDeleteCustomerOnList: async ({ commit }, customerId) => {
        await commit('DELETE_CUSTOMER_ON_LIST', customerId);
    },

    commitDeleteCustomer: async ({ commit }) => {
        await commit('DELETE_CUSTOMER');
    },

    commitResetCustomers: async ({ commit }) => {
        await commit('RESET_CUSTOMERS');
    },

    commitResetCustomer: async ({ commit }) => {
        await commit('RESET_CUSTOMER');
    },

    // get list of customer by api call.
    async getCustomers({ dispatch }, params) {
        const path = `v1/customers`;

        return this.$axios.get(path, { params: params }).then(response => {
            dispatch('commitSetCustomers', response.data);
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

    // get single customer
    async getCustomer({ dispatch }, paramObj) {
        const path = `v1/customers/${paramObj.id}`;
        const params = paramObj.params ?? {};

        return this.$axios.get(path, { params: params }).then(response => {
            dispatch('commitSetCustomer', response.data);

            return {
                message: '',
                type: 'success',
                status: response.status,
            };
        }).catch(error => {
            return responseErrorHandler(error);
        });
    },

    // create new customer on list
    async postCustomerOnList({ dispatch }, data) {
        const path = `v1/customers`;
        return this.$axios.post(path, data).then((response) => {
            dispatch('commitCreateCustomerOnList', response.data);

            return {
                message: '',
                type: 'success',
                status: response.status,
            };
        }).catch((error) => {
            return responseErrorHandler(error);
        });
    },

    // create new customer
    async postCustomer({ dispatch }, data) {
        const path = `v1/customers`;
        return this.$axios.post(path, data).then((response) => {

            dispatch('commitCreateCustomer', response.data);

            return {
                message: '',
                type: 'success',
                status: response.status,
            };
        }).catch((error) => {
            return responseErrorHandler(error);
        });
    },

    // update single existing customer on list by api call.
    async putCustomerOnList({ dispatch }, dataObj) {
        const path = `v1/customers/${dataObj.id}`;
        const data = dataObj.data;

        return this.$axios.put(path, data).then((response) => {
            dispatch('commitUpdateCustomerOnList', response.data);

            return {
                message: '',
                type: 'success',
                status: response.status,
            };
        }).catch((error) => {
            return responseErrorHandler(error);
        });
    },

    // update single existing customer by api call.
    async putCustomer({ dispatch }, dataObj) {
        const path = `v1/customers/${dataObj.id}`;
        const data = dataObj.data;

        return this.$axios.put(path, data).then((response) => {

            dispatch('commitUpdateCustomer', response.data);

            return {
                message: '',
                type: 'success',
                status: response.status,
            };
        }).catch((error) => {
            return responseErrorHandler(error);
        });
    },

    // delete a particular customer on list by api call.
    async deleteCustomerOnList({ dispatch }, id) {
        const path = `v1/customers/${id}`;

        return this.$axios.delete(path).then((response) => {
            dispatch('commitDeleteCustomerOnList', id);

            return {
                message: '',
                type: 'success',
                status: response.status,
            };
        }).catch((error) => {
            return responseErrorHandler(error);
        });
    },

    // delete a particular customer by api call.
    async deleteCustomer({ dispatch }, id) {
        const path = `v1/customers/${id}`;

        return this.$axios.delete(path).then((response) => {
            dispatch('commitDeleteCustomer', response.data);

            return {
                message: '',
                type: 'success',
                status: response.status,
            };
        }).catch((error) => {
            return responseErrorHandler(error);
        });
    },

    // reset customers
    async resetCustomers({ dispatch }) {
        dispatch('commitResetCustomers');
    },
    // reset customer
    async resetCustomer({ dispatch }) {
        dispatch('commitResetCustomer');
    },

    // get single referrer (customer)
    async getReferrer({ dispatch }, paramObj) {
        const path = `v1/customers/referrer/${paramObj.referrerCode}`;
        const params = paramObj.params ?? {};

        return this.$axios.get(path, { params: params }).then(response => {
            dispatch('commitSetReferrerCustomer', response.data);

            return {
                message: '',
                type: 'success',
                status: response.status,
            };
        })
            .catch(error => {
               
                return {
                    message: '',
                    type: 'error',
                    status: error?.response?.status,
                };
            });
    },


}
