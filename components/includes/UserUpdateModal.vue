<template>
  <div class="modal fade " :id="modalName" tabindex="-1" role="dialog" :aria-labelledby="modalName" aria-hidden="true">
    <div class="modal-dialog  modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-brand">
          <h5 class="modal-title text-white">
            Update User Information
          </h5>
          <button type="button" class="btn close text-white" data-bs-dismiss="modal" aria-label="Close">
             <i class="fa-solid fa-x text-white"></i>
          </button>
        </div>
        <div class="modal-body">
          <div>
            <div class="row ">
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <div class="">
                    <label>First name *</label>
                    <input v-model="putUserData.first_name" disabled type="text" class="form-control "
                           placeholder="Enter first name" readonly/>
                    <div class="text-danger" v-if="errors.firstName">{{ errors.firstName }}</div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <div class="">
                    <label>Last name *</label>
                    <input v-model="putUserData.last_name" disabled type="text" class="form-control "
                           placeholder="Enter last name" readonly/>
                    <div class="text-danger" v-if="errors.lastName">{{ errors.lastName }}</div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <div class="">
                    <label>Phone number</label>
                    <input v-model="putUserData.phone_number" type="tel" class="form-control "
                           placeholder="ie. 0412345678"  :disabled="(userData.phoneNumber === '' || userData.phoneNumber === null ) ? false : true" />
                    <div class="text-danger" v-if="errors.phoneNumber">{{ errors.phoneNumber }}</div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <div class="">
                    <label>Email address *</label>
                    <input  v-model="putUserData.email" type="email" :disabled="(userData.email === '' || userData.email === null ) ? false : true" class="form-control "
                           placeholder="ie. example@gmail.com"/>
                    <div class="text-danger" v-if="errors.email">{{ errors.email }}</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="modal-footer border-0 pt-0">
          <button type="submit" class="btn bg-brand text-white" @click="updateSingleUser">

            <span class="">Save Changes</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//mixins


// core packages
import {mapGetters, mapActions} from 'vuex';
import Loader from '~/mixins/Loader';
import ShowToastMessage from '~/mixins/ShowToastMessage';

export default {
  name: "userUpdateModal",
  mixins: [ShowToastMessage,Loader],
  emits: ['updatedUserData'],
  props: {
    modalName: {
      type: String,
      default: "userAndUserRoleUpdateModal"
    },
    userId: {
      type: [Number, String],
      required: true,
    },
    userData: {
      type: Object,
      required: false,
      default: () => ({firstName: '', lastName: '', email: '', phoneNumber: '',}),
    },

    dateOfBirthInputActive: {
      type: Boolean,
      required: false,
      default: true,
    }
  },
  components: {},
  data() {
    return {
      putUserData: {
        role_id: '',
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
      },
      errors: {
        roleId: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',

      },
    }
  },

  computed: {
    ...mapGetters({
      user: 'users/user',
    }),

  },

  watch: {
    userData(userData) {
      this.putUserData.first_name = userData.firstName;
      this.putUserData.last_name = userData.lastName;
      this.putUserData.email = userData.email;
      this.putUserData.phone_number = userData.phoneNumber;
    },

  },
  methods: {
    ...mapActions({
      putUser: 'users/putUser',
    }),

    async updateSingleUser() {
      let data = {};

      data = {
        first_name: this.putUserData.first_name,
        last_name: this.putUserData.last_name,
        email: this.putUserData.email,
        phone_number: this.putUserData.phone_number,

      };


      const dataObj = {
        id: this.userId,
        data: data,
      };
      this.loader(true);
      await this.putUser(dataObj).then(async (response) => {
        this.loader(false);
        if (response.status === 200) {
          document.querySelector(`[data-bs-target="#${this.modalName}"]`).click(); // modal close

          let toastObj = {message: 'Info has Updated', type: 'success'};
          this.showToastMessage(toastObj);

          this.$emit('updatedUserData', {
            userData: {
              firstName: this.user.first_name,
              lastName: this.user.last_name,
              email: this.user.email,
              phoneNumber: this.user.phone_number,
            },
          });
        }

        this.errors.firstName = response.errors && response.errors.first_name ? response.errors.first_name[0] : '';
        this.errors.lastName = response.errors && response.errors.last_name ? response.errors.last_name[0] : '';
        this.errors.email = response.errors && response.errors.email ? response.errors.email[0] : '';
        this.errors.phoneNumber = response.errors && response.errors.phone_number ? response.errors.phone_number[0] : '';

        this.showToastMessage(response);
      });
    },
  },
}
</script>

<style>

</style>
