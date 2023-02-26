import responseErrorHandler from "../helper/responseErrorHandler";

export const actions = {
 async logout ({dispatch})  {
    const path = `v1/logout-token`;

    return this.$axios.post(path).then((response) => {
        window.$nuxt.$store.dispatch('login/commitLogoutAttempt');
        // dispatch('login/commitLogoutAttempt');
        return {
            message: "Logout Successful",
            type: "success",
            status: response.status,
        };
    }).catch((error) => {
        return responseErrorHandler(error);
    });
},


};

