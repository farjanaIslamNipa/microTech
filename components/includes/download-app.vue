<template>
    <section class="mb-5 position-relative app-download-section">
      <div class="app-download-bg pb-lg-0 pb-5">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-6 col-12 order-lg-1 order-2">
              <div class="mobile-image">
                <nuxt-img preload format="webp" quality="80" loading="lazy" class="img-fluid mobile-top" src="/images/home/mobile-0.webp" alt="Download App" />
                <nuxt-img preload format="webp" quality="80" loading="lazy" class="img-fluid mobile-bottom" src="/images/home/mobile-1.webp" alt="Download App" />
              </div>
            </div>
            <div class="col-lg-6 col-12 order-lg-2 order-1">
              <div class="pt-4 mt-3 ps-xl-0 ps-md-5 ps-0">
                <div class="download-app-text"><p class="ps-2 pt-3 text-uppercase">DOWNLOAD OUR APP</p></div>
                <p class="app-download-title text-500 pe-md-5 pe-0 me-md-5 me-0 mb-0 py-3">App is available for free on the app store</p>
                <p class="text-18 pe-xl-5 pe-0 me-xl-5 me-0">Find and book your appointment from anywhere with our Geekify customer app.</p>
                <div class="pt-1">
                  <a :href="settingDefaultCustomerMobApp?.android?.app_link??'#'" target="_blank" rel="noopener noreferrer">
                    <nuxt-img preload format="webp" quality="80" loading="lazy" class="app-icon" src="/images/global/google-play.webp" alt="App Download" />
                  </a>
                  <a :href="settingDefaultCustomerMobApp?.ios?.app_link??'#'" class="ms-sm-2 ms-0" target="_blank" rel="noopener noreferrer">
                    <nuxt-img preload format="webp" quality="80" loading="lazy" class="app-icon" src="/images/global/app-store.webp" alt="App Download" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';

  export default {
    name: 'DownloadApp',
    computed:{
      ...mapGetters({
        settingDefaultCustomerMobApp: 'settings/settingDefaultCustomerMobApp'
      })
    },


  }
</script>

<style scoped>
.app-download-bg{
  background-image: url('/images/home/app-download-bg.webp');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 400px;
}
.app-download-section{
  padding-top: 95px;
  padding-bottom: 90px;
}
.mobile-image{
  position: absolute;
  top: 0;
}
.download-app-text {
    width: 100%;
    position: relative;
}

.download-app-text:after {
    content: '';
    width: 100px;
    border-bottom: solid 2px var(--brandColor);
    position: absolute;
    left: 0;
    bottom: 20%;
    z-index: 1;
}

.download-app-text p {
    color: #252525;
    background-color:#f1f5f6;
    display: inline-block;
    z-index: 3;
    position: relative;
    margin: 0;
    margin-left: 60px;
    font-weight: 400;
    font-size: 20px;
}
.app-download-title{
  font-size: 38px;
}
.mobile-top{
  margin-right: -70px;
  position: relative;
  z-index: 5;
}
.mobile-bottom{
  z-index: 3;
}

@media(max-width:1199px){
  .app-download-title{
    font-size: 32px;
  }
}
@media(max-width:991px){
  .app-download-bg{
    background-image: none;
    background-color: #f1f5f6;
    height: auto;
}
  .mobile-image{
    display: none;
}
.app-download-section{
  padding-top: 0;
  padding-bottom: 0;
}
}
@media(max-width:475px){
.app-download-title{
    font-size: 28px;
  }
}
</style>
