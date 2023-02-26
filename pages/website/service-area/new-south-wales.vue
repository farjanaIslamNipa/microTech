<template>
  <div>
    <div class="map-bg py-5">
      <div class="container">
        <h3 class="service-area-header font-weight-bold pb-4">Service Areas in New South Wales</h3>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-12">
            <div class="mb-5 mx-xl-3 mx-0">
              <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/service-areas/greater-western-sydney.webp" class="service-area-img" alt="service area" />
              <div class="service-area-details">
                <h4 class="service-area-title">Greater Western Sydney</h4>
                <hr class="line"/>
                <p>Blacktown, Camden, Canterbury-Bankstown, Campbelltown, Fairfield, Hawkesbury, Liverpool,
                Parramatta, Penrith and Wollondilly.</p>
                <NuxtLink class="see-more" :to="{name: 'service-area-slug', params: {slug: 'greater-western-sydney'}}">SEE MORE</NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="mb-5 mx-xl-3 mx-0">
              <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/service-areas/inner-south.webp" class="service-area-img" alt="service area" />
              <div class="service-area-details">
                <h4 class="service-area-title">Inner South</h4>
                <hr class="line"/>
                <p>Five Dock, Rodd Point, Croydon, Ashfield, Marrickville, Bexley, North, Banksia, Bexley,
                Enmore, Dulwich Hill, Burwood, Croydon, Park, Burwood, Kingsgrove, Enmore, Roseland,
                Belmore, Padstow, Chullora, Bankstown.</p>
                <NuxtLink class="see-more" :to="{name: 'service-area-slug', params: {slug: 'inner-south'}}">SEE MORE</NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="mb-5 mx-xl-3 mx-0">
              <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/service-areas/northern-beaches.webp" class="service-area-img" alt="service area" />
              <div class="service-area-details">
                <h4 class="service-area-title">Northern Beaches</h4>
                <hr class="line"/>
                <p>Mosman, Cammeray, Northbridge, Castlecrag, Seaforth, Clontarf, Balgowlah, Balgowlah Heights,
                North Balgowlah, Manly Vale, Allambie Heights, Brookvale, Fairlight, Queenscliff, Curl Curl,
                North Curl Curl, Freshwater, Manly, Manly Beach, Beacon Hill, Narraweena, Dee Why.</p>
                <NuxtLink class="see-more" :to="{name: 'service-area-slug', params: {slug: 'northern-beaches'}}">SEE MORE</NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="mb-5 mx-xl-3 mx-0">
              <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/service-areas/st-george.webp" class="service-area-img" alt="service area" />
              <div class="service-area-details">
                <h4 class="service-area-title">St. George</h4>
                <hr class="line"/>
                <p>Allawah, Arncliffe, Banksia, Bardwell Park, Bardwell Valley, Bexley, Bexley North, Beverley
                Park, Beverly Hills, Blakehurst, Brighton-Le-Sands, Carlton, Carss Park, Connells Point,
                Dolls Point, Hurstville, Hurstville Grove, Kingsgrove, Kogarah, Kogarah Bay, Kyeemagh, Kyle
                Bay, Lugarno, Monterey, Mortdale, Narwee, Oatley, Peakhurst, Peakhurst Heights, Penshurst,
                Ramsgate, Ramsgate Beach, Riverwood, Rockdale, Sandringham, Sans Souci, South Hurstville,
                Sydney Airport, Turrella, Wolli Creek.</p>
                <NuxtLink class="see-more" :to="{name: 'service-area-slug', params: {slug: 'st-george'}}">SEE MORE</NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="mb-5 mx-xl-3 mx-0">
              <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/service-areas/the-hill-district.webp" class="service-area-img" alt="service area" />
              <div class="service-area-details">
                <h4 class="service-area-title">The Hills District</h4>
                <hr class="line"/>
                <p>West of New Line, Old Northern, and Pennant Hills Roads, north of Kissing Point Roads, and
                James Ruse Drive, east of Sunnyholt, Old Windsor, Windsor Roads, Baulkham Hills, Beaumont
                Hills, Seven Hills, Castle Hill, Rouse Hill, Box Hill and Winston Hills.</p>
                <NuxtLink class="see-more" :to="{name: 'service-area-slug', params: {slug: 'the-hill-district'}}">SEE MORE</NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="mb-5 mx-xl-3 mx-0">
              <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/service-areas/eastern-suburbs.webp" class="service-area-img" alt="service area" />
              <div class="service-area-details">
                <h4 class="service-area-title">Eastern Suburbs</h4>
                <hr class="line"/>
                <p>Vaucluse, Rose Bay, Darling Point, Dover Heights, Double Bay, Point Piper, Woollahra,
                Woolloomooloo, Watsons Bay, Potts Point, Rushcutters Bay, Elizabeth Bay, Bellevue Hill,
                Bondi Junction, Bondi, Bronte, Tamarama, Queens Park, Waverley, Clovelly, Coogee, Hillsdale,
                Randwick, Maroubra, Matraville, Chifley, Kingsford, Malabar, Little Bay, La Perouse,
                Centennial Park, Paddington, Surry Hills, Darlinghurst, Moore Park, Kings Cross.</p>
                <NuxtLink class="see-more" :to="{name: 'service-area-slug', params: {slug: 'eastern-suburbs'}}">SEE MORE</NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="mb-5 mx-xl-3 mx-0">
              <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/service-areas/inner-west.webp" class="service-area-img" alt="service area" />
              <div class="service-area-details">
                <h4 class="service-area-title">Inner West</h4>
                <hr class="line"/>
                <p>Abbotsford, Annandale, Ashbury, Ashfield, Balmain, Balmain East, Belfield, Birchgrove,
                Breakfast Point, Burwood, Burwood Heights, Cabarita, Camperdown, Canada Bay, Chiswick,
                Concord, Concord West, Croydon, Croydon Park, Drummoyne, Dulwich Hill, Enfield, Enmore,
                Erskineville, Five Dock, Forest Lodge, Glebe, Haberfield, Homebush, Homebush West,
                Leichhardt, Lewisham, Liberty Grove, Lilyfield, Marrickville, Mortlake, Newtown, North
                Strathfield, Petersham, Rhodes, Rodd Point, Rozelle, Russell Lea, St Peters, Stanmore.</p>
                <NuxtLink class="see-more" :to="{name: 'service-area-slug', params: {slug: 'inner-west'}}">SEE MORE</NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="mb-5 mx-xl-3 mx-0">
              <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/service-areas/ryde-northern-suburbs.webp" class="service-area-img" alt="service area" />
              <div class="service-area-details">
                <h4 class="service-area-title">Ryde & Northern Suburbs</h4>
                <hr class="line"/>
                <p>Beecroft, Cheltenham, Carlingford, Cherrybrook, Denistone, Denistone East, Denistone West,
                Dundas, Dundas Valley, East Ryde, Eastwood, Ermington, Epping, Gladesville, Henley, Huntleys
                Cove, Huntleys Point, Hunters Hill, Macquarie Park, Marsfield, Meadowbank, Melrose Park,
                North Epping, North Ryde, Pennant Hills, Putney, Ryde, Tennyson Point, Thornleigh, West
                Pennant Hills, West Ryde, Westleigh, Woolwich.</p>
                <NuxtLink class="see-more" :to="{name: 'service-area-slug', params: {slug: 'ryde-&-northern-suburbs'}}">SEE MORE</NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="mb-5 mx-xl-3 mx-0">
              <nuxt-img preload format="webp" quality="80" loading="lazy" src="/images/service-areas/sutherland-shire.webp" class="service-area-img" alt="service area" />
              <div class="service-area-details">
                <h4 class="service-area-title">Sutherland Shire</h4>
                <hr class="line"/>
                <p>Alfords Point, Bangor, Barden Ridge, Bonnet Bay, Bundeena, Burraneer, Caringbah, Caringbah
                South, Como, Cronulla, Dolans Bay, Engadine, Grays Point, Greenhills Beach, Gymea, Gymea
                Bay, Heathcote, Holsworthy (part), Illawong, Jannali, Kangaroo Point, Kareela, Kirrawee,
                Kurnell, Lilli Pilli, Loftus, Lucas Heights, Maianbar, Menai, Miranda, Oyster Bay, Port
                Hacking, Royal National Park, Sandy Point, Sutherland, Sylvania, Sylvania Waters, Taren
                Point, Waterfall, Woolooware, Woronora, Woronora Dam (part), Woronora Heights, Yarrawarrah
                and Yowie Bay.</p>
                <NuxtLink class="see-more" :to="{name: 'service-area-slug', params: {slug: 'sutherland-shire'}}">SEE MORE</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'NewSouthWales',
    layout: 'website-layout',
    head(){
      return {
        // title: 'New South Wales |',
        meta: [
          { hid: 'og:title',property: 'og:title', name:'meta', content: `New South Wales | ${process.env.app_name}`},
          { hid: 'twitter:title', property:"twitter:title", name:'meta', content:`New South Wales | ${process.env.app_name}`},
          { hid: 'og:url', property: 'og:url', name: 'meta', content: 'https://geekify.au/service-area/'},
          { hid: 'twitter:domain', property: 'twitter:domain', name: 'meta', content: 'https://geekify.au/service-area/'}
        ],
        link: [
          { hid:'canonical', rel: 'canonical', href: 'https://geekify.au/service-area/' }
        ],
      }
    },
    computed: {
        ...mapGetters({
            settingDefaultWebsiteUrl: 'settings/settingDefaultWebsiteUrl'
        }),
    },
    methods: {
        ...mapActions({
            getSettings: 'settings/getSettings',
        })
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

}
.service-area-img{
  height: 250px;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
}
.service-area-title {
  padding-left: 8px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-left: 2px solid var(--brandColor);
  font-weight: 500;
  color: var(--secondaryColor);
  text-transform: capitalize;
}
.see-more {
  color: var(--brandColor);
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
