<template>
  <div>
    <div class="membership-header pt-sm-4 pt-0">
      <div class="container text-center pt-5">
        <h6 class="brand-color text-capitalize mb-0">Introducing our geekify membership</h6>
        <h1 class="text-capitalize">Awesome Membership Plan</h1>
        <p class="pb-sm-5 pb-3">With Geekify, your onsite computer tech specialist, we are offering you an exclusive membership plan to cater to all your tech needs.</p>
        <div class="mt-md-5 mt-sm-3 mt-0">
          <div class="d-flex">
            <label for="home-membership" class="checkbox-container w-100">
                <input v-model="membershipFor" value="home" id="home-membership" class="membership-checkbox-input" type="radio" checked name="membership-checkbox" />
                <div class="membership-checkbox-content home-membership-content">
                    <span class="text-500">Geekify membership home</span>
                </div>
            </label>

            <label for="business-membership" class="checkbox-container w-100">
                <input v-model="membershipFor" value="business" id="business-membership" class="membership-checkbox-input" type="radio" name="membership-checkbox" />
                <div class="membership-checkbox-content business-membership-content">
                    <span class="text-500">Geekify Membership Business</span>
                </div>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div v-if="membershipFor === 'home'" class="pt-5 pb-5">
        <h4>$22/ per month (billed annually)</h4>
        <h5 class="pt-lg-5 pt-3 text-underline">All membership plans include</h5>
        <div class="row">
          <div class="col-xl-4 col-lg-3 col-md-5">
            <ol class="p-3">
              <li class="text-capitalize py-1">Computer set-up and install</li>
              <li class="text-capitalize py-1">Computer Troubleshooting</li>
              <li class="text-capitalize py-1">Virus and Spyware Removal</li>
              <li class="text-capitalize py-1">Anti-Virus Installation</li>
              <li class="text-capitalize py-1">Smartphone Device Setup</li>
              <li class="text-capitalize py-1">Home Network WIFI Setup</li>
              <li class="text-capitalize py-1">Email Account Setup</li>
              <li class="text-capitalize py-1">And all other services listed at the website</li>
            </ol>
          </div>
          <div class="col-xl-8 col-lg-9 col-md-7">
            <div class="row pt-xl-0 pt-md-4 pt-0">
              <div class="col-lg-4 col-12 mb-lg-0 mb-4">
                <div class="price-card py-4 px-xl-4 px-lg-2 px-4 h-100">
                  <h6 class="text-00 text-capitalize mb-1">12 MONTH</h6>
                  <div class="d-flex align-items-end justify-content-between mb-3 mt-2">
                    <h3 class="mb-0 brand-color">$264</h3>
                    <!-- <h5 class="mb-0 text-danger">save 5%</h5> -->
                  </div>
                  <h6 class="text-underline">Monthly inclusions -</h6>
                  <ul class="inclusion-list">
                    <li class="py-1 text-capitalize">GUARANTEED FLAT FEE OF $99/PH</li>
                    <li class="py-1 text-capitalize"> 2 X 10-MINUTE PHONE CONSULTATIONS</li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-12 mb-lg-0 mb-4">
                <div class="price-card py-4 px-xl-4 px-lg-2 px-4 h-100">
                  <h6 class="text-00 text-capitalize mb-1">24 MONTH</h6>
                  <div class="d-flex align-items-end justify-content-between mb-3 mt-2">
                    <h3 class="mb-0 brand-color">$502</h3>
                    <h5 class="mb-0 text-danger">save 5%</h5>
                  </div>
                  <h6 class="text-underline">Monthly inclusions -</h6>
                  <ul class="inclusion-list">
                    <li class="py-1 text-capitalize">GUARANTEED FLAT FEE OF $99/PH</li>
                    <li class="py-1 text-capitalize"> 2 X 10-MINUTE PHONE CONSULTATIONS</li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-12">
                <div class="price-card py-4 px-xl-4 px-lg-2 px-4 h-100">
                  <h6 class="text-00 text-capitalize mb-1">36 MONTH</h6>
                  <div class="d-flex align-items-end justify-content-between mb-3 mt-2">
                    <h3 class="mb-0 brand-color">$713</h3>
                    <h5 class="mb-0 text-danger">save 10%</h5>
                  </div>
                  <h6 class="text-underline">Monthly inclusions -</h6>
                  <ul class="inclusion-list">
                    <li class="py-1 text-capitalize">GUARANTEED FLAT FEE OF $99/PH</li>
                    <li class="py-1 text-capitalize"> 2 X 10-MINUTE PHONE CONSULTATIONS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="membershipFor === 'business'" class="pt-5 pb-5">
        <h4>$99 / PER MONTH (DIRECT DEBIT)</h4>
        <h5 class="pt-lg-5 pt-3 text-underline">All membership plans include</h5>
        <div class="row">
          <div class="col-xl-4 col-lg-3 col-md-5">
            <ol class="p-3">
              <li class="text-capitalize py-1">Computer set-up and install</li>
              <li class="text-capitalize py-1">Computer Troubleshooting</li>
              <li class="text-capitalize py-1">Virus and Spyware Removal</li>
              <li class="text-capitalize py-1">Anti-Virus Installation</li>
              <li class="text-capitalize py-1">Smartphone Device Setup</li>
              <li class="text-capitalize py-1">Home Network WIFI Setup</li>
              <li class="text-capitalize py-1">Email Account Setup</li>
              <li class="text-capitalize py-1">And all other services listed at the website</li>
            </ol>
          </div>
          <div class="col-xl-8 col-lg-9 col-md-7">
            <div class="row pt-xl-0 pt-md-4 pt-0">
              <div class="col-lg-4 col-12 mb-lg-0 mb-4">
                <div class="price-card py-4 px-xl-4 px-lg-2 px-4 h-100">
                  <h6 class="text-00 text-capitalize mb-1">12 MONTH</h6>
                  <div class="d-flex align-items-end justify-content-between mb-3 mt-2">
                    <h3 class="mb-0 brand-color">$1070</h3>
                    <h5 class="mb-0 text-danger">save 10%</h5>
                  </div>
                  <h6 class="text-underline">Monthly inclusions -</h6>
                  <ul class="inclusion-list">
                    <li class="py-1 text-capitalize">GUARANTEED FLAT FEE OF $144/PH</li>
                    <li class="py-1 text-capitalize">2 X 30-MINUTE REMOTE SESSIONS</li>
                    <li class="py-1 text-capitalize">5 X 10-MINUTE PHONE CONSULTATIONS</li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-12 mb-lg-0 mb-4">
                <div class="price-card py-4 px-xl-4 px-lg-2 px-4 h-100">
                  <h6 class="text-00 text-capitalize mb-1">24 MONTH</h6>
                  <div class="d-flex align-items-end justify-content-between mb-3 mt-2">
                    <h3 class="mb-0 brand-color">$2020</h3>
                    <h5 class="mb-0 text-danger">save 15%</h5>
                  </div>
                  <h6 class="text-underline">Monthly inclusions -</h6>
                  <ul class="inclusion-list">
                    <li class="py-1 text-capitalize">GUARANTEED FLAT FEE OF $144/PH</li>
                    <li class="py-1 text-capitalize">2 X 30-MINUTE REMOTE SESSIONS</li>
                    <li class="py-1 text-capitalize">5 X 10-MINUTE PHONE CONSULTATIONS</li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-12">
                <div class="price-card py-4 px-xl-4 px-lg-2 px-4 h-100">
                  <h6 class="text-00 text-capitalize mb-1">36 MONTH</h6>
                  <div class="d-flex align-items-end justify-content-between mb-3 mt-2">
                    <h3 class="mb-0 brand-color">$2852</h3>
                    <h5 class="mb-0 text-danger">save 20%</h5>
                  </div>
                  <h6 class="text-underline">Monthly inclusions -</h6>
                  <ul class="inclusion-list">
                    <li class="py-1 text-capitalize">GUARANTEED FLAT FEE OF $144/PH</li>
                    <li class="py-1 text-capitalize">2 X 30-MINUTE REMOTE SESSIONS</li>
                    <li class="py-1 text-capitalize">5 X 10-MINUTE PHONE CONSULTATIONS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Terms and conditions -->
      <div class="pb-5">
        <h6><span class="brand-color">*</span>Terms & Conditions Applied</h6>
        <p class="mb-1 text-300">1. It will take us 24-48 hours to book a Geek for you.</p>
        <p class="text-300">2. Same-day booking will attract an additional 20%, subject to tech availability. 3. Monthly inclusion will reset on the first day of the month.</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'BecomeMember',
    layout:'website-layout',
    head(){
      return{
        // title: 'Become A Member |',
        meta: [
          { hid: 'og:title',property: 'og:title', name:'meta', content: `Become A Member | ${process.env.app_name}`},
          { hid: 'twitter:title', property:"twitter:title", name:'meta', content:`Become A Member | ${process.env.app_name}`},
          { hid: 'og:url', property: 'og:url', name:'meta', content: 'https://geekify.au/become-a-member/'},
          { hid: 'twitter:domain', property: 'twitter:domain', name:'meta', content: 'https://geekify.au/become-a-member/'}
        ],
        link: [
          { hid:'canonical', rel: 'canonical', href: 'https://geekify.au/become-a-member/' }
        ],
      }
    },
    data() {
      return {
        membershipFor: 'home'
      }
    },
  }
</script>

<style scoped>
.membership-header{
  background-color: #F2F5F6;
}
.home-membership-content {
    border-radius: 10px 0 0 0;
    background-color: var(--lightBrand);
    color: var(--brandColor);
}

.business-membership-content {
    border-radius: 0 10px 0 0;
    background-color: var(--lightBrand);
    color: var(--brandColor);
}

.checkbox-container {
    position: relative;
    height: 50px;
    box-sizing: border-box;
    cursor: pointer;
}

.checkbox-container .membership-checkbox-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 25px;
    transition: .3s ease;
    font-size: 18px;
}

.checkbox-container .membership-checkbox-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 140px;
    height: 100px;
    opacity: 0;
    cursor: pointer;
}

.membership-checkbox-input[type=radio]:checked~.membership-checkbox-content {
    background-color: white;
    color: var(--brandColor);
}
.price-card{
  background-color: rgba(254, 241, 230, 0.4);
  border-radius: 10px;
}
.inclusion-list {
  padding-left: 15px;
}
.inclusion-list li{
  list-style: disc;
}
@media(max-width:767px){
  .checkbox-container{
    height: 70px;
  }
}
@media(max-width:424px){
  .checkbox-container .membership-checkbox-content{
    font-size: 15px;
  }
}
</style>
