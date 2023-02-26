import responseErrorHandler from "../helper/responseErrorHandler";



export const state = () => ({
    users: [],
    paginateLinks: {},
    user: {},
    registeredEmailDomains: [],
    userType: [],
});


export const getters = {
    users: (state) => {
        return state.users;
    },

    paginateLinks: (state) => {
        return state.paginateLinks;
    },

    user: (state) => {
        return state.user;
    },
    userType: (state) => {
        return state.userType;
    },
    registeredEmailDomains: (state) => {
        return state.registeredEmailDomains;
    },
};


export const mutations = {
    SET_USERS (state, users)
    {
        state.users = users;
    },

    SET_PAGINATE_LINKS (state, paginateLinks)
    {
        state.paginateLinks = paginateLinks;
    },

    SET_USER (state, user)
    {
        state.user = user;
    },
    SET_USER_TYPE (state, userType)
    {
        state.userType = userType;
    },

    CREATE_USER_ON_LIST (state, user)
    {
        state.users.unshift(user);
    },

    CREATE_USER (state, user)
    {
        state.user = user;
    },

    UPDATE_USER_ON_LIST (state, user)
    {
        let index = state.users.findIndex(item => item.id === user.id);
        state.users.splice(index, 1, user);
    },

    UPDATE_USER (state, user)
    {
        state.user = user;
    },

    DELETE_USER_ON_LIST (state, userId)
    {
        let index = state.users.findIndex(item => item.id === userId);
        state.users.splice(index, 1);
    },

    DELETE_USER (state)
    {
        state.user = {};
    },

    RESET_USERS (state)
    {
        state.users = [];
    },

    RESET_USER (state)
    {
        state.user = {};
    },

    SET_REGISTERED_EMAIL_DOMAINS (state, registeredEmailDomains)
    {
        state.registeredEmailDomains = registeredEmailDomains;
    },
  };

  export const actions = {
    commitSetUsers: async ({ commit }, responseData) =>
        {
            await commit('SET_USERS', responseData.data);
        },

        commitSetPaginateLinks: async ({ commit }, responseData) =>
        {
            await commit('SET_PAGINATE_LINKS', responseData.meta);
        },

        commitSetUser: async ({ commit }, responseData) =>
        {
            await commit('SET_USER', responseData.data)
        },

        commitSetUserType: async ({ commit }, responseData) =>
        {
            await commit('SET_USER_TYPE', responseData.data.user_type)
        },

        commitCreateUserOnList: async ({ commit }, responseData) =>
        {
            await commit('CREATE_USER_ON_LIST', responseData.data);
        },

        commitCreateUser: async ({ commit }, responseData) =>
        {
            await commit('CREATE_USER', responseData.data);
        },

        commitUpdateUserOnList: async ({ commit }, responseData) =>
        {
            await commit('UPDATE_USER_ON_LIST', responseData.data);
        },

        commitUpdateUser: async ({ commit }, responseData) =>
        {
            await commit('UPDATE_USER', responseData.data);
        },

        commitDeleteUserOnList: async ({ commit }, userId) =>
        {
            await commit('DELETE_USER_ON_LIST', userId);
        },

        commitDeleteUser: async ({ commit }) =>
        {
            await commit('DELETE_USER');
        },

        commitResetUsers: async ({ commit }) =>
        {
            await commit('RESET_USERS');
        },

        commitResetUser: async ({ commit }) =>
        {
            await commit('RESET_USER');
        },

        commitRegisteredEmailDomains: async ({ commit }, responseData) =>
        {
            await commit('SET_REGISTERED_EMAIL_DOMAINS', responseData.data);
        },

        // get list of user by api call.
        async  getUsers  ({ dispatch }, params)
        {
            const path = `v1/users`;

            return this.$axios.get(path, { params: params }).then(response =>
            {
                dispatch('commitSetUsers', response.data);
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

        // get single user by api call.
        async getUser  ({ dispatch }, paramObj)
        {
            const path = `v1/users/${paramObj.id}`;
            const params = paramObj.params ?? {};

            return this.$axios.get(path, { params: params }).then(response =>
            {
                dispatch('commitSetUser', response.data);

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

        // get  user type by api call.
        async getUserType  ({ dispatch }, param)
        {
            const path = `v1/users/${param}/user-type`;
            // api / v1 / users /: id / user - type

            return this.$axios.get(path).then(response =>
            {
                dispatch('commitSetUserType', response.data);

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

        // create new user on list by api call.
        async  postUserOnList  ({ dispatch }, data)
        {
            const path = `v1/users`;

            return this.$axios.post(path, data).then((response) =>
            {
                dispatch('commitCreateUserOnList', response.data);

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

        // create new user by api call.
        async postUser  ({ dispatch }, data)
        {
            const path = `v1/users`;

            return this.$axios.post(path, data).then((response) =>
            {
                dispatch('commitCreateUser', response.data);

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

        // find user by api call.
        async userFind  ({ dispatch }, data)
        {
            const path = `v1/users/find`;

            return this.$axios.post(path, data).then((response) =>
            {
                dispatch('commitSetUser', response.data);

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

        // update single existing user on list by api call.
        async putUserOnList  ({ dispatch }, dataObj)
        {
            const path = `v1/users/${dataObj.id}`;
            const data = dataObj.data;

            return this.$axios.put(path, data).then((response) =>
            {
                dispatch('commitUpdateUserOnList', response.data);

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

        // update single existing user by api call.
        async putUser  ({ dispatch }, dataObj)
        {
            const path = `v1/users/${dataObj.id}`;
            const data = dataObj.data;

            return this.$axios.put(path, data).then((response) =>
            {
                dispatch('commitUpdateUser', response.data);

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

        // delete a particular user on list by api call.
        async  deleteUserOnList  ({ dispatch }, id)
        {
            const path = `v1/users/${id}`;

            return this.$axios.delete(path).then((response) =>
            {
                dispatch('commitDeleteUserOnList', id);

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

        // delete a particular user by api call.
        async  deleteUser  ({ dispatch }, id)
        {
            const path = `v1/users/${id}`;

            return this.$axios.delete(path).then((response) =>
            {
                dispatch('commitDeleteUser', response.data);

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

        // reset users state.
        resetUsers  ({ dispatch })
        {
            dispatch('commitResetUsers');
        },

        // reset user state.
        resetUser  ({ dispatch })
        {
            dispatch('commitResetUser')
        },

        // update user avatar by api call.
        async putAvatar  ({ dispatch }, dataObj)
        {
            const path = `v1/users/${dataObj.id}/avatar`;
            const data = dataObj.data ?? {};

            return this.$axios.put(path, data).then((response) =>
            {
                dispatch('commitUpdateUser', response.data);

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

        // get registered email domains by api call.
        async getRegisteredEmailDomains ({ dispatch })
        {
            const path = `v1/users/registered-email-domains`;

            return this.$axios.get(path).then((response) =>
            {
                dispatch('commitRegisteredEmailDomains', response.data);

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
  }
