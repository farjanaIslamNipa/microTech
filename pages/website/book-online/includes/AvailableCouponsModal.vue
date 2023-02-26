<template>
  <div class="modal fade " id="AvailableCouponsModal" tabindex="-1" role="dialog" aria-labelledby="AvailableCouponsModal"
       aria-hidden="AvailableCouponsModal">
    <div class="modal-dialog modal-dialog-scrollable modal-md modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-brand">
          <h5 class="text-white mb-0 pb-0">Coupons </h5>

          <button type="button" class="btn " data-bs-dismiss="modal" aria-label="Close">
            <i class="fa-solid fa-x text-white"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="">
            <ul class="nav">
              <li title="Click to apply" v-for="(coupon,index) in coupons" class="couponApply nav-item mr-1"
                  :key="index" @click="applyModal(coupon.code, coupon.apply_on)">{{ coupon.code }}
              </li>
            </ul>
          </div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "AvailableCouponsModal",
  emits: ['emitApplyCoupon'],
  props: {


  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters({
      coupons: 'coupons/coupons',
    }),
  },
  methods: {
    applyModal(code, applyOn) {

      this.$emit('emitApplyCoupon', {
        couponCode: code,
        applyOn: applyOn,
        modelName: this.modalName,
      });
    },
  },
  watch: {},

}
</script>

<style scoped>
.couponApply {
  border: 2px dashed #FF6200;
  border-radius: 4px;
  color: #FF6200;
  display: inline-block;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  padding: 15px 20px;
  text-transform: uppercase;
}

.couponApply:hover {
  background: rgba(255, 98, 0, .1);
  text-decoration: none;
  cursor: pointer;
}
</style>
