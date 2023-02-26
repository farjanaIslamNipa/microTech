<template>
  <header class="header-slider">
    <div>
      <!-- Slider Section -->
      <div>
        <div id="carouselHeaderFade" class="carousel slide carousel-fade" data-bs-ride="carousel"
          data-bs-interval="3000">
          <div v-if="settingDefaultWebsiteHeaderBannerSlider?.value?.slider_status === 1 && settingDefaultWebsiteHeaderBannerSlider?.value?.slider_details" class="carousel-inner">
            <div v-for="(sliderDetails, index) in settingDefaultWebsiteHeaderBannerSlider?.value?.slider_details"
              :key="index" :class="index === 0 ? 'carousel-item active' : 'carousel-item'">
              <a :href="sliderDetails?.info_link" class="header-slider-img d-block">
                <nuxt-img preload format="webp" quality="80" loading="lazy" class="slider-img"
                  :src="sliderDetails?.image_url" alt="Book a Geek" />
              </a>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselHeaderFade" data-bs-slide="prev" v-if="settingDefaultWebsiteHeaderBannerSlider?.value?.slider_status === 1 && settingDefaultWebsiteHeaderBannerSlider?.value?.slider_details">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselHeaderFade" data-bs-slide="next" v-if="settingDefaultWebsiteHeaderBannerSlider?.value?.slider_status === 1 && settingDefaultWebsiteHeaderBannerSlider?.value?.slider_details">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <!-- Banner section -->
      <div v-if="settingDefaultWebsiteHeaderBannerSlider?.value?.slider_status === 0 && settingDefaultWebsiteHeaderBannerSlider.value.banner_details">
          <a :href="settingDefaultWebsiteHeaderBannerSlider?.value?.banner_details?.info_link"
            class="header-slider-img d-block">
            <nuxt-img preload format="webp" quality="80" loading="lazy" class="slider-img"
              :src="settingDefaultWebsiteHeaderBannerSlider?.value?.banner_details?.image_url" alt="Book a Geek" />
          </a>
        </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HeaderSection',
  computed: {
    ...mapGetters({
      settingDefaultWebsiteHeaderBannerSlider: 'settings/settingDefaultWebsiteHeaderBannerSlider'
    })
  }
}
</script>

<style scoped>
/* Loader css start */
/* Loader css end */
.header-slider-img {
  background-color: #e8f3fb;
  text-align: center;
  /* height: 700px;
  width: 100%; */
}

.slider-img {

  height: auto;
  max-width: 100%;
  object-fit: cover;
}

.header-banner {
  background-image: url('/images/home/header-banner.webp');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-title {
  font-size: 70px;
  /* text-shadow: 2px 7px 5px rgba(0,0,0,0.3),
    0px -4px 10px rgba(255,255,255,0.3); */
}

.subtitle-text {
  font-size: 25px;
}

.header-search-input {
  background: none;
  border: 1px solid white;
  border-radius: 5px 0 0 5px;
  height: 55px;
  color: white;
  clip-path: polygon(0 0, 100% 0%, 88% 100%, 0% 100%);
}

.header-search-btn {
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 0 5px 5px 0;
  height: 55px;
  color: var(--secondaryColor);
  font-weight: 600;
  font-size: 18px;
  clip-path: polygon(22% 0, 100% 0%, 100% 100%, 0% 100%);
  margin-left: -59px;
  padding: 0 35px;
}

.break-btn-wrapper {
  display: inline-block;
  padding: 12px 0 10px;
  border: 8px solid rgba(0, 184, 209, 0.4);
  border-radius: 38px;
}

.break-btn {
  position: relative;
  background: rgba(0, 184, 209, 0.4);
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  border: 0.2em solid white;
  border-radius: 30px;
  padding: 14px 30px;
}

.break-btn::before {
  content: "";
  display: block;
  position: absolute;
  width: 8%;
  background: #168f8f;
  height: 0.2em;
  right: 20%;
  top: -3px;
  transform: skewX(-45deg);
  -webkit-transition: all 0.5s cubic-bezier(0.86, 0, 0.07, 1);
  transition: all 0.5s cubic-bezier(0.86, 0, 0.07, 1);
}

.break-btn::after {
  content: "";
  display: block;
  position: absolute;
  width: 8%;
  background: #229999;
  height: 0.2em;
  left: 20%;
  bottom: -4px;
  transform: skewX(45deg);
  -webkit-transition: all 0.5 cubic-bezier(0.86, 0, 0.07, 1);
  transition: all 0.5s cubic-bezier(0.86, 0, 0.07, 1);
}

.break-btn:hover::before {
  right: 75%;
}

.break-btn:hover::after {
  left: 75%;
}

.call-icon {
  height: 30px;
}

@media(max-width:1399px) {
  .header-banner {
    height: 650px;
  }
}

@media(max-width:1199px) {
  .header-banner {
    height: 550px;
  }

  .header-title {
    font-size: 60px;
  }

  .request-call-back-btn {
    height: 65px;
  }
}

@media(max-width:992px) {
  .header-banner {
    height: 450px;
  }

  .header-title {
    font-size: 52px;
  }

  .subtitle-text {
    font-size: 18px;
  }

  .request-call-back-btn {
    height: 60px;
  }
}

@media(max-width:767px) {
  .header-banner {
    background-image: url('/images/home/small-device-header-banner.webp');
    height: 400px;

  }

  .request-call-back-btn {
    height: 55px;
  }
}

@media(max-width:374px) {
  .header-title {
    font-size: 46px;
  }

  .subtitle-text {
    font-size: 17px;
  }
}
</style>
