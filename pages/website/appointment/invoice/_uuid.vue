<template>


        <div class="container ">
          <div id="printSection"></div>

            <div class="row " id="printArea">
                <!-- invoice view page -->
                <div class="col-12 ">
                    <div class="">
                        <div class="bg-white">
                          <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/invoice/header.webp" class="img-fluid" alt="Invoice Header Image" />
                        </div>
                        <div class="pb-0 container bg-white">

                            <div class="row ">
                                <div class="col-sm-8 col-12  text-start order-2 order-sm-1 pt-4">
                                    <h4 class="font-weight-bold" style="color:#F38020;">Invoice: </h4>
                                    <table class="table table-borderless mb-0">

                                        <tbody>
                                            <tr v-if="appointmentDetails.reference" class="mb-1">
                                                <td class="py-0 pl-0 font-weight-light" style="width: 20%; color: #58595B">Ref :</td>
                                                <td class="py-0 pl-0" style="width: 80%"><span class="font-weight-light" style="color: #58595B">#{{appointmentDetails.reference}}</span></td>
                                            </tr>

                                            <tr v-if="appointmentDetails.date" class="mb-1">
                                                <td class="py-0 pl-0 font-weight-light" style="width: 20%;color: #58595B">Date :</td>
                                                <td class="py-0 pl-0" style="width: 80%"> <span class="font-weight-light" style="color: #58595B">{{appointmentDetails.date}}</span></td>
                                            </tr>

                                            <tr v-if="appointmentDetails.technician.firstName && appointmentDetails.technician.lastName" class="mb-1">
                                                <td class="py-0 pl-0" style="width: 20%">Served by :</td>
                                                <td class="py-0 pl-0" style="width: 80%"><span class="font-weight-light" style="color: #58595B">{{`${appointmentDetails.technician.firstName} ${appointmentDetails.technician.lastName}`}}</span></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div class="row py-4">
                                <div class="col-12">
                                    <hr>
                                </div>
                            </div>

                            <!-- invoice address and contact -->
                            <div class="row invoice-info">
                                <div class="col-sm-4 col-12 ">
                                    <h6 class="font-weight-bold">Customer Details</h6>
                                    <div class="mb-1">
                                        <span style="color:#404041;font-weight:500;">Name : </span>
                                        <span style="color:#404041;font-weight:400;">{{`${appointmentDetails.customer.user.first_name} ${appointmentDetails.customer.user.last_name}`}}</span>
                                    </div>
                                    <div class="mb-1">
                                        <span style="color:#404041;font-weight:500;">Address : </span>
                                        <span style="color:#404041;font-weight:400;">{{`${appointmentDetails.customer.address.street}, ${appointmentDetails.customer.address.suburb}, ${appointmentDetails.customer.address.state}, ${appointmentDetails.customer.address.post_code}, ${appointmentDetails.customer.address.country}`}}</span>
                                    </div>
                                    <div class="mb-1">
                                        <span style="color:#404041;font-weight:500;">Email : </span>
                                        <span style="color:#404041;font-weight:400;">{{appointmentDetails.customer.user.email}}</span>
                                    </div>

                                </div>
                                <div class="col-sm-4 col-12 mt-1" v-if="appointmentDetails.billingAddress.id">
                                    <h6 class="font-weight-bold">Billing Address</h6>
                                    <div class="mb-1">
                                        <span>{{`${this.appointmentDetails.billingAddress.street}, ${this.appointmentDetails.billingAddress.suburb}, ${this.appointmentDetails.billingAddress.state}, ${this.appointmentDetails.billingAddress.post_code}, ${this.appointmentDetails.billingAddress.country}`}}</span>
                                    </div>
                                </div>

                                <div class="col-sm-4 col-12 mt-1">
                                    <h6 class="font-weight-bold">Service Address</h6>

                                    <div class="mb-1" v-if="appointmentDetails.address.id">
                                        <span>{{`${this.appointmentDetails.address.street}, ${this.appointmentDetails.address.suburb}, ${this.appointmentDetails.address.state}, ${this.appointmentDetails.address.post_code}, ${this.appointmentDetails.address.country}`}}</span>
                                    </div>

                                </div>
                            </div>
                            <div class="row py-4">
                                <div class="col-12">
                                    <hr>
                                </div>
                            </div>

                        </div>
                        <!-- product details table-->
                        <div class="container bg-white">
                            <div class="row">
                                <div class="col-12">
                                    <div class="invoice-product-details table-responsive">
                                        <table class="table table-borderless mb-0">
                                            <thead>
                                                <tr class="border-0">
                                                    <th class="text-white" style="width: 20%;border-right:1px solid white;background:#F38020">SERVICE </th>

                                                    <th class="text-center text-white" style="width: 20%;border-right:1px solid white;background:#F38020;">HOURS</th>
                                                    <th class="text-center text-white" style="width: 20%;border-right:1px solid white;background:#F38020;">QTY</th>
                                                    <th class="text-center text-white" style="width: 20%;border-right:1px solid white;background:#F38020;">UNIT PRICE</th>
                                                    <th class="text-end text-white" style="width: 20%;border-right:1px solid white;background:#F38020;">PRICE</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="" style="color:#000;font-weight:500;">{{appointmentDetails.service.name}} </td>
                                                    <td class="text-center " style="color:#000;font-weight:500;">{{appointmentDetails.length}}</td>
                                                    <td class="text-center " style="color:#000;font-weight:500;">{{appointmentDetails.quantity}}</td>
                                                    <td class="text-center" style="color:#000;font-weight:500;">${{parseFloat(appointmentDetails.unitPrice * 0.01).toFixed(2)}}</td>
                                                    <td class="text-end" style="color:#000;font-weight:500;">${{parseFloat(appointmentDetails.servicePrice * 0.01).toFixed(2)}}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!-- invoice subtotal -->
                                    <div class="pt-0">
                                        <hr>
                                        <table class="table table-borderless ">
                                            <tbody>
                                                <tr class="mb-1">
                                                    <td class="py-0 pl-0 pr-0 text-end" style="width: 90%;color: #58595B;">Service Price(+) :</td>
                                                    <td class="py-0 pl-4 pr-0 " style="width: 100%"> <span class="font-weight-light" style="color: #58595B">${{appointmentDetails.appointmentTotalServicePrice}}</span></td>
                                                </tr>
                                                <tr class="mb-1">
                                                    <td class="py-0 pl-0 pr-0 text-end" style="width: 90%;color: #58595B;">Surcharge(+) :</td>
                                                    <td class="py-0 pl-4 pr-0 " style="width: 100%"> <span class="font-weight-light" style="color: #58595B">${{appointmentDetails.appointmentTotalSurCharge}}</span></td>
                                                </tr>
                                                <tr class="mb-1">
                                                    <td class="py-0 pl-0 pr-0 text-end" style="width: 90%;color: #58595B;">GST(+) :</td>
                                                    <td class="py-0 pl-4 pr-0 " style="width: 100%"> <span class="font-weight-light" style="color: #58595B">${{appointmentDetails.appointmentTotalGst}}</span></td>
                                                </tr>

                                                <tr class="mb-1">
                                                    <td class="py-0 pl-0 pr-0 text-end" style="width: 90%;color: #58595B;">Discount(-) :</td>
                                                    <td class="py-0 pl-4 pr-0" style="width: 100%"> <span class="font-weight-light" style="color: #58595B">${{appointmentDetails.appointmentTotalDiscount}}</span></td>
                                                </tr>
                                                <tr class="mb-1">
                                                    <td class="py-0 pl-0 pr-0 text-end font-weight-bold" style="width: 90%;color: #58595B;">Grand Total :</td>
                                                    <td class="py-0 pl-4 pr-0 " style="width: 100%"> <span class="font-weight-bold" style="color: #58595B">${{appointmentDetails.appointmentTotalCharge}}</span></td>
                                                </tr>
                                                <!-- <tr class="mb-1">
                                                    <td class="py-0 pl-0 pr-0 text-end" style="width: 90%;color: #58595B;">Total :</td>
                                                    <td class="py-0 pl-4 pr-0 " style="width: 100%"><span class="font-weight-light" style="color: #58595B">${{appointmentDetails.appointmentTotalCharge}}</span></td>
                                                </tr> -->
                                                <tr class="mb-1">
                                                    <td class="py-0 pl-0 pr-0 text-end" style="width: 90%;color: #58595B;">Paid :</td>
                                                    <td class="py-0 pl-4 pr-0" style="width: 100%"><span class="font-weight-light" style="color: #58595B">${{appointmentDetails.appointmentTotalPaid}}</span></td>
                                                </tr>
                                                <tr class="mb-1">
                                                    <td class="py-0 pl-0 pr-0 text-end" style="width: 90%;color: #58595B;">Due :</td>
                                                    <td class="py-0 pl-4 pr-0" style="width: 100%"><span class="font-weight-light" style="color: #58595B">${{ parseFloat(appointmentDetails.appointmentTotalCharge - appointmentDetails.appointmentTotalPaid).toFixed(2) }}</span></td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>
                            <div class="row d-flex justify-content-end">
                                <div class="col-12 col-md-3 col-lg-2 noPrint">
                                            <div class="my-4 py-4 d-grid">
                                                <button @click="print" class="btn brand-fill-btn btn-block invoice-print">
                                                    <span>Print</span>
                                                </button>
                                            </div>

                                </div>

                            </div>

                        </div>
                        <div class="row pt-4" v-if="appointmentDetails.appointmentNotes.length > 0">
                            <div class="col-12">
                                <h5 class="font-weight-bold">Notes</h5>
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col-12" v-for="(appointmentNote,index) in appointmentDetails.appointmentNotes" :key="index">
                                <p> <span class="font-weight-bold">{{(index+1)}}</span> {{appointmentNote.description}}</p>
                            </div>
                        </div>

                        <div class="bg-white pt-4">
                          <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/invoice/footer.webp" class="img-fluid" alt="Invoice Footer Image" />
                        </div>
                    </div>
                </div>

                <!-- invoice action  -->

            </div>

        </div>



</template>

<script>
import PrintElement from "~/mixins/PrintElement";

import Loader from '~/mixins/Loader';
import ShowToastMessage from '~/mixins/ShowToastMessage';
import {
    mapActions,
    mapGetters
} from "vuex";

export default {
      layout: 'invoice-layout',
    name: "AppointmentInvoice",
    mixins: [ShowToastMessage, Loader, PrintElement],
  head() {
    return {
      // title: 'Appointment Invoice |',
      meta: [
        {hid: 'robots', name: 'robots', content: 'noindex, nofollow'}
      ],
    }
  },
    data() {
        return {
            getSettingsParams: {
                type: ["appointment"],
                key: [

                    "appointment_service_duration"
                ],
            },
            getAppointmentParams: {
                with_relation: [

                    "customer",
                    // "business",
                    "order",
                    "service",
                    "appointmentCharges",
                    "appointmentNotes",
                    "appointmentCreator",
                    "customer.address",
                    "customer.user",
                    "address",
                    // "appointmentConsent",
                    "appointmentPayments.payment",
                    "technicianAppointment.technician.user",
                    "billingAddress"
                ],
            },
            appointmentDetails: {
                id: '',
                reference: "",
                type: "",
                status: "",
                platform: "",
                parking: "",
                quantity: '',
                preference: "",
                date: "",
                time: "",
                length: "",
                service: {
                    id: '',
                    name: "",
                    code: "",
                    description: "",
                    home_price: '',
                    business_price: '',
                    commission: "",
                    status: "",
                },
                business: null,
                order: null,
                customer: {
                    id: 201,
                    type: "",
                    status: "",
                    referral_code: "",
                    newsletter_subscription: "",
                    user: {
                        id: '',
                        first_name: "",
                        last_name: "",
                        email: null,
                        phone_number: "",
                    },
                    address: {
                        id: '',
                        street: "",
                        suburb: "",
                        state: "",
                        post_code: "",
                        country: ""
                    }
                },
                address: {
                    id: '',
                    street: "",
                    suburb: "",
                    state: "",
                    post_code: "",
                    country: ""
                },
                technician: {
                    firstName: '',
                    lastName: ''
                },
                appointmentCharges: [],
                appointmentPayments: [],
                appointmentTotalCharge: 0,

                appointmentTotalSurCharge: 0,
                appointmentTotalServicePrice: 0,
                appointmentTotalDiscount: 0,
                appointmentTotalGst: 0,

                appointmentPaymentStatus: null,
                appointmentTotalPaid: null,
                billingAddress: {
                    id: '',
                    street: "",
                    suburb: "",
                    state: "",
                    post_code: "",
                    country: ""
                },
                appointmentNotes: [],
                appointmentCreator: {
                    id: '',
                    panel: ""
                },
                appointmentConsent: null,
                unitPrice: '',
                servicePrice: '',

            }
        }
    },
    watch: {
        appointment(currentAppointment) {

            this.appointmentDetails.id = currentAppointment.id ? currentAppointment.id : '';
            this.appointmentDetails.quantity = currentAppointment.quantity ? currentAppointment.quantity : '';
            this.appointmentDetails.unitPrice = currentAppointment.unit_price ? currentAppointment.unit_price : '';
            this.appointmentDetails.service.name = currentAppointment.service && currentAppointment.service.name ? currentAppointment.service.name : '';
            this.appointmentDetails.service.home_price = currentAppointment.service && currentAppointment.service.home_price ? currentAppointment.service.home_price : '';
            this.appointmentDetails.service.business_price = currentAppointment.service && currentAppointment.service.business_price ? currentAppointment.service.business_price : '';
            this.appointmentDetails.type = currentAppointment.type ? currentAppointment.type : '';
            this.appointmentDetails.reference = currentAppointment.reference ? currentAppointment.reference : '';
            this.appointmentDetails.date = currentAppointment.date ? currentAppointment.date : '';
            this.appointmentDetails.parking = currentAppointment.parking ? currentAppointment.parking : '';
            this.appointmentDetails.appointmentNotes = currentAppointment.appointmentNotes ? currentAppointment.appointmentNotes.filter((singleNote) => singleNote.customer_can_view === 'Yes') : [];
            this.appointmentDetails.status = currentAppointment.status ? currentAppointment.status : '';

            this.appointmentDetails.customer.user.first_name = currentAppointment.customer && currentAppointment.customer.user && currentAppointment.customer.user.first_name ? currentAppointment.customer.user.first_name : '';
            this.appointmentDetails.customer.user.last_name = currentAppointment.customer && currentAppointment.customer.user && currentAppointment.customer.user.last_name ? currentAppointment.customer.user.last_name : '';
            this.appointmentDetails.customer.user.email = currentAppointment.customer && currentAppointment.customer.user && currentAppointment.customer.user.email ? currentAppointment.customer.user.email : '';
            this.appointmentDetails.customer.user.phone_number = currentAppointment.customer && currentAppointment.customer.user && currentAppointment.customer.user.phone_number ? currentAppointment.customer.user.phone_number : '';

            //customer actual address
            this.appointmentDetails.customer.address.id = (currentAppointment.customer && currentAppointment.customer.address && currentAppointment.customer.address && currentAppointment.customer.address.id) ? currentAppointment.customer.address.id : '';
            this.appointmentDetails.customer.address.street = (currentAppointment.customer && currentAppointment.customer.address && currentAppointment.customer.address.street) ? currentAppointment.customer.address.street : '';
            this.appointmentDetails.customer.address.suburb = currentAppointment.customer && currentAppointment.customer.address && currentAppointment.customer.address.suburb ? currentAppointment.customer.address.suburb : '';
            this.appointmentDetails.customer.address.state = currentAppointment.customer && currentAppointment.customer.address && currentAppointment.customer.address.state ? currentAppointment.customer.address.state : '';
            this.appointmentDetails.customer.address.post_code = currentAppointment.customer && currentAppointment.customer.address && currentAppointment.customer.address.state ? currentAppointment.customer.address.state : '';
            this.appointmentDetails.customer.address.country = currentAppointment.customer && currentAppointment.customer.address && currentAppointment.customer.address.country ? currentAppointment.customer.address.country : '';

            this.appointmentDetails.technician.firstName = currentAppointment.technicianAppointment && currentAppointment.technicianAppointment.technician && currentAppointment.technicianAppointment.technician.user && currentAppointment.technicianAppointment.technician.user.first_name ? currentAppointment.technicianAppointment.technician.user.first_name : '';
            this.appointmentDetails.technician.lastName = currentAppointment.technicianAppointment && currentAppointment.technicianAppointment.technician && currentAppointment.technicianAppointment.technician.user && currentAppointment.technicianAppointment.technician.user.last_name ? currentAppointment.technicianAppointment.technician.user.last_name : '';

            // billing address
            this.appointmentDetails.billingAddress.id = currentAppointment.billingAddress && currentAppointment.billingAddress.id ? currentAppointment.billingAddress.id : '';
            this.appointmentDetails.billingAddress.street = currentAppointment.billingAddress && currentAppointment.billingAddress.street ? currentAppointment.billingAddress.street : '';
            this.appointmentDetails.billingAddress.suburb = currentAppointment.billingAddress && currentAppointment.billingAddress.suburb ? currentAppointment.billingAddress.suburb : '';
            this.appointmentDetails.billingAddress.state = currentAppointment.billingAddress && currentAppointment.billingAddress.state ? currentAppointment.billingAddress.state : '';
            this.appointmentDetails.billingAddress.post_code = currentAppointment.billingAddress && currentAppointment.billingAddress.post_code ? currentAppointment.billingAddress.post_code : '';
            this.appointmentDetails.billingAddress.country = currentAppointment.billingAddress && currentAppointment.billingAddress.country ? currentAppointment.billingAddress.country : '';

            // service address
            this.appointmentDetails.address.id = currentAppointment.address && currentAppointment.address.id ? currentAppointment.address.id : '';
            this.appointmentDetails.address.street = currentAppointment.address && currentAppointment.address.street ? currentAppointment.address.street : '';
            this.appointmentDetails.address.suburb = currentAppointment.address && currentAppointment.address.suburb ? currentAppointment.address.suburb : '';
            this.appointmentDetails.address.state = currentAppointment.address && currentAppointment.address.state ? currentAppointment.address.state : '';
            this.appointmentDetails.address.post_code = currentAppointment.address && currentAppointment.address.post_code ? currentAppointment.address.post_code : '';
            this.appointmentDetails.address.country = currentAppointment.address && currentAppointment.address.country ? currentAppointment.address.country : '';

            this.appointmentDetails.appointmentCharges = (currentAppointment.appointmentCharges) ? currentAppointment.appointmentCharges : [];
            this.appointmentDetails.appointmentPayments = (currentAppointment.appointmentPayments) ? currentAppointment.appointmentPayments : [];

            let charge = 0;

            let appointmentTotalServicePrice = 0;
            let appointmentTotalSurCharge = 0;
            let appointmentTotalGst = 0;
            let appointmentTotalDiscount = 0;

            this.appointmentDetails.appointmentCharges.map((item) => {

                if (item.type == "GST") {
                    charge = charge + item.amount;
                    appointmentTotalGst = appointmentTotalGst + item.amount;

                } else if (item.type == "Service Price") {

                    charge = charge + item.amount;
                    appointmentTotalServicePrice = appointmentTotalServicePrice + item.amount;
                    this.appointmentDetails.servicePrice = item.amount;

                } else if (item.type == "Surcharge") {
                    charge = charge + item.amount;
                    appointmentTotalSurCharge = appointmentTotalSurCharge + item.amount;

                } else if (item.type == "Discount") {
                    charge = charge - item.amount;
                    appointmentTotalDiscount = appointmentTotalDiscount + item.amount;
                }

            });

            charge = parseFloat(charge / 100).toFixed(2);

            appointmentTotalServicePrice = parseFloat(appointmentTotalServicePrice / 100).toFixed(2);
            appointmentTotalSurCharge = parseFloat(appointmentTotalSurCharge / 100).toFixed(2);
            appointmentTotalGst = parseFloat(appointmentTotalGst / 100).toFixed(2);
            appointmentTotalDiscount = parseFloat(appointmentTotalDiscount / 100).toFixed(2);

            this.appointmentDetails.appointmentTotalCharge = charge;

            this.appointmentDetails.appointmentTotalSurCharge = appointmentTotalSurCharge;
            this.appointmentDetails.appointmentTotalGst = appointmentTotalGst;
            this.appointmentDetails.appointmentTotalDiscount = appointmentTotalDiscount;
            this.appointmentDetails.appointmentTotalServicePrice = appointmentTotalServicePrice;

            let paidAmount = 0;

            this.appointmentDetails.appointmentPayments.map((item) => {

                paidAmount = paidAmount + item.payment.total_transaction;

            });

            paidAmount = parseFloat(paidAmount / 100).toFixed(2);
            this.appointmentDetails.appointmentTotalPaid = paidAmount;
            if (charge >= paidAmount) {
                this.appointmentPaymentStatus = "Paid";
            } else if (paidAmount == 0) {
                this.appointmentPaymentStatus = "Unpaid";
            } else {
                this.appointmentPaymentStatus = "Partially paid";
            }

            this.appointmentDetails.length = currentAppointment.length ? (currentAppointment.length === "00:00:00" ? (`${this.settingAppointmentServiceDuration.value.split(':')?.[0] ?? 0} hr ${this.settingAppointmentServiceDuration.value.split(':')?.[1] ?? 0} min`) : `${currentAppointment.length.split(':')?.[0] ?? 0} hr  ${currentAppointment.length.split(':')?.[1] ?? 0} min`) : "";

        },

    },
    computed: {
        ...mapGetters({

            appointment: "appointments/appointment",
            settingAppointmentServiceDuration: 'settings/settingAppointmentServiceDuration',

        }),
    },
    methods: {
        ...mapActions({

            postAppointmentInvoice: "appointments/postAppointmentInvoice",
            getSettings: "settings/getSettings",

        }),
        async getSingleAppointment(id) {
            this.loader(true);
            let paramObj = {
                uuid: id,
                params: this.getAppointmentParams,
            };
            await this.postAppointmentInvoice(paramObj);
             this.loader(false);
        },
        print() {
            let idElement = document.getElementById('printArea');
            this.printElement(idElement);
        },
        async getSettingList() {
            this.loader(true);
            await this.getSettings(this.getSettingsParams);
            this.loader(false);
        },
    },
    async mounted() {
        await this.getSettingList();
        const routeParams = await this.$route.params;

        await this.getSingleAppointment(routeParams.uuid);

        // this.print();
    },

}
</script>

<style scoped>

</style>
