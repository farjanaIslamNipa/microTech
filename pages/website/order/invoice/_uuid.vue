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
                    <h4 class="font-weight-bold" style="color:#F38020;">Invoice: {{orderDetails.order_no}}</h4>
                    <table class="table table-borderless mb-0">

                      <tbody>
                      <!-- <tr v-if="orderDetails.order_no" class="mb-1">
                        <td class="py-0 pl-0 font-weight-light" style="width: 20%; color: #58595B">Ref :</td>
                        <td class="py-0 pl-0" style="width: 80%"><span class="font-weight-light" style="color: #58595B">#{{
                            orderDetails.order_no
                          }}</span>
                        </td>
                      </tr> -->
                      <!-- <tr v-if="orderDetails.appointment">
                        <td>
                          <span>
                          <span><i class="bx bx-link" style="font-size: 1.5rem;"></i> </span>
                          <span v-if="orderDetails.appointment.type == 'Home'">
                            <i class="bx bx-home" style="font-size: 1.5rem;"></i>
                          </span>
                            <span v-else><i class="bx bxs-business" style="font-size: 1.5rem;"></i>   </span>
                            <span class="text-secondary">({{ orderDetails.appointment.reference }})</span>
                          </span>
                        </td>
                      </tr> -->

                      <tr v-if="orderDetails.delivery_date" class="mb-1">
                        <td class="py-0 pl-0 font-weight-light" style="width: 20%;color: #58595B">Date : {{
                            orderDetails.delivery_date
                          }}</td>
                        <!-- <td class="py-0 pl-0" style="width: 80%"><span class="font-weight-light" style="color: #58595B">{{
                            orderDetails.delivery_date
                          }}</span>
                        </td> -->
                      </tr>

                      <!--                      <tr v-if="orderDetails.user.firstName && orderDetails.user.lastName"
                                                class="mb-1">
                                              <td class="py-0 pl-0" style="width: 20%">Served by :</td>
                                              <td class="py-0 pl-0" style="width: 80%"><span class="font-weight-light" style="color: #58595B">{{
                                                  `${orderDetails.user.firstName} ${orderDetails.user.lastName}`
                                                }}</span>
                                              </td>
                                            </tr>-->

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
                  <div class="col-sm-4 col-12">
                    <h6 class="font-weight-bold">Customer Details</h6>
                    <div v-if="orderDetails?.user">
                      <div class="mb-1">
                        <span style="color:#404041;font-weight:500;">Name : </span>
                        <span
                            style="color:#404041;font-weight:400;">{{
                            `${orderDetails?.user?.first_name ?? ''} ${orderDetails?.user?.last_name ?? ''}`
                          }}</span>
                      </div>
                      <div class="mb-1">
                        <span style="color:#404041;font-weight:500;">Address : </span>
                        <span
                            style="color:#404041;font-weight:400;">{{
                            fullAddress(orderDetails?.user?.customer)
                          }}</span>
                      </div>
                      <div class="mb-1">
                        <span style="color:#404041;font-weight:500;">Email : </span>
                        <span style="color:#404041;font-weight:400;">{{ orderDetails?.user?.email }}</span>
                      </div>
                    </div>


                  </div>
                  <div class="col-sm-4 col-12 mt-1">
                    <h6 class="font-weight-bold">Billing Address</h6>
                    <div class="mb-1" v-if="orderDetails?.billingAddress?.id">
                      <span>{{
                          `${orderDetails.billingAddress.street},
                        ${orderDetails.billingAddress.suburb},
                        ${orderDetails.billingAddress.state},
                        ${orderDetails.billingAddress.post_code},
                        ${orderDetails.billingAddress.country}`
                        }}
                      </span>
                    </div>
                  </div>

                  <div class="col-sm-4 col-12 mt-1">
                    <h6 class="font-weight-bold">Shipping Address</h6>
                    <div class="mb-1" v-if="orderDetails?.shippingAddress?.id">
                      <span>{{
                          `${orderDetails.shippingAddress.street},
                        ${orderDetails.shippingAddress.suburb},
                        ${orderDetails.shippingAddress.state},
                        ${orderDetails.shippingAddress.post_code},
                        ${orderDetails.shippingAddress.country}`
                        }}
                      </span>
                    </div>

                  </div>
                </div>

                <div class="row pt-4">
                  <div class="col-12">
                    <hr>
                  </div>
                </div>

              </div>

              <!-- <div class="container bg-white py-4">
                <div class="row">
                  <div class="col-12">
                    <h3 class="text-center font-weight-bold" style="color:#F38020" v-if="orderDetails?.delivery_date">
                      Delivery: {{
                        new Date(`${orderDetails.delivery_date}`).toLocaleDateString("en-AU", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })
                      }}</h3>
                  </div>
                </div>
              </div> -->

              <!-- product details table-->
              <div class="container bg-white">
                <div class="row">
                  <div class="col-12">
                    <div class="invoice-product-details table-responsive">
                      <table class="table table-borderless mb-0">
                        <thead>
                        <tr class="border-0">
                          <th class="text-white" style="width: 25%;border-right:1px solid white;background:#F38020">
                            PRODUCT
                          </th>
                          <th class="text-center text-white"
                              style="width: 25%;border-right:1px solid white;background:#F38020;">QTY
                          </th>
                          <th class="text-center text-white"
                              style="width: 25%;border-right:1px solid white;background:#F38020;">UNIT PRICE
                          </th>
                          <th class="text-end text-white"
                              style="width: 25%;border-right:1px solid white;background:#F38020;">PRICE
                          </th>
                        </tr>
                        </thead>

                        <tbody v-if="orderDetails.details!==undefined">
                        <tr v-for="(cartDetails) in JSON.parse(orderDetails.details)?.cart_data ?? []" :key="cartDetails.productId">

                          <td class="text-capitalize" style="color:#000;font-weight:500;">
                            {{ cartDetails.name }} ({{ cartDetails?.product_price?.condition_name }})
                            <div
                                v-if="cartDetails.product_items !== undefined && cartDetails.product_items.length !== 0">
                              <ul>
                                <div v-for="(singleItem) in cartDetails.product_items" :key="singleItem.id">
                                  <li
                                      v-if="singleItem.item_obj.condition === cartDetails.product_price.condition_name">
                                    {{ singleItem.item_obj.serial_number }}
                                  </li>

                                </div>
                              </ul>
                            </div>
                          </td>
                          <td class="text-center" style="color:#000;font-weight:500;">
                            {{ cartDetails.product_price.quantity }}
                          </td>
                          <td class="text-center" style="color:#000;font-weight:500;">
                            ${{ parseFloat(cartDetails?.product_price?.amount / 100).toFixed(2) }}
                          </td>
                          <td class="text-end" style="color:#000;font-weight:500;">
                            ${{ parseFloat(cartDetails?.product_price?.sub_total / 100).toFixed(2) }}
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                    <!-- invoice subtotal -->
                    <div class="pt-0 ">
                      <hr>
                      <table class="table table-borderless ">
                        <tbody>
                        <!-- subtotal -->
                        <tr class="mb-1">
                          <td class="py-0 pl-0 pr-0 text-end" style="width: 90%;color: #58595B;">SubTotal :</td>
                          <td class="py-0 pl-4 pr-0 " style="width: 100%">
                            <span class="font-weight-light" style="color: #58595B">
                              ${{ parseFloat(subTotal / 100).toFixed(2) }}</span>
                          </td>
                        </tr>
                        <!-- charges -->
                        <tr class="mb-1" v-for="(charge,index) in orderPayment.chargesDetails" :key="index">
                          <td class="py-0 pl-0 pr-0 text-end" style="width: 90%;color: #58595B;">
                            {{ charges?.[charge['name']]?.['name'] }}
                            ({{ charges?.[charge['name']]?.['sign'] }}) :
                          </td>
                          <td class="py-0 pl-4 pr-0 " style="width: 100%">
                            <span class="font-weight-light" style="color: #58595B">
                              ${{ parseFloat(charge.amount / 100).toFixed(2) }}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="2" style="width: 10%;color: #58595B;">
                            <hr>
                          </td>
                        </tr>

                        <!-- payment information -->


                        <tr class="mb-1">
                          <td class="py-0 pl-0 pr-0 text-end font-weight-bold" style="width: 90%;color: #58595B;">
                            Grand Total :
                          </td>
                          <td class="py-0 pl-4 pr-0 " style="width: 100%">
                            <span class="font-weight-light" style="color: #58595B">
                              ${{ parseFloat(orderPayment.total / 100).toFixed(2) }}</span>
                          </td>
                        </tr>
                        <tr class="mb-1">
                          <td class="py-0 pl-0 pr-0 text-end" style="width: 90%;color: #58595B;">Paid :</td>
                          <td class="py-0 pl-4 pr-0" style="width: 100%">
                            <span class="font-weight-light" style="color: #58595B">
                              ${{ parseFloat(orderPayment.paid / 100).toFixed(2) }}</span>
                          </td>
                        </tr>
                        <tr class="mb-1" v-if="orderPayment.remaining > 0">
                          <td class="py-0 pl-0 pr-0 text-end" style="width: 90%;color: #58595B;">Due :</td>
                          <td class="py-0 pl-4 pr-0" style="width: 100%">
                            <span class="font-weight-light" style="color: #58595B">
                              ${{ parseFloat(orderPayment.remaining / 100).toFixed(2) }}</span>
                          </td>
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

              <div class="row pt-4" v-if="orderNotes.length > 0">
                  <div class="col-12">
                    <h5 class="font-weight-bold">Order Notes</h5>
                  </div>
                </div>
                <div class="row ">
                  <div class="col-12" v-for="(orderNote,index) in orderNotes" :key="index">
                      <p> <span class="font-weight-bold">{{(index+1)}})</span>  {{orderNote.description}}</p>
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
  name: "OrderInvoice",
  mixins: [ShowToastMessage, Loader, PrintElement],
  layout: 'invoice-layout',
  head() {
    return {
      // title: 'Order Invoice |',
      meta: [
        {hid: 'robots', name: 'robots', content: 'noindex, nofollow'}
      ],
    }
  },
  data() {
    return {
      getOrderParams: {
        with_relation: [
          'user',
          'user.customer.address',
          'user.customer.address.business',
          'orderCharges',
          'orderPayments.payment',
          'orderPaymentsByReference',
          'appointment.technicianAppointment.technician.user',
          'shippingAddress.business',
          'billingAddress.business',
          'orderNotes',
          'orderProductItems.productItem.product'
        ],
      },
      appointmentDetails: {
        id: '',
        reference: "",
        type: "",
        status: "",
        platform: "",
        parking: "",
        preference: "",
        date: "",
        time: "",
        length: null,
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

      },
      orderPayment: {
        total: '',
        paid: '',
        remaining: '',
        chargesDetails: '',
      },
      subTotal: 0,
    }
  },
  watch: {
    orderDetails(currentValue) {
      let tempValue =  JSON.parse(JSON.stringify(currentValue));
      tempValue.details = JSON.parse(currentValue.details)
      this.subTotal = tempValue.details.cart_data.reduce(function (acc, cur) {
        return acc + cur.product_price.sub_total
      }, 0);
      this.getOrderCalculation(tempValue)
    }
  },
  computed: {
    ...mapGetters({

      orderDetails: "orders/order"

    }),

    orderNotes(){
     return (this.orderDetails?.orderNotes ?? []).filter((singleNote)=> singleNote.customer_can_view === 'Yes' )
    },

    charges() {
      return {
        order_delivery_charge: {
          name: 'Delivery Charge',
          sign: '+'
        },
        applied_discount: {
          name: 'Applied Discount',
          sign: '-'
        },
        coupon_discount: {
          name: 'Coupon Discount',
          sign: '-'
        },
        credited_payment_discount: {
          name: 'Credited Discount',
          sign: '-'
        },
        gst_charge: {
          name: 'GST Charge',
          sign: '+'
        }
      };
    }
  },
  methods: {
    ...mapActions({

      getOrder: "orders/getOrder",
      postOrderInvoice: 'orders/postOrderInvoice',

    }),
    fullAddress(customerObj) {
      let businessName = customerObj?.address?.business?.name ?? '';
      let addressStreet = customerObj?.address?.street;
      let addressSuburb = customerObj?.address?.suburb;
      let addressState = customerObj?.address?.state.toUpperCase();
      let addressPostCode = customerObj?.address?.post_code;
      let addressCountry = customerObj?.address?.country;
      return customerObj?.type === 'Business' ?
          `${businessName} (${addressStreet}, ${addressSuburb} ${addressState} ${addressPostCode}, ${addressCountry})` :
          `${addressStreet}, ${addressSuburb} ${addressState} ${addressPostCode}, ${addressCountry}`;
    },
    async postSingleOrderInvoice(uuid) {
      let paramObj = {
        uuid: uuid,
        params: this.getOrderParams,
      };
      await this.postOrderInvoice(paramObj).then(async (response) => {
        this.loader(false);

        if (response && response.message && response.status !== 200) {
          this.showToastMessage(response);
        }
      });
    },
    print() {
      let idElement = document.getElementById('printArea');
      this.printElement(idElement);
    },

    getOrderCalculation(order) {
      let orderCharge = this.calculateOrderCharges(order);
      let orderPayment = this.calculateOrderPayments(order);
      let orderChargesDetails = this.getOrderChargesDetails(order);
      /**
       *  TODO: will be shown product Item name & quantity on order detail view like that
       *  products name with the product condition type from orderProductItem array
       */

      let remaining = orderCharge - orderPayment;
      this.orderPayment = {
        total: orderCharge,
        paid: orderPayment,
        remaining: remaining,
        chargesDetails: orderChargesDetails
      };

    },

    calculateOrderCharges(singleOrder) {
      const decreaseType = ['Discount', 'Coupon']
      if (singleOrder.status === 'Pending') {
        return singleOrder?.details?.grand_total ?? 0;
      } else {
        return singleOrder.orderCharges.reduce(function (accu, cur) {
          accu = (decreaseType.includes(cur.type)) ? accu - cur.amount : accu + cur.amount
          return accu
        }, 0);
      }

    },

    calculateOrderPayments(singleOrder) {
      if (singleOrder.status === 'Pending') {
        return singleOrder.orderPaymentsByReference.reduce(function (acc, cur) {
          return acc + cur.total_transaction
        }, 0);
      } else {
        return singleOrder.orderPayments.reduce(function (accu, cur) {
          return (!('payment' in cur) && (!cur.payment)) ? 0 : accu + cur.payment.total_transaction
        }, 0);
      }

    },

    getOrderChargesDetails(singleOrder) {
      const chargesArray = [
        'gst_charge',
        'order_delivery_charge',
        'applied_discount',
        'coupon_discount',
        'credited_payment_discount',
      ];

      return chargesArray.filter((chargeName) =>
          chargeName in singleOrder.details && singleOrder.details[chargeName].applied_status === true).map((chargeName) => {
        return {name: chargeName, amount: singleOrder.details[chargeName].amount}
      });
    },
  },
  async mounted() {
    this.loader(true);
    const routeParams = await this.$route.params;
    await this.postSingleOrderInvoice(routeParams.uuid);
    this.loader(false);
  },

}
</script>

<style scoped>

</style>
