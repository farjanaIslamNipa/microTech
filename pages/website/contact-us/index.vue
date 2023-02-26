<template>
<div>
    <header class="contact-banner"></header>
    <main>
        <div class="container py-5">
            <div class="pt-lg-4 pt-0">
                <div class="row justify-content-center">
                    <div class="col-lg-9 col-12">
                        <h3 class="brand-color">Service Request</h3>
                        <!-- for logged in user -->
                        <p v-if="loggedUser" class="text-18">Let us know any questions or comments you have about our services & experience! One of our team members will get back to you as soon as possible!</p>
                        <!-- for global user -->
                        <p class="text-18">Please enter your details and one of our team members will get back to you as soon as possible!</p>
                        <div class="contact-form py-4 px-4">
                            <div class="row" v-if="step === 1">
                                <div class="col-12">
                                    <label for="">Email / Phone Number*</label>
                                    <input v-model="userSearchQuery" type="text" class="form-control" placeholder="Your phone number">
                                </div>
                                <div class="col-12">
                                    <button @click="searchUserHandler" class="btn px-5 text-uppercase brand-fill-btn">Next</button>
                                </div>
                            </div>
                            <div v-if="step === 2">
                                <div>
                                    <div v-if="!userInformation.id">
                                        <div class="row">
                                            <div class="col-md-6 col-12">
                                                <label for="">First Name</label>
                                                <input v-model="userInformation.firstName" type="text" class="form-control" placeholder="Your first name">
                                            </div>
                                            <div class="col-md-6 col-12">
                                                <label for="">Last Name</label>
                                                <input v-model="userInformation.lastName" type="text" class="form-control" placeholder="Your last name">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6 col-12">
                                                <label for="">Phone Number</label>
                                                <input :disabled="userInformation.phone === userSearchQuery" v-model="userInformation.phone" type="text" class="form-control" placeholder="Your phone number">
                                            </div>
                                            <div class="col-md-6 col-12">
                                                <label for="">Email address</label>
                                                <input :disabled="userInformation.email === userSearchQuery" v-model="userInformation.email" type="email" class="form-control" placeholder="Your email address">
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="!addressInformation.id">
                                        <label for="">Address</label>
                                        <google-auto-complete id="map" ref="address" class="form-control" placeholder="Please type your address" country="au" @placechanged="getAddressData">
                                        </google-auto-complete>
                                        <div v-if="(addressInformation.street || addressInformation.suburb || addressInformation.state || addressInformation.zipCode)">
                                            <p class="text-18 text-center mb-4 mt-4 text-blue"><span class="blink-text brand-color me-2"><i class="fa-solid fa-circle-info"></i></span> <span class="underline text-warning">Please modify the following address fields, if there anything wrong.</span></p>
                                            <div class="row">
                                                <div class="col-md-6 col-12">
                                                    <label class="booking-label" for="booking-street">Street</label>
                                                    <input v-model="addressInformation.street" type="text" name="street" class="form-control" placeholder="Enter street name">
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <label class="booking-label" for="booking-suburb">Suburb</label>
                                                    <input v-model="addressInformation.suburb" type="text" name="suburb" class="form-control" placeholder="Enter suburb">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6 col-12 multi-select-input mb-md-4 mb-3 pb-md-1 pb-0">
                                                    <label for="">State</label>
                                                    <multi-select v-model="selectedState" label="name" track-by="value" :options="stateList" :show-labels="false"></multi-select>
                                                </div>
                                                <div class="col-md-6 col-12">
                                                    <label class="booking-label" for="booking-zip">Zip Code</label>
                                                    <input v-model="addressInformation.zipCode" type="text" class="form-control" name="zipCode" placeholder="Enter zip code">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6 col-12  mb-md-4 mb-3 pb-md-1 pb-0">
                                        <label for="">Request For</label>
                                        <multi-select v-model="selectedRequestFor" label="name" track-by="value" :options="requestForList" :show-labels="false"></multi-select>
                                    </div>
                                    <div class="col-md-6 col-12 date-picker-input mb-md-4  pb-md-1 pb-0">
                                        <label for="">When do you need this done?</label>
                                        <no-ssr>
                                            <v-date-picker v-model="selectedDate" :update-on-input="true" :min-date='new Date()' mode="dateTime" :masks="{ inputDateTime: ['DD MMMM YYYY HH:mm A'] }" :model-config="{ type: 'string', mask: 'YYYY-MM-DD HH:mm:ss' }">
                                                <template v-slot="{ inputValue ,togglePopover  }">
                                                    <div class="d-flex align-items-center" @click="togglePopover()" style="cursor: pointer;">
                                                        <i class='bx bx-calendar mr-1'></i>
                                                        <input class="form-control" placeholder="Select Time" :value="inputValue" style="cursor: pointer;" />
                                                    </div>
                                                </template>
                                            </v-date-picker>
                                        </no-ssr>
                                    </div>

                                </div>
                                <div class="col">
                                    <label for="">Message</label>
                                    <textarea v-model="message" rows="5" class="form-control" placeholder="Write your message"></textarea>
                                </div>
                                <div class="mt-4 pt-2">
                                    <button @click="createSingleContact" class="btn px-5 text-uppercase brand-fill-btn" :disabled="isDisabled">send request</button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex';
import Loader from '~/mixins/Loader';
import ShowToastMessage from '~/mixins/ShowToastMessage';
import Authorization from '~/mixins/Authorization';
// import { VueRecaptcha } from 'vue-recaptcha';
// import {DatePicker} from "v-calendar";
export default {
    name: 'ContactUs',
    layout: 'website-layout',
    mixins: [Loader, ShowToastMessage, Authorization],
    // components:{
    //     VueRecaptcha
    // },
    head(){
      return {
        // title: 'Contact Us |',
        meta: [
          { hid: 'og:title',property: 'og:title',  name:'meta', content: `Contact Us | ${process.env.app_name}`},
          { hid: 'twitter:title', property:"twitter:title", name:'meta', content:`Contact Us | ${process.env.app_name}`},
          { hid: 'og:url', property: 'og:url',  name:'meta', content: 'https://geekify.au/contact-us/'},
          { hid: 'twitter:domain', property: 'twitter:domain',  name:'meta', content: 'https://geekify.au/contact-us/'}
        ],
        link: [
          { hid:'canonical', rel: 'canonical', href: 'https://geekify.au/contact-us/' }
        ],
      }
    },
    data() {
        return {
            userSearchQuery: '',
            getSettingsParams: {
                type: ['default', 'contact'],
                key: ['default_state', 'contact_request_for_list'],
            },
            userInformation: {
                id: null,
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
            },
            customerInformation: {
                id: null
            },
            addressInformation: {
                id: null,
                street: '',
                suburb: '',
                state: '',
                zipCode: '',
                country: 'country',

            },
            selectedState: {
                name: 'Select a State',
                value: '',
            },
            selectedRequestFor: {
                name: 'Select a Request',
                value: '',
            },
            step: 1,
            loggedUser: false,
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            street: '',
            suburb: '',
            state: '',
            zipCode: '',
            requestFor: '',
            selectedDate: '',
            message: '',
            options: ['Let us call you', 'Let us contact you via email', 'Let us call you']
        }
    },
    computed: {
        ...mapGetters({
            user: 'users/user',
            contact: 'contacts/contact',
            address: 'addresses/address',
            customer: 'customers/customer',
        }),
        stateList() {
            return this.$store.getters['settings/settingDefaultState'].value
        },
        requestForList() {
            let requestForList = [];
            let contactRequestForList = this.$store.getters['settings/settingContactRequestForList'].value

            for (let key in contactRequestForList) {
                requestForList.push({
                    name: contactRequestForList[key],
                    value: contactRequestForList[key],
                })
            }

            return requestForList;
        },
        // Condition to disable submit button
        isDisabled() {
            if (this.userInformation.id && this.addressInformation.id && this.customerInformation.id) {
                return !(this.selectedDate && this.selectedRequestFor ?.value && this.message);
            }
            return !(this.selectedDate && this.selectedRequestFor ?.value && this.message && this.addressInformation.state && this.addressInformation.street && this.addressInformation.suburb && this.addressInformation.zipCode && this.userInformation.firstName && this.userInformation.lastName)

        }
    },
    methods: {
        ...mapActions({
            userFind: 'users/userFind',
            getSettings: 'settings/getSettings',
            postUser: 'users/postUser',
            postAddress: 'addresses/postAddress',
            postCustomer: 'customers/postCustomer',
            postContact: 'contacts/postContact',
            postSendContactCreationNotify: 'contacts/postSendContactCreationNotify',


        }),
        stringLooksLikeEmail(str) {
            let emailAddressRegex = /^\S+@\S+\.\S+$/;
            return emailAddressRegex.test(str);
        },

        stringLooksLikePhoneNumber(str) {
            let phoneNumberRegex = /(02|04)[0-9]{8}/g;
            return phoneNumberRegex.test(str);
        },
        async searchUserHandler() {
            if (!this.stringLooksLikeEmail(this.userSearchQuery) && !this.stringLooksLikePhoneNumber(this.userSearchQuery)) {
                this.showToastMessage({
                    type: 'error',
                    message: 'Please enter a valid email or phone number'
                });
                return;
            }
            const findUserParams = {
                search_query: this.userSearchQuery,
                with_relation: ['customer.address', 'addresses'],
            };
            this.loader(true);
            await this.userFind(findUserParams);
            this.loader(false);
            this.step = 2;
            if (this.user ?.id) {

                // user exist
                this.userInformation.id = this.user.id;
                this.userInformation.email = this.user ?.email ?? '';
                this.userInformation.phone = this.user ?.phone_number ?? '';
                this.userInformation.firstName = this.user ?.first_name ?? '';
                this.userInformation.firstName = this.user ?.last_name ?? '';
                // customer exist
                if (this.user ?.customer ?.id) {
                    this.customerInformation.id = this.user.customer.id;
                }
                // address exist
                if (this.user ?.customer ?.address ?.id) {
                    this.addressInformation.id = this.user.customer.address.id;
                    this.addressInformation.state = this.user.customer.address.state;
                    this.addressInformation.street = this.user.customer.address.street;
                    this.addressInformation.suburb = this.user.customer.address.suburb;
                    this.addressInformation.country = this.user.customer.address.country;
                }

            }
            if (this.stringLooksLikeEmail(this.userSearchQuery)) {
                this.userInformation.email = this.userSearchQuery
            }
            if (this.stringLooksLikePhoneNumber(this.userSearchQuery)) {
                this.userInformation.phone = this.userSearchQuery
            }
            //

        },

        // Setting address data in state from google auto complete
        getAddressData(addressData) {
            this.addressInformation.street = addressData.route;
            this.addressInformation.suburb = addressData.locality;
            this.addressInformation.state = addressData.administrative_area_level_1;
            this.addressInformation.zipCode = addressData.postal_code;

            if (this.addressInformation.state) {
                let addressStateIndex = this.stateList.findIndex(item => item.value === this.addressInformation.state.toLowerCase());
                if (addressStateIndex !== -1) {
                    let addressState = this.stateList[addressStateIndex];

                    this.selectedState.value = addressState.value;
                    this.selectedState.name = addressState.name;
                }
            }
        },
        async getSettingList() {
            await this.getSettings(this.getSettingsParams);
        },
        async createSingleUser() {
            const postUserData = {
                role_id: 1, // default customer role
                first_name: this.userInformation.firstName,
                last_name: this.userInformation.lastName,
                email: this.userInformation.email,
                phone_number: this.userInformation.phone,
            };
            const response = await this.postUser(postUserData);

            if (response.status === 200 || response.status === 201) {
                this.userInformation.id = this.user.id;
                // let userId = this.user.id;
                // this.userId = userId;
                // this.postAddressData.user_id = userId;
                // this.postCustomerData.user_id = userId;
                // this.postContactData.user_id = userId;
            }
            if (response.message) {
                this.showToastMessage(response);
            }

        },
        async createSingleAddress() {
            const postAddressData = {
                user_id: this.userInformation.id,
                street: this.addressInformation.street,
                suburb: this.addressInformation.suburb,
                state: this.selectedState ?.value ?? '',
                post_code: this.addressInformation.zipCode,
                country: this.addressInformation.country,
            };
           const response = await this.postAddress(postAddressData);

            if (response.status === 200 || response.status === 201) {
              this.addressInformation.id = this.address.id;
            }

            // this.errors.address.userId = response.errors && response.errors.user_id ? response.errors.user_id[0] : '';
            // this.errors.address.street = response.errors && response.errors.street ? response.errors.street[0] : '';
            // this.errors.address.suburb = response.errors && response.errors.suburb ? response.errors.suburb[0] : '';
            // this.errors.address.state = response.errors && response.errors.state ? response.errors.state[0] : '';
            // this.errors.address.postCode = response.errors && response.errors.post_code ? response.errors.post_code[0] : '';
            // this.errors.address.country = response.errors && response.errors.country ? response.errors.country[0] : '';

            if (response.message) {
                this.showToastMessage(response);
            }

        },
        async createSingleCustomer() {
            const postCustomerData = {
                user_id: this.userInformation.id,
                address_id: this.addressInformation.id,
                type: 0, // Guest
                status: 1, // Active
                newsletter_subscription: 1, // Unsubscribed
            }
            const response = await this.postCustomer(postCustomerData);
            if (response.status === 200 || response.status === 201) {
                this.customerInformation.id = this.customer.id;
            }
            if (response.message) {
                this.showToastMessage(response);
            }

        },
        async createSingleContact() {
            const g_recaptcha_response = await this.$recaptcha.execute('contactUs');

            this.loader(true);
            if (!this.userInformation.id) await this.createSingleUser();
            if (!this.userInformation.id) return;

            if (!this.addressInformation.id) await this.createSingleAddress();
            if (!this.addressInformation.id) return;

            if (!this.customerInformation.id) await this.createSingleCustomer();
            if (!this.customerInformation.id) {
                const toastObj = {
                    type: 'error',
                    message: 'Something went wrong. Please try again later.',
                };
                this.showToastMessage(toastObj);
                return;
            }
            const postContactData = {
                user_id: this.userInformation.id,
                address_id: this.addressInformation.id,
                type: 1, // 0: Geeks CRS, 1: Geekify
                message: this.message,
                request_for: this.selectedRequestFor.value,
                date_time: this.selectedDate,
                g_recaptcha_response: g_recaptcha_response
            };

            const response = await this.postContact(postContactData);
            this.loader(false);
            if (response.status === 201) {
                const toastObj = {
                    message: 'Contact Request Submitted Successfully',
                    type: 'success'
                };

                this.showToastMessage(toastObj);
                this.userSearchStatus = false;

                if (this.contact.id) {
                    let dataObj = {
                        id: this.contact.id,
                        data: {
                            notify_requester: 1,
                            notify_internal_user: 1,
                        },
                    };

                    await this.postSendContactCreationNotify(dataObj);
                }
                this.$router.push({ name: 'home'});
            }
            if (response.message) {
                this.showToastMessage(response);
            }

            // this.errors.contact.userId = response.errors && response.errors.user_id ? response.errors.user_id[0] : '';
            // this.errors.contact.addressId = response.errors && response.errors.address_id ? response.errors.address_id[0] : '';
            // this.errors.contact.type = response.errors && response.errors.type ? response.errors.type[0] : '';
            // this.errors.contact.message = response.errors && response.errors.message ? response.errors.message[0] : '';
            // this.errors.contact.requestFor = response.errors && response.errors.request_for ? response.errors.request_for[0] : '';
            // this.errors.contact.dateTime = response.errors && response.errors.date_time ? response.errors.date_time[0] : '';
            // this.errors.contact.robotDetected = response.errors && response.errors.robot_detected ? response.errors.robot_detected[0] : '';



            // });
        },
    },
    async mounted() {
        await this.getSettingList();
        try {
            await this.$recaptcha.init()
        } catch (e) {
            console.error(e);
        }
    },
    beforeDestroy() {
    this.$recaptcha.destroy();
    },

}
</script>

<style scoped>
button:disabled {
    background-color: #9E9E9E;
    border-color: #9E9E9E;
    color: white;
}

.contact-banner {
    background-image: url('/images/contact-us/contact-us-banner.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 500px;
}

.contact-form {
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px 0;
}

.contact-form input {
    border: 1px solid #c7d8e2;
    border-radius: 2px;
    padding: 10px 10px;
    margin-bottom: 30px;
}

.contact-form textarea,
select {
    border: 1px solid #c7d8e2;
}

.contact-form input:focus {
    border: 1px solid var(--brandColor);
    box-shadow: none;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder,
.contact-form select::placeholder {
    color: #8b8b8b;
    font-weight: 300;
    font-size: 15px;
}

@media(max-width:1199px) {
    .contact-banner {
        height: 400px;
    }
}

@media(max-width:768px) {
    .contact-banner {
        height: 300px;
    }
}

@media(max-width:767px) {
    .contact-form input {
        margin-bottom: 20px;
    }
}


</style>
