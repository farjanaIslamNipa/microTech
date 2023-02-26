<template>
<div class="bg-white">
    <header>
        <div class="contact-us-banner"></div>
    </header>
    <div class="container">
        <div class="pb-sm-5 pb-0 pt-sm-5 pt-4 d-flex justify-content-center">
            <div class="col-lg-9 col-12 ">
                <div class="">
                    <h2 class="brand-color">Thank You </h2>
                    <p>Let us know any questions or comments you have about our services & experience! One of our team members will get back to you as soon as possible!</p>
                    <hr class="m-0 p-0 d-xl-block d-lg-block d-md-block d-none">
                    <form class="pt-3">
                        <div class="contact-form">
                            <div class="row">
                                <div class="col-12 mb-2">
                                    <div class="">
                                        <label class="me-1" for="rating">Rating * </label>
                                        <span v-for="(item) in 5" :key="item">
                                            <span :class="setRatingIndex < item? 'text-secondary': 'brand-color'" @click="setRatingIndex = item"><i class="fas fa-star me-1" style="cursor: pointer;"></i></span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="row" v-for="(single,index) in questionsData" :key="index">
                                <div class="col-12 col-md-12 col-sm-12 mb-1">
                                    <label for="firstName" v-html="single.question"></label>
                                    <div class="d-flex py-2">
                                        <div class="d-flex align-items-center">
                                            <input style="cursor: pointer;height:15px; width:15px; vertical-align: middle;" v-model="single.answer" class="forget-pass-radio-input mb-0" :id="`yes-${index}`" value="yes" type="radio" :name="`preferred_channel-${index}`" />
                                            <label style="cursor: pointer;font-size: 17px;" :for="`yes-${index}`" class="forget-pass-radio-label font-weight-bold ms-1 mb-0">Yes</label>
                                        </div>
                                        <div class="ms-4 d-flex align-items-center">
                                            <input style="cursor: pointer;height:15px; width:15px; vertical-align: middle;" v-model="single.answer" class="forget-pass-radio-input mb-0" :id="`no-${index}`" value="no" type="radio" :name="`preferred_channel-${index}`" />
                                            <label style="cursor: pointer;font-size: 17px;" :for="`no-${index}`" class="forget-pass-radio-label font-weight-bold ms-1 mb-0">No</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12 mt-1">
                                    <label>Comment *</label>
                                    <textarea v-model="postCustomerOpinionData.comment" class="form-control" id="message" rows="8" placeholder="Write your message"></textarea>
                                </div>
                            </div>

                            <div class="row mt-3">
                                <div class="col-12 col-md-6 col-sm-12 mb-1 ">
                                    <button :disabled="isCustomerOpinionButonDisabled" @click.prevent="createSingleCustomerOpinion" class="btn text-white text-uppercase brand-fill-btn" id="submitButton" type="button">Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <!-- <CustomerOpinionFrom :reference="reference" /> -->
                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script>
//components

import {
    mapActions,
    mapGetters
} from 'vuex';
import Loader from '~/mixins/Loader';
import ShowToastMessage from '~/mixins/ShowToastMessage';
import Authorization from '~/mixins/Authorization';

export default {
    name: "CustomerOpinion",
    layout: 'website-layout',
    mixins: [Loader, ShowToastMessage, Authorization],
    props: {
        // reference: {
        //     type: String,
        //     required: false,
        // }
    },
  head() {
    return {
      // title: 'Customer Opinion |',
      meta: [
        {hid: 'robots', name: 'robots', content: 'noindex, nofollow'}
      ],
    }
  },
    computed: {
        ...mapGetters({
            customerOpinion: 'customerOpinions/customerOpinion',
            appointment: 'appointments/appointment',
            order: 'orders/order',
        }),

        isCustomerOpinionButonDisabled() {
            const isQuestionAnswerd = this.questionsData.every((singleQuestion) => singleQuestion.answer !== '' ? true : false);
            return !(isQuestionAnswerd && this.setRatingIndex !== '' && this.postCustomerOpinionData.comment);
        }
    },
    data() {
        return {
            setRatingIndex: '',
            postCustomerOpinionData: {
                rating: '',
                comment: '',
                user_id: '',
                reference: '',
            },
            questionsData: [{
                    question: 'See what our beloved customers have to say about us below.',
                    answer: '',
                },
                {
                    question: 'See what our beloved sdkjdfh kdsfhdsjfkdsf customers have to say about us below.',
                    answer: '',
                }
            ],

        }
    },
    methods: {
        ...mapActions({
            postCustomerOpinion: 'customerOpinions/postCustomerOpinion',
            getAppointmentByReference: 'appointments/getAppointmentByReference',
            getOrderByOrderNo: 'orders/getOrderByOrderNo',

            //postCustomerOpinionResponse: 'customerOpinionResponses/postCustomerOpinionResponse',
            postStoreListCustomerOpinionResponse: 'customerOpinionResponses/postStoreListCustomerOpinionResponse',
        }),

        async createSingleCustomerOpinion() {

            this.postCustomerOpinionData.rating = this.setRatingIndex;
            this.postCustomerOpinionData.status = 0;
            this.postCustomerOpinionData.rating = this.setRatingIndex;
            this.loader(true);
            await this.postCustomerOpinion(this.postCustomerOpinionData).then(async (response) => {
                this.loader(false);
                if (response.status === 200 || response.status === 201) {
                    this.customerOpinionId = this.customerOpinion.id;
                }
                this.showToastMessage({type:'success',message:'Your opinion submitted. Thank you !'});
                this.retdirectToHome();
                if (this.customerOpinionId) {
                    let dataObj = {
                        customer_opinion_id: this.customerOpinionId,
                        opinion_responses: JSON.stringify(this.questionsData),
                    };

                    await this.postStoreListCustomerOpinionResponse(dataObj);
                    if (response.message) {
                        this.showToastMessage(response);
                    }
                }

            });
        },
        async getAppointmentDetails(appointmentReference) {
            this.loader(true);
            await this.getAppointmentByReference({
                reference: appointmentReference,
                params: {
                    with_relation: ['customer.user']
                }
            });
            this.loader(false);
            if (this ?.appointment ?.customer ?.user ?.id) {
                this.postCustomerOpinionData.user_id = this ?.appointment ?.customer ?.user ?.id;
                return;
            }
            this.retdirectToHome();
        },
        async getOrderDetails(orderNo) {
            this.loader(true);
            await this.getOrderByOrderNo({
                order_no: orderNo,
                params: {
                    with_relation: ['user']
                }
            });
            this.loader(false);
            if (this ?.order ?.user ?.id) {
                this.postCustomerOpinionData.user_id = this ?.order ?.user ?.id;
                return;
            }
            this.retdirectToHome();
        },

        retdirectToHome() {
            this.$router.push({
                name: 'home'
            });
        }
    },
    async mounted() {
        if (this.$route ?.params ?.reference && (this.$route ?.params ?.reference ?.startsWith('GA-') || (this.$route ?.params ?.reference ?.startsWith('ORD-')))) {
            this.postCustomerOpinionData.reference = this.$route.params.reference;
            if (this.$route ?.params ?.reference ?.startsWith('GA-')) {
                await this.getAppointmentDetails(this.postCustomerOpinionData.reference);
            }
            if (this.$route ?.params ?.reference ?.startsWith('ORD-')) {
                await this.getOrderDetails(this.postCustomerOpinionData.reference);
            }
            return;
        }
        this.retdirectToHome();

        console.log(this.$route.params);
    },
}
</script>

<style scoped>
.contact-us-banner {
    background-image: url('/images/contact-us/contact-us-banner.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right center;
    height: 350px;
}
</style>
