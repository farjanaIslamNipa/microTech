<template>
  <div>
    <div class="map-bg py-5">
        <div class="container">
            <div class="">
              <h1 class="mb-5 text-center font-weight-bold">Our Service Areas</h1>
              <div class="row">
                <!-- New South Wales -->
                <div class="col-lg-4 col-md-6 col-12">
                  <div class="mb-5 mx-xl-3 mx-0">
                    <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/service-areas/western-australia.webp" class="service-area-img" alt="service area" />
                    <div class="service-area-details">
                      <h4 class="service-area-title">New South Wales</h4>
                      <hr class="line"/>
                      <p>Greater Western Sydney, Inner South, Northern Beaches, St. George, The Hills District, Eastern
                        Suburbs, Inner West, Ryde & Northern Suburbs, Sutherland Shire.</p>
                      <NuxtLink class="see-more" :to="{name: 'service-area-new-south-wales'}">SEE MORE</NuxtLink>
                    </div>
                  </div>
                </div>
                <!-- Western Australia -->
                <div class="col-lg-4 col-md-6 col-12">
                  <div class="mb-5 mx-xl-3 mx-0">
                    <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/service-areas/new-south-wales.webp" class="service-area-img" alt="service area" />
                    <div class="service-area-details">
                      <h4 class="service-area-title">Western Australia</h4>
                      <hr class="line"/>
                      <p>All suburbs in Metropolitan Perth.</p>
                      <NuxtLink class="see-more" :to="{name: 'service-area-slug', params: {slug: 'western-australia'}}">SEE MORE</NuxtLink>
                    </div>
                  </div>
                </div>
                <!-- Victoria -->
                <div class="col-lg-4 col-md-6 col-12">
                  <div class="mb-5 mx-xl-3 mx-0">
                    <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/service-areas/victoria.webp" class="service-area-img" alt="service area" />
                    <div class="service-area-details">
                      <h4 class="service-area-title">Victoria</h4>
                      <hr class="line"/>
                      <p>All suburbs in Metropolitan Melbourne.</p>
                      <NuxtLink class="see-more" :to="{name: 'service-area-slug', params: {slug: 'victoria'}}">SEE MORE</NuxtLink>
                    </div>
                  </div>
                </div>

                <!-- Australian Capital Territory -->
                <div class="col-lg-4 col-md-6 col-12">
                  <div class="mb-5 mx-xl-3 mx-0">
                    <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/service-areas/australian-capital-teritory.webp" class="service-area-img" alt="service area" />
                    <div class="service-area-details">
                      <h4 class="service-area-title">Australian Capital Territory</h4>
                      <hr class="line"/>
                      <p>All suburbs in Australian Capital Territory.</p>
                      <NuxtLink class="see-more" :to="{name: 'service-area-slug', params: {slug: 'australian-capital-territory'}}">SEE MORE</NuxtLink>
                    </div>
                  </div>
                </div>

                <!-- Metropolitan Adelaide -->
                <div class="col-lg-4 col-md-6 col-12">
                  <div class="mb-5 mx-xl-3 mx-0">
                    <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/service-areas/south-australia.webp" class="service-area-img" alt="service area" />
                    <div class="service-area-details">
                      <h4 class="service-area-title">South Australia</h4>
                      <hr class="line"/>
                      <p>All suburbs in Metropolitan Adelaide.</p>
                      <NuxtLink class="see-more" :to="{name: 'service-area-slug', params: {slug: 'adelaide'}}">SEE MORE</NuxtLink>
                    </div>
                  </div>
                </div>
                <!-- Queensland -->
                <div class="col-lg-4 col-md-6 col-12">
                  <div class="mb-5 mx-xl-3 mx-0">
                    <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/service-areas/queensland.webp" class="service-area-img" alt="service area" />
                    <div class="service-area-details">
                      <h4 class="service-area-title">Queensland</h4>
                      <hr class="line"/>
                      <p>All suburbs in Metropolitan Brisbane.</p>
                      <NuxtLink class="see-more" :to="{name: 'service-area-slug', params: {slug: 'queensland'}}">SEE MORE</NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>

  export default {
    name: 'ServiceArea',
    layout: 'website-layout',
    head(){
      return {
        // title: 'Service Area |',
        meta: [
          { hid: 'og:title',property: 'og:title', name:'meta', content: `Service Area | ${process.env.app_name}`},
          { hid: 'twitter:title', property:"twitter:title", name:'meta', content:`Service Area | ${process.env.app_name}`},
          { hid: 'og:url', property: 'og:url', name: 'meta', content: 'https://geekify.au/service-area/'},
          { hid: 'twitter:domain', property: 'twitter:domain', name: 'meta', content: 'https://geekify.au/service-area/'}
        ],
        link: [
          { hid:'canonical', rel: 'canonical', href: 'https://geekify.au/service-area/' }
        ],
      }
    }
  }
</script>

<style scoped>
.map-bg{
  background-image: url('/images/service-areas/bg-map.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}
.service-area-details{
  margin-top: 20px;
  padding-left: 15px;
  border-left: 3px solid var(--brandColor);
}
.service-area-img{
  height: 250px;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
}
.service-area-title {
  font-weight: 500;
  color: var(--secondaryColor);
  text-transform: capitalize;
}

.see-more {
  color: var(--secondaryColor);
}

.see-more {
  font-size: 15px;
  margin-top: 10px;
  font-weight: 600;
  margin-right: 10px;
  transition: all 0.3s ease;
}

.see-more:hover {
  text-decoration: none;
  color: var(--brandColor);
  letter-spacing: 1px;
}

.line {
  margin: 5px 0 10px;
}

</style>
