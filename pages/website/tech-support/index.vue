<template>
<div>
    <div class="bg-white pb-1">
        <!-- {{-- Tech support page header --}} -->
        <div class="tech-support-bg position-relative">
            <div class="container">
                <div class="row">
                    <div class="col-xl-5 col-md-6 col-12">
                        <div class="tech-support-header-content">
                            <h1 class="tech-support-header-title mb-md-4 mb-3">Geeks support for educational institutions</h1>
                            <p class="tech-support-header-details">Geekify brings dedicated tech support for teachers,
                                students and educational institutions to make the teaching & learning process easier than
                                ever before.</p>
                        </div>
                    </div>
                    <div class="col-xl-7 col-md-6 d-md-block d-none">
                        <div class="d-flex align-items-end tech-support-banner-container">
                            <nuxt-img preload format="webp" quality="80" loading="lazy" class="img-fluid" src="/images/tech-support/education-header-image.webp" alt="Tech Support" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- {{-- Tech support page body content --}} -->
        <section class="py-md-4 py-2">
            <div class="container">
                <div class="py-md-3 py-sm-2 py-0 mt-xl-5 mt-0 px-md-0 px-2">
                    <div>
                        <h2 class="brand-color">IT solutions for educational ecosystems</h2>
                        <p style="font-size:20px;">Nowadays advancing technology plays a big role in any
                            learning environment, making it extremely important that all devices used in the environment are
                            the right fit, without malfunctioning defects and set up correctly to make interactions smoother
                            for students and teachers alike</p>
                    </div>

                    <!-- {{-- who can use our services section --}} -->
                    <div class="row align-items-center py-md-5 py-sm-2 py-0">
                        <div class="col-md-6 order-md-1 order-2">
                            <div class="pe-xl-5 pe-lg-3 pe-0">
                                <h3 class="text-capitalize">Who can use our services?</h3>
                                <p class="medium-font">Our services are fitting for everyone involved in the learning environment.</p>

                                <p class="medium-font">Students can rest assured that their devices are working as intended and without malware
                                    for their daily school or university related activities.</p>

                                <p class="medium-font">Teachers can benefit from the ecosystem that our geeks can set up to make teaching easier
                                    and more accessible to students.</p>

                                <p class="medium-font">Learning institutions can incorporate intelligent record keeping of students’ grades and
                                    attendance while setting up a digital learning environment for teachers and students
                                    with the help of our geeks.

                                </p>
                            </div>
                        </div>
                        <div class="col-md-6 order-md-2 order-1">
                            <div class="mb-md-0 mb-sm-4 mb-3">
                                <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/tech-support/services.webp" alt="Our services" class="img-fluid" />
                            </div>
                        </div>
                    </div>

                    <!-- {{-- Device installation section --}} -->
                    <div class="row align-items-center py-md-5 py-sm-2 py-0">
                        <div class="col-md-6">
                            <div class="mb-md-0 mb-sm-4 mb-3">
                                <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/tech-support/device-installation.webp" alt="Device Installation" class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="pe-lg-3 pe-0">
                                <h3 class="text-capitalize">Device Installations</h3>
                                <p class="medium-font">Our geeks have got you covered whether it comes to setting up your environment by
                                    installing computers, laptops, printers, advanced learning interfaces such as
                                    interactive screens, projectors and whiteboards or setting up Wi-Fi or cloud networks.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- {{-- information protection section --}} -->
                    <div class="row align-items-center py-md-5 py-sm-2 py-0">
                        <div class="col-md-6 order-md-1 order-2">
                            <div class="pe-lg-3 pe-0">
                                <h3 class="text-capitalize">Information Protection </h3>
                                <p class="medium-font">As the world of technology grows, so does the threat of viruses, malware and potential
                                    damage or loss of sensitive information. To protect the teachers, students and everyone
                                    involved in the learning environment, our geeks ensure that your devices are given the
                                    maximum protection and share their expertise on the good practices to keep information
                                    private and secure.</p>
                            </div>
                        </div>
                        <div class="col-md-6 order-md-2 order-1">
                            <div class="mb-md-0 mb-sm-4 mb-3 text-center">
                                <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/tech-support/information-protection.webp" alt="Information protection" class="img-fluid" />
                            </div>
                        </div>
                    </div>

                    <!-- {{-- IT support section --}} -->
                    <div class="row align-items-center py-md-5 py-sm-2 py-0">
                        <div class="col-md-6">
                            <div class="mb-md-0 mb-sm-4 mb-3">
                                <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/tech-support/it-support.webp" alt="Device Installation" class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="pe-lg-3 pe-0">
                                <h3 class="text-capitalize">IT support on the fly</h3>
                                <p class="medium-font">Geekify will act as your IT backend, resolving all IT and tech related issues such as
                                    device failures, networking or cloud issues or maintenance and repair. We offer both
                                    remote and onsite services for our customers and ensure satisfaction and reliability in
                                    every service that we perform. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
</template>


<script>
export default {
    name: 'TechSupport',
    layout: 'website-layout',
    head() {
        return {
          // title:'Tech Support |',
          meta: [
            { hid: 'og:title',property: 'og:title', name: 'meta', content: `Tech Support | ${process.env.app_name}`},
            { hid: 'twitter:title', property:"twitter:title", name:'meta', content:`Tech Support | ${process.env.app_name}`},
            {hid: 'og:url', property: 'og:url', name: 'meta', content: 'https://geekify.au/tech-support/'},
            {hid: 'twitter:domain', property: 'twitter:domain', name: 'meta', content: 'https://geekify.au/tech-support/'}
          ],
          link: [
            {hid: 'canonical', rel: 'canonical', href: 'https://geekify.au/tech-support/'}
          ],
        }
    }
}
</script>


<style scoped>
.tech-support-bg {
  background-image: url('/images/tech-support/education-banner.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  height: 740px;
}

.tech-support-header-content {
  padding-top: 100px;
}

.tech-support-banner-container {
  height: 740px;
}

.tech-support-header-title {
  color: #fff;
  font-size: 45px;
}

.tech-support-header-details {
  color: #fff;
  font-size: 20px;
  word-spacing: 5px;
  padding-right: 20px;
}

@media (min-width: 1200px) and (max-width: 1440px) {
  .tech-support-bg {
    height: 640px;
  }

  .tech-support-banner-container {
    height: 640px;
  }

}

@media (min-width: 992px) and (max-width: 1199px) {
  .tech-support-bg {
    height: 540px;
  }

  .tech-support-banner-container {
    height: 540px;
  }

  .tech-support-header-title {
    font-size: 40px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .tech-support-bg {
    height: 440px;
  }

  .tech-support-banner-container {
    height: 440px;
  }

  .tech-support-header-title {
    font-size: 36px;
  }

  .tech-support-header-details {
    font-size: 18px;
    word-spacing: 3px;
  }

  .tech-support-header-content {
    padding-top: 60px;
  }

}

@media (max-width: 767px) {
  .tech-support-bg{
    margin-top: 45px;
  }
}
@media (min-width: 500px) and (max-width: 767px) {
  .tech-support-bg {
    height: 400px;
  }

  .tech-support-header-title {
    font-size: 36px;
  }

  .tech-support-header-details {
    font-size: 18px;
    word-spacing: 3px;
  }

  .tech-support-header-content {
    padding-top: 60px;
    padding-right: 10px;
    padding-left: 10px;
  }

}

@media (min-width: 320px) and (max-width: 499px) {
  .tech-support-bg {
    height: 400px;
  }

  .tech-support-header-title {
    font-size: 32px;
    padding-right: 0;
  }

  .tech-support-header-details {
    font-size: 17px;
    word-spacing: 3px;
    padding-right: 0;
  }

  .tech-support-header-content {
    padding-top: 30px;
    padding-right: 10px;
    padding-left: 10px;
  }

}
</style>
