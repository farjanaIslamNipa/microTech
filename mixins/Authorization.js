

const Authorization = {
    methods: {

        // check a single permission
        can(permissionGate = '') {
            const authPermissions =  window.$nuxt.$store.getters['login/authPermissions'];
           
            return authPermissions.includes(permissionGate);
        },

        // check multiple permissions and return ture if any of them is true
        canAny(permissionGates = []) {
            const authPermissions =  window.$nuxt.$store.getters['login/authPermissions'];
            if (permissionGates.length === 0) {
                return false;
            }
            return permissionGates.some(permission => authPermissions.includes(permission));
        },

        // check multiple permissions and return ture if all of them is true
        canAll(permissionGates = []) {
            const authPermissions =  window.$nuxt.$store.getters['login/authPermissions'];
            if (permissionGates.length === 0) {
                return false;
            }
            return permissionGates.every(permission => authPermissions.includes(permission));
        },

        // check single permission and return false if the permission is there.
        canNot(permissionGate = '') {
            const authPermissions =  window.$nuxt.$store.getters['login/authPermissions'];
            return !authPermissions.includes(permissionGate);
        },

        // check multiple permissions and return false if any of them is there.
        canNotAny(permissionGates = []) {
            const authPermissions =  window.$nuxt.$store.getters['login/authPermissions'];
            if (permissionGates.length === 0) {
                return false;
            }
            return !permissionGates.some(permission => authPermissions.includes(permission));
        },

        // check multiple permissions and return false if all of them is there.
        canNotAll(permissionGates = []) {
            const authPermissions =  window.$nuxt.$store.getters['login/authPermissions'];
            if (permissionGates.length === 0) {
                return false;
            }
            return !permissionGates.every(permission => authPermissions.includes(permission));
        },

    },
};

export default Authorization;
