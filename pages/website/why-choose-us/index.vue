<template>
<div class="bg-white">
    <div class="why-choose-banner">
        <div class="container">
            <div class="row align-items-center justify-content-md-end justify-content-center ">
                <div class="col-lg-7 col-md-9 col-sm-10 col-12">
                    <div class="p-xl-5 p-0 text-center">
                        <h1 class="brand-color why-choose-header-title mb-lg-3 mb-2">Why choose
                            us?</h1>
                        <p class="why-choose-sub-title px-md-5 px-2">Why should you choose us? Simple, because we make a
                            difference! Our motto is <span class="font-semi-bold">“You point it, we fix it!”</span> and
                            we live and conduct our business accordingly!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- {{-- why choose body content --}} -->
    <div class="container">
        <div class="row align-items-center py-xl-5 py-md-4 py-sm-3 py-2">
            <div class="col-md-6">
                <div class="our-promise-card p-lg-5 p-0 pb-md-0 pb-sm-4 pb-2 px-sm-0 px-3">
                    <h1 class="font-bold">Our Promise</h1>
                    <p>Geekify guarantees satisfactory services and happy customers!</p>
                    <p>Our geeks are passionate and well versed, led by experienced leaders who have years of hands-on
                        experience to all sorts of tech related problems that can arise in both personal and business
                        contexts.</p>
                    <p>We always handle each client’s problem scenario individually which lets us assess and give
                        personalized solution to every single client, and we find that this approach leaves our clients
                        the happiest!</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="text-center p-lg-5 p-sm-0 p-3">
                    <nuxt-img preload format="webp" quality="80" loading="lazy" class="img-fluid" src="/images/why-choose/why-choose.webp" alt="Geekify" />
                </div>
            </div>
        </div>

        <div class="pb-sm-5 pb-3 pt-3">
            <div class="py-xl-5 py-0 always-on-job">
                <div class="p-md-5 p-sm-4 p-3">
                    <h1 class="font-bold text-lg-start text-md-center text-start">Always on the job</h1>
                    <p>No matter the type of tech trouble you have, whether it be repair, installation, troubleshooting,
                        security or even consultation and regular maintenance work, our geeks leave no corner unattended –
                        and no customer unhappy!</p>
                    <p>With that in mind, if you would like solutions to your tech troubles lighting fast, then you have
                        come to the right decision!</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>


<script>
export default {
    name: 'WhyChooseUs',
    layout: 'website-layout',
    head() {
      return {
        // title: 'Why Choose Us |',
        meta: [
          {hid: 'og:title', property: 'og:title', name: 'meta', content: `Why Choose Us | ${process.env.app_name}`},
          {hid: 'twitter:title', property: "twitter:title", name: 'meta', content: `Why Choose Us | ${process.env.app_name}`},
          {hid: 'og:url', property: 'og:url', name: 'meta', content: 'https://geekify.au/why-choose-us/'},
          {hid: 'twitter:domain', property: 'twitter:domain', name: 'meta', content: 'https://geekify.au/why-choose-us/'}
        ],
        link: [
          {hid: 'canonical', rel: 'canonical', href: 'https://geekify.au/why-choose-us/'}
        ],
      }
    }

}
</script>


<style scoped>
.why-choose-banner {
  background-image: url('/images/why-choose/why-choose-banner.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  height: 500px;
}

.why-choose-header-title {
  font-size: 45px;
  padding-top: 50px;
}

.why-choose-sub-title {
  font-size: 18px;

}

.our-promise-card h1, .always-on-job h1 {
  font-size: 38px;
}

.our-promise-card p, .always-on-job p {
  font-size: 16px;
}

.always-on-job {
  background-image: url('/images/why-choose/why-choose-banner-2.webp');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom center;
}

@media (min-width: 2001px) and (max-width: 2560px) {
  .why-choose-banner {
    height: 750px;

  }
}

@media (min-width: 1701px) and (max-width: 2000px) {
  .why-choose-banner {
    height: 720px;
  }
}

@media (min-width: 1401px) and (max-width: 1700px) {
  .why-choose-banner {
    height: 620px;
  }
}

@media (min-width: 1301px) and (max-width: 1440px) {
  .why-choose-banner {
    height: 550px;
  }

  .why-choose-header-title {
    padding-top: 30px;
  }
}

@media (min-width: 1101px) and (max-width: 1300px) {
  .why-choose-banner {
    height: 500px;
  }

  .why-choose-header-title {
    font-size: 40px;
    padding-top: 60px;
  }

  .why-choose-sub-title {
    font-size: 17px;

  }
}

@media (min-width: 992px) and (max-width: 1100px) {

  .why-choose-header-title {
    font-size: 38px;
    padding-top: 80px;
  }

  .why-choose-sub-title {
    font-size: 17px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .why-choose-banner {
    height: 450px;
  }

  .why-choose-header-title {
    font-size: 38px;
    padding-top: 50px;
  }

  .why-choose-sub-title {
    font-size: 16px;
  }

  .our-promise-card h1, .always-on-job h1 {
    font-size: 32px;
  }
}

@media (min-width: 501px) and (max-width: 767px) {
  .why-choose-banner {
    height: 400px;
  }

  .why-choose-header-title {
    font-size: 36px;
    padding-top: 30px;
  }

  .why-choose-sub-title {
    font-size: 16px;
  }

  .our-promise-card h1, .always-on-job h1 {
    font-size: 32px;
    font-weight: 500 !important;
  }
}

@media (min-width: 320px) and (max-width: 500px) {
  .why-choose-banner {
    height: 430px;
  }

  .why-choose-header-title {
    font-size: 36px;
    padding-top: 30px;
  }

  .why-choose-sub-title {
    font-size: 15px;
  }

  .our-promise-card h1, .always-on-job h1 {
    font-size: 32px;
    font-weight: 500 !important;
  }
}
</style>
