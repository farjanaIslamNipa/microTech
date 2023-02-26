<template>
      <div class="container-md container-fluid">
        <div class="text-center pb-md-5 pb-3 pt-md-4 pt-3">
            <h1 class="gradient-header mb-0">Book online and get 10% off</h1>
            <p class="text-500 text-20">Easiest way to get a service</p>
          </div>
          <!-- <div class="add-banner-img">
            <nuxt-link :to="{name: 'book-online'}">
              <nuxt-img preload format="webp" quality="80" loading="lazy" class="img-fluid" src="/images/home/add-banner.webp" alt="Add Banner" />
            </nuxt-link>
          </div> -->
          <div class="row row-cols-1 row-cols-sm-5 row-cols-md-5 ms-xl-5 ms-0 booking-step-wrapper">
            <div class="col">
              <div class="d-sm-flex d-block align-items-center">
                <div class="d-sm-block d-flex align-items-center">
                <nuxt-img preload format="webp" quality="80" loading="lazy" class="step-icon" src="/images/home/step-1.png" alt="Book Online" />
                  <p style="line-height:1" class="mb-0 text-18 mt-2 d-sm-block d-none step-title"><b class="text-blue">Select</b> a<br> service</p>
                  <p style="line-height:1" class="mb-0 text-18 mt-2 d-sm-none d-block ms-2"><b class="text-blue">Select</b> a service</p>
                </div>
                <div class="mt-sm-0 mt-2 ms-sm-0 ms-3">
                  <nuxt-img preload format="webp" quality="80" loading="lazy" class="step-arrow" src="/images/home/arrow-1.svg" alt="Book Online" />
                  <span class="text-blue d-sm-none d-block down-arrow"><i class="fa-solid fa-down-long"></i></span>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="d-sm-flex d-block align-items-center">
                <div class="d-sm-block d-flex align-items-center">
                  <nuxt-img preload format="webp" quality="80" loading="lazy" class="step-icon" src="/images/home/step-2.png" alt="Book Online" />
                  <p style="line-height:1" class="mb-0 text-18 mt-2 d-sm-block d-none step-title"><b class="text-blue">Pick</b> a<br> date and time</p>
                  <p style="line-height:1" class="mb-0 text-18 mt-2 d-sm-none d-block ms-2"><b class="text-blue">Pick</b> a date and time</p>
                </div>
                <div class="mt-sm-0 mt-2 ms-sm-0 ms-3">
                  <nuxt-img preload format="webp" quality="80" loading="lazy" class="step-arrow" src="/images/home/arrow-1.svg" alt="Book Online" />
                  <span class="text-blue d-sm-none d-block down-arrow"><i class="fa-solid fa-down-long"></i></span>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="d-sm-flex d-block align-items-center">
                <div class="d-sm-block d-flex align-items-center">
                  <nuxt-img preload format="webp" quality="80" loading="lazy" class="step-icon" src="/images/home/step-3.png" alt="Book Online" />
                  <p style="line-height:1" class="mb-0 text-18 mt-2 d-sm-block d-none step-title"><b class="text-blue">Provide</b> <br> your details </p>
                  <p style="line-height:1" class="mb-0 text-18 mt-2 d-sm-none d-block ms-2"><b class="text-blue">Provide</b> your details </p>
                </div>
                <div class="mt-sm-0 mt-2 ms-sm-0 ms-3">
                  <nuxt-img preload format="webp" quality="80" loading="lazy" class="step-arrow" src="/images/home/arrow-1.svg" alt="Book Online" />
                  <span class="text-blue d-sm-none d-block down-arrow"><i class="fa-solid fa-down-long"></i></span>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="d-sm-flex d-block align-items-center">
                <div class="d-sm-block d-flex align-items-center">
                  <nuxt-img preload format="webp" quality="80" loading="lazy" class="step-icon" src="/images/home/step-4.png" alt="Book Online" />
                  <p style="line-height:1" class="mb-0 text-18 mt-2 d-sm-block d-none step-title"><b class="text-blue">Make</b> <br> payment</p>
                  <p style="line-height:1" class="mb-0 text-18 mt-2 d-sm-none d-block ms-2"><b class="text-blue">Make</b> payment</p>
                </div>
                <div class="mt-sm-0 mt-2 ms-sm-0 ms-3">
                  <nuxt-img preload format="webp" quality="80" loading="lazy" class="step-arrow" src="/images/home/arrow-1.svg" alt="Book Online" />
                  <span class="text-blue d-sm-none d-block down-arrow"><i class="fa-solid fa-down-long"></i></span>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="d-flex">
                <div class="d-sm-block d-flex align-items-center">
                  <nuxt-img preload format="webp" quality="80" loading="lazy" class="step-icon" src="/images/home/step-5.png" alt="Book Online" />
                  <p style="line-height:1" class="mb-0 text-18 mt-2 d-sm-block d-none step-title"><b class="text-blue">Geeks</b> will be <br> on your way</p>
                  <p style="line-height:1" class="mb-0 text-18 mt-2 d-sm-none d-block ms-2"><b class="text-blue">Geeks</b> will be on your way</p>
                </div>
              </div>
            </div>
          </div>
      </div>
</template>

<script>
  export default {
    name: 'BookingStep'
  }
</script>

<style scoped>
.gradient-header{
  background: linear-gradient(to right, rgba(26, 93, 136, 1) 40%, rgba(247, 106, 42, 1) 60%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
  font-weight: 600;
  font-size: 38px;
}

.step-arrow{
  width: 80px;
}
@media(max-width:1399px){

  .step-arrow{
    width: 60px;
  }
}
.down-arrow{
  font-size: 12px;
}
@media(max-width:1199px){
  .step-arrow{
    width: 40px;
  }
}
@media(max-width:991px){
  .step-arrow{
    display: none;
  }
}
@media(max-width:767px){
.gradient-header{
  font-size: 28px;
}
.step-icon{
  height: 65px;
}
.step-title{
  font-size: 14px !important;
}
}
@media(max-width:575px){
.booking-step-wrapper{
  margin: 0 0 0 80px !important;
}
.step-icon{
  height: 55px;
}
}
@media(max-width:475px){
.gradient-header{
  font-size: 22px;
}
.booking-step-wrapper{
  margin: 0 0 0 40px !important;
}
}
</style>
