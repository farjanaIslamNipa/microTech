<template>
      <main class="bg-white privacy-policy-wrapper">
        <div class="container">
          <div class="py-md-5 py-3">
            <h2>Privacy policy</h2>
            <p class="brand-color"><u>Is it necessary to collect your information?</u></p>
            <p>When we provide you with a service we need to collect only the information need to provide you your
              required service If you are an applicant seeking employment or appointment as a contractor, so that we can
              assess your suitability.</p>
            <p class="brand-color"><u>Personal Information which can be collected</u></p>
            <ul>
              <li>Customer name, contact details and physical address.</li>
              <li>Bank account and credit card details</li>
              <li>Employment history</li>
              <li>Information provided through surveys</li>
            </ul>
            <p class="brand-color"><u>How does the collection occur?</u></p>
            <p>Direct collection methods:</p>
            <ul>
              <li>Social media</li>
              <li>Email lists</li>
              <li>Electronic forms</li>
              <li>Website and cookies</li>
            </ul>
            <p>Indirect collection methods:</p>
            <ul>
              <li>Sources available to public</li>
              <li>Any representative of yours</li>
            </ul>
            <p class="brand-color"><u>Our method of storing your information</u></p>
            <p>Your information is held in databases in ICT systems.</p>
            <p class="brand-color"><u>What happens if you don’t share your information?</u></p>
            <p>- We will not be able to provide you our services as such information is required</p>
            <p class="brand-color"><u>Disclosure</u></p>
            <p>We only provide your personal information to the service providers we have contact with. Your privacy is
              valuable to us</p>
            <p class="brand-color"><u>Perks of your information</u></p>
            <ul>
              <li>Updated information is quickly added to existing records</li>
              <li>Information is verified for accuracy</li>
              <li>Customer are asked to update us with changes in their personal information as soon as possible</li>
            </ul>
            <p class="brand-color"><em> </em><u>Security</u></p>
            <p>Measures taken by us to keep data secure:</p>
            <ul>
              <li>Access control</li>
              <li>Electronic safety. E.g. Firewalls</li>
              <li>Maintaining an audit trail when any information is updated</li>
              <li>Keeping information as confidential as required</li>
            </ul>
            <p class="brand-color"><u>Marketing</u></p>
            <ul>
              <li>You may be sent direct marketing information such as promotions. This may be come by sending you an
                e-mail, SMS or via mobile or telephone
              </li>
            </ul>
            <p>Easy opt-out option to stop receiving such information.</p>
          </div>
        </div>
      </main>
</template>

<script>
  export default {
    name: 'PrivacyPolicy',
    layout: 'website-layout',
    head(){
      return {
        // title: 'Privacy Policy |',
        meta: [
          { hid: 'og:title',property: 'og:title', name:'meta', content: `Privacy Policy | ${process.env.app_name}`},
          { hid: 'twitter:title', property:"twitter:title", name:'meta', content:`Privacy Policy | ${process.env.app_name}`},
          { hid: 'og:url', property: 'og:url', name:'meta', content: 'https://geekify.au/information/privacy-policy/'},
          { hid: 'twitter:domain', property: 'twitter:domain', name:'meta', content: 'https://geekify.au/information/privacy-policy/'}
        ],
        link: [
          { hid:'canonical', rel: 'canonical', href: 'https://geekify.au/information/privacy-policy/' }
        ],
      }
    }
  }
</script>

<style scoped>
</style>
