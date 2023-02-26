import responseErrorHandler from "../helper/responseErrorHandler";



export const state = () => ({
    contacts: [],
    paginateLinks: {},
    contact: {},
});


export const getters = {
    contacts: (state) => {
        return state.contacts;
    },

    paginateLinks: (state) => {
        return state.paginateLinks;
    },

    contact: (state) => {
        return state.contact;
    },
};


export const mutations = {
    SET_CONTACTS(state, contacts) {
        state.contacts = contacts;
    },

    SET_PAGINATE_LINKS(state, paginateLinks) {
        state.paginateLinks = paginateLinks;
    },

    SET_CONTACT(state, contact) {
        state.contact = contact;
    },

    CREATE_CONTACT_ON_LIST(state, contact) {
        state.contacts.unshift(contact);
    },

    CREATE_CONTACT(state, contact) {
        state.contact = contact;
    },

    UPDATE_CONTACT_ON_LIST(state, contact) {
        let index = state.contacts.findIndex(item => item.id === contact.id);
        state.contacts.splice(index, 1, contact);
    },

    UPDATE_CONTACT(state, contact) {
        state.contact = contact;
    },

    DELETE_CONTACT_ON_LIST(state, contactId) {
        let index = state.contacts.findIndex(item => item.id === contactId);
        state.contacts.splice(index, 1);
    },

    DELETE_CONTACT(state) {
        state.contact = {};
    },

    RESET_CONTACTS(state) {
        state.contacts = [];
    },

    RESET_CONTACT(state) {
        state.contact = {};
    },
};

export const actions = {
    commitSetContacts: async ({ commit }, responseData) => {
        await commit('SET_CONTACTS', responseData.data);
    },

    commitSetPaginateLinks: async ({ commit }, responseData) => {
        await commit('SET_PAGINATE_LINKS', responseData.meta);
    },

    commitSetContact: async ({ commit }, responseData) => {
        await commit('SET_CONTACT', responseData.data)
    },

    commitCreateContactOnList: async ({ commit }, responseData) => {
        await commit('CREATE_CONTACT_ON_LIST', responseData.data);
    },

    commitCreateContact: async ({ commit }, responseData) => {
        await commit('CREATE_CONTACT', responseData.data);
    },

    commitUpdateContactOnList: async ({ commit }, responseData) => {
        await commit('UPDATE_CONTACT_ON_LIST', responseData.data);
    },

    commitUpdateContact: async ({ commit }, responseData) => {
        await commit('UPDATE_CONTACT', responseData.data);
    },

    commitDeleteContactOnList: async ({ commit }, contactId) => {
        await commit('DELETE_CONTACT_ON_LIST', contactId);
    },

    commitDeleteContact: async ({ commit }) => {
        await commit('DELETE_CONTACT');
    },

    commitResetContacts: async ({ commit }) => {
        await commit('RESET_CONTACTS');
    },

    commitResetContact: async ({ commit }) => {
        await commit('RESET_CONTACT');
    },

    // get list of contact by api call.
    async getContacts({ dispatch }, params = {}) {
        const path = `v1/contacts`;

        return this.$axios.get(path, { params: params }).then(response => {
            dispatch('commitSetContacts', response.data);
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

    // get single contact by api call.
    async getContact({ dispatch }, paramObj) {
        const path = `v1/contacts/${paramObj.id}`;
        const params = paramObj.params ?? {};

        return this.$axios.get(path, { params: params }).then(response => {
            dispatch('commitSetContact', response.data);

            return {
                message: '',
                type: 'success',
                status: response.status,
            };
        }).catch(error => {
            return responseErrorHandler(error);
        });
    },

    // create new contact on list by api call.
    async postContactOnList({ dispatch }, data) {
        const path = `v1/contacts`;

        return this.$axios.post(path, data).then((response) => {
            dispatch('commitCreateContactOnList', response.data);

            return {
                message: '',
                type: 'success',
                status: response.status,
            };
        }).catch((error) => {
            return responseErrorHandler(error);
        });
    },

    // create new contact by api call.
    async postContact({ dispatch }, data) {
        const path = `v1/contacts`;

        return this.$axios.post(path, data).then((response) => {

            dispatch('commitCreateContact', response.data);

            return {
                message: '',
                type: 'success',
                status: response.status,
            };
        }).catch((error) => {
            return responseErrorHandler(error);
        });
    },

    // update single existing contact on list by api call.
    async putContactOnList({ dispatch }, dataObj) {
        const path = `v1/contacts/${dataObj.id}`;
        const data = dataObj.data;

        return this.$axios.put(path, data).then((response) => {
            dispatch('commitUpdateContactOnList', response.data);

            return {
                message: '',
                type: 'success',
                status: response.status,
            };
        }).catch((error) => {
            return responseErrorHandler(error);
        });
    },

    // update single existing contact by api call.
    async putContact({ dispatch }, dataObj) {
        const path = `v1/contacts/${dataObj.id}`;
        const data = dataObj.data;

        return this.$axios.put(path, data).then((response) => {
            dispatch('commitUpdateContact', response.data);

            return {
                message: '',
                type: 'success',
                status: response.status,
            };
        }).catch((error) => {
            return responseErrorHandler(error);
        });
    },

    // delete a particular contact on list by api call.
    async deleteContactOnList({ dispatch }, id) {
        const path = `v1/contacts/${id}`;

        return this.$axios.delete(path).then((response) => {
            dispatch('commitDeleteContactOnList', id);

            return {
                message: '',
                type: 'success',
                status: response.status,
            };
        }).catch((error) => {
            return responseErrorHandler(error);
        });
    },

    // delete a particular contact by api call.
    async deleteContact({ dispatch }, id) {
        const path = `v1/contacts/${id}`;

        return this.$axios.delete(path).then((response) => {
            dispatch('commitDeleteContact', response.data);

            return {
                message: '',
                type: 'success',
                status: response.status,
            };
        }).catch((error) => {
            return responseErrorHandler(error);
        });
    },

    // reset contacts state.
    resetContacts({ dispatch }) {
        dispatch('commitResetContacts');
    },

    // reset contact state.
    resetContact({ dispatch }) {
        dispatch('commitResetContact')
    },

    // send contact creation notification
    postSendContactCreationNotify(_, dataObj) {
        const path = `v1/contacts/send-creation-notify/${dataObj.id}`;
        const data = dataObj.data;

        return this.$axios.post(path, data).then((response) => {

            return {
                message: '',
                type: 'success',
                status: response.status,
            };
        }).catch((error) => {
            return responseErrorHandler(error);
        });

    }

};

