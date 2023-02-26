
const ServiceAreas = [
    {
        id: 1,
        name: 'Greater Western Sydney',
        slug: 'greater-western-sydney',
        img: 'images/maps/western-australia.webp',
        suburb: 'Blacktown, Camden, Canterbury-Bankstown, Campbelltown, Fairfield, Hawkesbury, Liverpool, Parramatta, Penrith and Wollondilly'
    },
    {
        id: 2,
        name: 'Inner South',
        slug: 'inner-south',
        // img: '/images/maps/inner-south.jpg',
        suburb: 'Five Dock, Rodd Point, Croydon, Ashfield, Marrickville, Bexley, North, Banksia, Bexley, Enmore, Dulwich Hill, Burwood, Croydon, Park, Burwood, Kingsgrove, Enmore, Roseland, Belmore, Padstow, Chullora, Bankstown'
    },
    {
        id: 3,
        name: 'Northern Beaches',
        slug: 'northern-beaches',
        // img: '/images/maps/northern-beaches.jpg',
        suburb: 'Mosman, Cammeray, Northbridge, Castlecrag, Seaforth, Clontarf, Balgowlah, Balgowlah Heights, North Balgowlah, Manly Vale, Allambie Heights, Brookvale, Fairlight, Queenscliff, Curl Curl, North Curl Curl, Freshwater, Manly, Manly Beach, Beacon Hill, Narraweena, Dee Why'
    },
    {
        id: 4,
        name: 'St. George',
        slug: 'st-george',
        // img: '/images/maps/st-george.jpg',
        suburb: 'Allawah, Arncliffe, Banksia, Bardwell Park, Bardwell Valley, Bexley, Bexley North, Beverley Park, Beverly Hills, Blakehurst, Brighton-Le-Sands, Carlton, Carss Park, Connells Point, Dolls Point, Hurstville, Hurstville Grove, Kingsgrove, Kogarah, Kogarah Bay, Kyeemagh, Kyle Bay, Lugarno, Monterey, Mortdale, Narwee, Oatley, Peakhurst, Peakhurst Heights, Penshurst, Ramsgate, Ramsgate Beach, Riverwood, Rockdale, Sandringham, Sans Souci, South Hurstville, Sydney Airport, Turrella, Wolli Creek'
    },
    {
        id: 5,
        name: 'The Hills District',
        slug: 'the-hill-district',
        // img: '/images/maps/the-hills-district.jpg',
        suburb: 'West of New Line, Old Northern, and Pennant Hills Roads, north of Kissing Point Roads, and James Ruse Drive, east of Sunnyholt, Old Windsor, Windsor Roads, Baulkham Hills, Beaumont Hills, Seven Hills, Castle Hill, Rouse Hill, Box Hill and Winston Hills'
    },
    {
        id: 6,
        name: 'Eastern Suburbs',
        slug: 'eastern-suburbs',
        // img: '/images/maps/eastern-suburbs.jpg',
        suburb: 'Vaucluse, Rose Bay, Darling Point, Dover Heights, Double Bay, Point Piper, Woollahra, Woolloomooloo, Watsons Bay, Potts Point, Rushcutters Bay, Elizabeth Bay, Bellevue Hill, Bondi Junction, Bondi, Bronte, Tamarama, Queens Park, Waverley, Clovelly, Coogee, Hillsdale, Randwick, Maroubra, Matraville, Chifley, Kingsford, Malabar, Little Bay, La Perouse, Centennial Park, Paddington, Surry Hills, Darlinghurst, Moore Park, Kings Cross'
    },
    {
        id: 7,
        name: 'Inner West',
        slug: 'inner-west',
        // img: '/images/maps/inner-west.jpg',
        suburb: 'Abbotsford, Annandale, Ashbury, Ashfield, Balmain, Balmain East, Belfield, Birchgrove, Breakfast Point, Burwood, Burwood Heights, Cabarita, Camperdown, Canada Bay, Chiswick, Concord, Concord West, Croydon, Croydon Park, Drummoyne, Dulwich Hill, Enfield, Enmore, Erskineville, Five Dock, Forest Lodge, Glebe, Haberfield, Homebush, Homebush West, Leichhardt, Lewisham, Liberty Grove, Lilyfield, Marrickville, Mortlake, Newtown, North Strathfield, Petersham, Rhodes, Rodd Point, Rozelle, Russell Lea, St Peters, Stanmore'
    },
    {
        id: 8,
        name: 'Ryde & Northern Suburbs',
        slug: 'ryde-&-northern-suburbs',
        // img: '/images/maps/ryde-and-northern-suburbs.jpg',
        suburb: 'Beecroft, Cheltenham, Carlingford, Cherrybrook, Denistone, Denistone East, Denistone West, Dundas, Dundas Valley, East Ryde, Eastwood, Ermington, Epping, Gladesville, Henley, Huntleys Cove, Huntleys Point, Hunters Hill, Macquarie Park, Marsfield, Meadowbank, Melrose Park, North Epping, North Ryde, Pennant Hills, Putney, Ryde, Tennyson Point, Thornleigh, West Pennant Hills, West Ryde, Westleigh, Woolwich'
    },
    {
        id: 9,
        name: 'Sutherland Shire',
        slug: 'sutherland-shire',
        // img: '/images/maps/sutherland-shire.jpg',
        suburb: 'Alfords Point, Bangor, Barden Ridge, Bonnet Bay, Bundeena, Burraneer, Caringbah, Caringbah South, Como, Cronulla, Dolans Bay, Engadine, Grays Point, Greenhills Beach, Gymea, Gymea Bay, Heathcote, Holsworthy (part), Illawong, Jannali, Kangaroo Point, Kareela, Kirrawee, Kurnell, Lilli Pilli, Loftus, Lucas Heights, Maianbar, Menai, Miranda, Oyster Bay, Port Hacking, Royal National Park, Sandy Point, Sutherland, Sylvania, Sylvania Waters, Taren Point, Waterfall, Woolooware, Woronora, Woronora Dam (part), Woronora Heights, Yarrawarrah and Yowie Bay'
    },
    {
        id: 9,
        name: 'Victoria',
        slug: 'victoria',
        img: 'images/maps/victoria.webp',
        suburb: 'All suburbs in Metropolitan Melbourne'
    },
    {
        id: 10,
        name: 'Australian Capital Territory',
        slug: 'australian-capital-territory',
        img: 'images/maps/act.webp',
        suburb: 'All suburbs in Australian Capital Territory and surrounding suburbs'
    },
    {
        id: 10,
        name: 'Adelaide',
        slug: 'adelaide',
        img: 'images/maps/adelaide.webp',
        suburb: 'All suburbs in Metropolitan Adelaide and surrounding suburbs'
    },
    {
        id: 11,
        name: 'Queensland',
        slug: 'queensland',
        // img: '/images/maps/queensland.jpg',
        suburb: 'All suburbs in Metropolitan Brisbane'
    },
    {
        id: 12,
        name: 'Western Australia',
        slug: 'western-australia',
        // img: '/images/maps/western-australia.jpg',
        suburb: 'All suburbs in Metropolitan Perth'
    },
];

export default ServiceAreas;
