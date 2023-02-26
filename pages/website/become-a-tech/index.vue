<template>
  <div class="bg-white">
    <header class="become-tech-bg position-relative d-flex align-items-lg-end align-items-center justify-content-center">
        <div class="container">
            <div class="row">
                <div class="col-xl-5 col-lg-6 col-12">
                    <div class="tech-header-content mt-xl-5 mt-lg-2 mt-0">
                        <h1 class="brand-color mb-2">Become a Tech</h1>
                        <p class="text-white">We are always on the lookout for talented techs!</p>
                    </div>
                </div>
                <div class="col-xl-7 col-lg-6 col-0">
                    <div class="monitor-img text-end d-lg-block d-none">
                        <nuxt-img preload format="webp" quality="80" loading="lazy" class="img-fluid" src="/images/become-a-tech/monitor.webp" alt="Monitor" />
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- {{-- BECOME A TECH BODY CONTENT body content --}} -->
    <main class="py-lg-5 py-2 mt-md-5 mt-3">
        <div class="pb-xl-5 pb-lg-4 pb-md-2 pb-0">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6 order-md-1 order-2">
                        <div class="p-md-0 p-sm-4 p-0">
                            <nuxt-img preload format="webp" quality="80" loading="lazy" class="img-fluid" src="/images/become-a-tech/looking-future.webp" alt="Looking for Future" />
                        </div>
                    </div>
                    <div class="col-md-6 order-md-2 order-1">
                        <div class="looking-future">
                            <h2>Looking for a future in the tech industry?</h2>
                            <p>Geekify offers a flexible and interactive working and learning environment. Our techs get
                                regular support from us and get to work in their desired time frames. Work with a team of
                                experienced techs, in a vast platform that keeps you on your toes with variety and intensity of
                                tasks, every day is an adventure!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- {{-- What expected --}} -->
        <div style="background: rgba(247, 148, 29, 0.1);" class="py-5 mt-5">
            <div class="container">
                <div class="text-center pt-lg-5 pt-md-2">
                    <h1 class="">What is expected from you?</h1>
                    <div class="row justify-content-center py-5">
                        <div class="col-lg-3 col-md-6 mb-md-0 mb-4">
                            <div class="text-center position-relative">
                                <div class="tech-skill-count ms-1">
                                    <h1 class="mb-0">01</h1>
                                </div>
                                <div class="tech-skill-icon"><nuxt-img preload format="webp" quality="80" loading="lazy" class="" src="/images/become-a-tech/skill-1.webp" alt="skill" /></div>
                                <div class="pt-4"><nuxt-img preload format="webp" quality="80" loading="lazy" class="" src="/images/become-a-tech/line.webp" alt="line" /></div>
                            </div>
                            <p class="mb-0 mt-4 skill-details px-3">A background in providing relevant tech support for business
                                and homes</p>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-md-0 mb-4">
                            <div class="text-center position-relative">
                                <div class="tech-skill-count">
                                    <h1 class="mb-0">02</h1>
                                </div>
                                <div class="tech-skill-icon"><nuxt-img preload format="webp" quality="80" loading="lazy" class="" src="/images/become-a-tech/skill-2.webp" alt="skill" /></div>
                                <div class="pt-4"><nuxt-img preload format="webp" quality="80" loading="lazy" class="" src="/images/become-a-tech/line.webp" alt="line" /></div>
                            </div>
                            <p class="mb-0 mt-4 skill-details px-3">A good attitude, eagerness to learn and adapt</p>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-md-0 mb-4">
                            <div class="text-center position-relative">
                                <div class="tech-skill-count">
                                    <h1 class="mb-0">03</h1>
                                </div>
                                <div class="tech-skill-icon"><nuxt-img preload format="webp" quality="80" loading="lazy" class="" src="/images/become-a-tech/skill-3.webp" alt="skill" /></div>
                                <div class="pt-4"><nuxt-img preload format="webp" quality="80" loading="lazy" class="" src="/images/become-a-tech/line.webp" alt="line" /></div>
                            </div>
                            <p class="mb-0 mt-4 skill-details px-3">Great communication skills</p>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-md-0">
                            <div class="text-center position-relative">
                                <div class="tech-skill-count">
                                    <h1 class="mb-0">04</h1>
                                </div>
                                <div class="tech-skill-icon"><nuxt-img preload format="webp" quality="80" loading="lazy" class="" src="/images/become-a-tech/skill-4.webp" alt="skill" /></div>
                                <div class="pt-4"><nuxt-img preload format="webp" quality="80" loading="lazy" class="" src="/images/become-a-tech/line.webp" alt="line" /></div>
                            </div>
                            <p class="mb-0 mt-4 skill-details px-3">A team-oriented mindset</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- {{-- Benefit Banner --}} -->
        <div class="benefit-banner d-flex align-items-center">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-7 col-md-9">
                        <h2 class="text-sm-end text-center mb-2 font-bold">Your Benefit</h2>
                        <div style="box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;" class="bg-white rounded p-sm-5 p-3">
                            <ul class="benefit-list m-0">
                                <li class="mb-2">Support from an experienced team of helpers</li>
                                <li class="mb-2">A lucrative remuneration</li>
                                <li class="mb-2">An opportunity to advance your career in the tech industry</li>
                                <li>And much more!</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  </div>
</template>


<script>
export default {
    name: 'BecomeATech',
    layout: 'website-layout',
    data() {
        return {

        }
    },
    methods: {
        // toggleArrow(index) {
        //     let showIcon = document.getElementById('arrow-icon' + index);
        //     showIcon.classList.toggle('show-icon')
        // }
    },
    head() {
        return {
            // title: 'Become a Tech |',
            meta: [
              { hid: 'og:title',property: 'og:title', name:'meta', content: `Become A Tech | ${process.env.app_name}`},
              { hid: 'twitter:title', property:"twitter:title", name:'meta', content:`Become a Tech | ${process.env.app_name}`},
              { hid: 'og:url', property: 'og:url', name:'meta', content: 'https://geekify.au/become-a-tech/'},
              { hid: 'twitter:domain', property: 'twitter:domain', name:'meta', content: 'https://geekify.au/become-a-tech/'}
            ],
          link: [
            { hid:'canonical', rel: 'canonical', href: 'https://geekify.au/become-a-tech/' }
          ],
        }
    }

}
</script>


<style scoped>
/* BECOME A TECH CSS STARTS HERE */
.become-tech-bg {
  background-image: url('/images/become-a-tech/become-tech-banner.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom left -20px;
  height: 800px;
}

.tech-header-content h1 {
  font-size: 60px;
}

.tech-header-content p {
  font-size: 24px;
}

.looking-future {
  margin-left: -90px;
}

.looking-future p {
  font-size: 20px;
  padding-right: 10px;
  text-align: justify;
}

.tech-skill-count h1 {
  font-size: 100px;
  font-weight: bold;
  color: #FBD1AC;
}

.tech-skill-icon {
  position: absolute;
  top: 45%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}

.skill-details {
  font-size: 18px;
  color: #000;
}

.benefit-banner {
  background-image: url('/images/become-a-tech/benefit-banner.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left center;
  height: 550px;
}


.benefit-list li {
  color: #000;
  font-size: 18px;
  list-style: disc !important;
}

@media (min-width: 1400px) and (max-width: 1599px) {
  .become-tech-bg {
    height: 700px;
  }

  .monitor-img img {
    height: 550px;
  }
}

@media (min-width: 1200px) and (max-width: 1399px) {
  .become-tech-bg {
    height: 600px;
  }

  .monitor-img img {
    height: 450px;
  }

  .tech-header-content h1 {
    font-size: 60px;
  }

  .tech-header-content p {
    font-size: 18px;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .become-tech-bg {
    height: 550px;
  }

  .monitor-img img {
    height: 400px;
  }

  .tech-header-content h1 {
    font-size: 55px;
  }

  .tech-header-content p {
    font-size: 18px;
  }

  .looking-future p {
    font-size: 18px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .become-tech-bg {
    height: 550px;
  }

  .monitor-img {
    display: none;
  }

  .tech-header-content {
    margin-top: -20px !important;
  }

  .tech-header-content h1 {
    font-size: 50px;
  }

  .tech-header-content p {
    font-size: 18px;
  }

  .looking-future {
    margin-left: -50px;
  }

  .looking-future p {
    font-size: 16px;
    padding-right: 0;
  }

  .benefit-banner {
    height: 450px;
  }
}

@media (min-width: 501px) and (max-width: 767px) {
  .become-tech-bg {
    background-image: url('/images/become-a-tech/become-tech-small.webp');
    background-position: top center;
    height: 450px;
  }

  .monitor-img {
    display: none;
  }
  .tech-header-content h1 {
    font-size: 50px;
  }
  .tech-header-content p {
    font-size: 18px;
  }

  .looking-future {
    margin-left: 0;
    padding: 20px;
  }

  .looking-future p {
    font-size: 16px;
    padding-right: 0;
  }
  .benefit-banner {
    height: 450px;
  }
}

/*  */
@media (min-width: 320px) and (max-width: 500px) {
  .become-tech-bg {
    background-image: url('/images/become-a-tech/become-tech-small.webp');
    background-position: top center;
    height: 350px;
  }
  .monitor-img {
    display: none;
  }
  .tech-header-content h1 {
    font-size: 40px;
  }
  .tech-header-content p {
    font-size: 16px;
  }
  .looking-future {
    margin-left: 0;
    padding: 10px;
  }
  .looking-future p {
    font-size: 16px;
    padding-right: 0;
  }
  .benefit-banner {
    height: 350px;
  }
  .benefit-list li {
    font-size: 16px;
  }
}
</style>
