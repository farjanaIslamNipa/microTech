import responseErrorHandler from "../helper/responseErrorHandler";

export default {
    namespaced: true,

    state: {
        technicians: [],
        paginateLinks: {},
        technician: {},
        technicianAvailableTimeSlots: [],
        availableTechnicians: {}
    },

    getters: {
        technicians: (state) =>
        {
            return state.technicians;
        },

        paginateLinks: (state) =>
        {
            return state.paginateLinks;
        },

        technician: (state) =>
        {
            return state.technician;
        },

        technicianAvailableTimeSlots: (state) =>
        {
            return state.technicianAvailableTimeSlots;
        },
        availableTechnicians: (state) =>
        {
            return state.availableTechnicians;
        },
    },
    mutations: {
        SET_TECHNICIANS (state, technicians)
        {
            state.technicians = technicians;
        },

        SET_PAGINATE_LINKS (state, paginateLinks)
        {
            state.paginateLinks = paginateLinks;
        },

        SET_TECHNICIAN (state, technician)
        {
            state.technician = technician;
        },

        CREATE_TECHNICIAN_ON_LIST (state, technician)
        {
            state.technicians.unshift(technician);
        },

        CREATE_TECHNICIAN (state, technician)
        {
            state.technician = technician;
        },

        UPDATE_TECHNICIAN_ON_LIST (state, technician)
        {
            let index = state.technicians.findIndex(item => item.id === technician.id);
            state.technicians.splice(index, 1, technician);
        },

        UPDATE_TECHNICIAN (state, technician)
        {
            state.technician = technician;
        },

        DELETE_TECHNICIAN_ON_LIST (state, technicianId)
        {
            let index = state.technicians.findIndex(item => item.id === technicianId);
            state.technicians.splice(index, 1);
        },

        DELETE_TECHNICIAN (state)
        {
            state.technician = {};
        },

        RESET_TECHNICIANS (state)
        {
            state.technicians = [];
        },

        RESET_TECHNICIAN (state)
        {
            state.technician = {};
        },

        SET_TECHNICIAN_AVAILABLE_TIME_SLOTS (state, technicianAvailableTimeSlots)
        {
            state.technicianAvailableTimeSlots = technicianAvailableTimeSlots;
        },
        SET_AVAILABLE_TECHNICIANS (state, availableTechnicians)
        {
            state.availableTechnicians = availableTechnicians;
        },
    },
    actions: {
        commitSetTechnicians: async ({ commit }, responseData) =>
        {
            await commit('SET_TECHNICIANS', responseData.data);
        },

        commitSetPaginateLinks: async ({ commit }, responseData) =>
        {
            await commit('SET_PAGINATE_LINKS', responseData.meta);
        },

        commitSetTechnician: async ({ commit }, responseData) =>
        {
            await commit('SET_TECHNICIAN', responseData.data)
        },

        commitCreateTechnicianOnList: async ({ commit }, responseData) =>
        {
            await commit('CREATE_TECHNICIAN_ON_LIST', responseData.data);
        },

        commitCreateTechnician: async ({ commit }, responseData) =>
        {
            await commit('CREATE_TECHNICIAN', responseData.data);
        },

        commitUpdateTechnicianOnList: async ({ commit }, responseData) =>
        {
            await commit('UPDATE_TECHNICIAN_ON_LIST', responseData.data);
        },

        commitUpdateTechnician: async ({ commit }, responseData) =>
        {
            await commit('UPDATE_TECHNICIAN', responseData.data);
        },

        commitDeleteTechnicianOnList: async ({ commit }, technicianId) =>
        {
            await commit('DELETE_TECHNICIAN_ON_LIST', technicianId);
        },

        commitDeleteTechnician: async ({ commit }) =>
        {
            await commit('DELETE_TECHNICIAN');
        },

        commitResetTechnicians: async ({ commit }) =>
        {
            await commit('RESET_TECHNICIANS');
        },

        commitResetTechnician: async ({ commit }) =>
        {
            await commit('RESET_TECHNICIAN');
        },

        commitTechnicianAvailableTimeSlots: async ({ commit }, responseData) =>
        {
            await commit('SET_TECHNICIAN_AVAILABLE_TIME_SLOTS', responseData.data);
        },
        commitAvailableTechnicians: async ({ commit }, responseData) =>
        {
            await commit('SET_AVAILABLE_TECHNICIANS', responseData.data);
        },

        // get list of technician by api call.
        getTechnicians: async ({ dispatch }, params) =>
        {
            const path = `v1/technicians`;

            return this.$axios.get(path, { params: params }).then(response =>
            {
                dispatch('commitSetTechnicians', response.data);
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

        // get single technician by api call.
        getTechnician: async ({ dispatch }, paramObj) =>
        {
            const path = `v1/technicians/${paramObj.id}`;
            const params = paramObj.params ?? {};

            return this.$axios.get(path, { params: params }).then(response =>
            {
                dispatch('commitSetTechnician', response.data);

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

        // create new technician on list by api call.
        postTechnicianOnList: async ({ dispatch }, data) =>
        {
            const path = `v1/technicians`;

            return this.$axios.post(path, data).then((response) =>
            {
                dispatch('commitCreateTechnicianOnList', response.data);

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

        // create new technician by api call.
        postTechnician: async ({ dispatch }, data) =>
        {
            const path = `v1/technicians`;

            return this.$axios.post(path, data).then((response) =>
            {
                dispatch('commitCreateTechnician', response.data);

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

        // update single existing technician on list by api call.
        putTechnicianOnList: async ({ dispatch }, dataObj) =>
        {
            const path = `v1/technicians/${dataObj.id}`;
            const data = dataObj.data;

            return this.$axios.put(path, data).then((response) =>
            {
                dispatch('commitUpdateTechnicianOnList', response.data);

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

        // update single existing technician by api call.
        putTechnician: async ({ dispatch }, dataObj) =>
        {
            const path = `v1/technicians/${dataObj.id}`;
            const data = dataObj.data;

            return this.$axios.put(path, data).then((response) =>
            {
                dispatch('commitUpdateTechnician', response.data);

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

        // delete a particular technician on list by api call.
        deleteTechnicianOnList: async ({ dispatch }, id) =>
        {
            const path = `v1/technicians/${id}`;

            return this.$axios.delete(path).then((response) =>
            {
                dispatch('commitDeleteTechnicianOnList', id);

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

        // delete a particular technician by api call.
        deleteTechnician: async ({ dispatch }, id) =>
        {
            const path = `v1/technicians/${id}`;

            return this.$axios.delete(path).then((response) =>
            {
                dispatch('commitDeleteTechnician', response.data);

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

        // reset technicians state.
        resetTechnicians: async ({ dispatch }) =>
        {
            dispatch('commitResetTechnicians');
        },

        // reset technician state.
        resetTechnician: async ({ dispatch }) =>
        {
            dispatch('commitResetTechnician')
        },

        // get technician's available time slots by api call with post request.
        async postTechnicianAvailableTimeSlots ({ dispatch }, data) {
            const path = `v1/technicians/available-time-slots`;

            return this.$axios.post(path, data).then((response) =>
            {
                dispatch('commitTechnicianAvailableTimeSlots', response.data);

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

        // get technician's available time slots by api call with post request.
        getAvailableTechnicians: async ({ dispatch }, data) =>
        {
            const path = `v1/technicians/available-technicians`;

            return this.$axios.post(path, data).then((response) =>
            {
                dispatch('commitAvailableTechnicians', response.data);

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

    },
};
