<template>
  <div>
    <header class="about-us-header-banner">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6">
            <div class="row justify-content-lg-end justify-content-center align-items-center h-100">
              <div class="col-xxl-8 col-xl-9 col-lg-11 col-md-9">
                <div class="pe-5 py-4">
                  <h1 class="text-blue">About us</h1>
                  <p class="text-18">Geekify is the fastest growing Micro tech service provider who offers 360 degrees of IT solutions. </p>
                  <p class="text-18 mb-0">Learn more about the origins of Australia’s favourite Geeks.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 px-0">
            <div class="about-us-header-img"><nuxt-img preload format="webp" quality="80" loading="lazy" class="img-fluid" src="/images/about-us/about-us-header-img.webp" alt="About us" /></div>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div class="container">
        <div class="pt-lg-5 pt-4">
          <h2 class="pb-lg-4 pb-3">The Geekify Story</h2>
          <p>Geekify was established in the early 2017 by the endeavor of few select talented individuals who aimed to rise as one of the top computer repair company in Australia. Initially starting out as just a repair company, Geekify has branched out to provide various services of different fields which has started to make the company truly dynamic.</p>
          <p class="py-3">With a mentality of taking every obstacle in our client’s tech life as a challenge, we dispatch our geeks with one mission in mind, provide flexibility and over the top services in the least amount of time possible for the optimal convenience of our customers</p>
          <p>We try to get each and every customer demands right and through a well-established communication system, for now this is done through our <a class="brand-color text-500" href="tel:1300 894 946">1300 894 946</a> which you can look up over our contacts page, but to outdo ourselves, we soon plan on implementing a call center which will be operated by our geeks 24/7 for optimally reaching out to all of our clients who seek our services.</p>
        </div>
        <div class="pt-lg-5 pt-4">
          <h2 class="pb-4">What we’re about</h2>
          <p>Our <b>vision</b> is to rise as one of the most satisfactory companies in Australia in terms of services and win the hearts of our customers by providing more than their expectation.</p>
          <p class="py-3">Our <b>mission</b> is to To provide exceptional services by pursuing business through creativity and innovation and build long term relationships with our trusted customers based on honesty.</p>
          <p>Our core <b>values</b> have always been honesty and integrity accompanied by experience and individuality.​</p>
        </div>
        <div class="pt-lg-5 pt-4">
          <h2 class="pb-3">How we approved by our customer</h2>
          <h5>We assure quality services for a number of key reasons as approved by our customers. To mention some of them:</h5>
          <ul class="mt-4 how-we-approved-list">
            <li>Our geeks are honest and hardworking.</li>
            <li>Our geeks are trained to suit customers every requirement and are all equipped with great communication skills.</li>
            <li>Customer relations have always been a top priority of Geekify and keeping that in mind, we have established a team specially for customer care services.</li>
            <li>We strive to give you what is best for you while also maintaining an affordable range of services.</li>
            <li>You are important to us; thus, we are always available for maintenance related to any of our previous services provided to you, remember our Geeks are just one call away!</li>
          </ul>
        </div>
        <div class="py-lg-5 py-4">
          <h2 class="pb-4">Always on the job</h2>
          <p>No matter the type of tech trouble you have, whether it be repair, installation, troubleshooting, security or even consultation and regular maintenance work, our geeks leave no corner unattended – and no customer unhappy!</p>
          <p class="pt-3">With that in mind, if you would like solutions to your tech troubles lighting fast, then you have come to the right decision!</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: "AboutUs",
    layout: 'website-layout',
    head() {
    return {
      // title: 'About Us |',
      meta: [
        { hid: 'og:title',property: 'og:title', name:'meta', content: `About Us | ${process.env.app_name}`},
        { hid: 'twitter:title', property:"twitter:title", name:'meta', content:`About Us | ${process.env.app_name}`},
        { hid: 'og:url', property: 'og:url', name:'meta', content: 'https://geekify.au/about-us/'},
        { hid: 'twitter:domain', property: 'twitter:domain', name:'meta', content: 'https://geekify.au/about-us/'}
      ],
      link: [
        { hid:'canonical', rel: 'canonical', href: 'https://geekify.au/about-us/' }
      ],
    }
  },
  }
</script>

<style scoped>
.about-us-header-banner{
  background-image: url('/images/about-us/about-us-header-bg.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.about-us-header-img{

}
.how-we-approved-list li{
  list-style: disc;
}
</style>
