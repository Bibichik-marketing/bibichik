import {absoluteUrl} from './site-url';

const sameAs=[
  'https://www.instagram.com/bibichikmy/',
  'https://www.facebook.com/BibiChikSdnBhd/'
];
const openDays=['Monday','Wednesday','Thursday','Friday','Saturday','Sunday'];

export function restaurantStructuredData(){
  return {'@context':'https://schema.org','@graph':[
    {
      '@type':'Restaurant','@id':absoluteUrl('/en/visit-us/#sunway-163'),
      name:'BiBiChik Sunway 163 Mall',url:absoluteUrl('/en/visit-us/'),
      telephone:'+60 11-6214 7497',
      address:{'@type':'PostalAddress',streetAddress:'LG1-11 & 12, Sunway 163 Mall, 8, Jalan Kiara, Mont Kiara',postalCode:'50480',addressLocality:'Kuala Lumpur',addressRegion:'Wilayah Persekutuan Kuala Lumpur',addressCountry:'MY'},
      openingHoursSpecification:[{'@type':'OpeningHoursSpecification',dayOfWeek:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],opens:'10:00',closes:'22:30'}],
      servesCuisine:['Malaysian','Nyonya','Peranakan'],menu:absoluteUrl('/en/menu/'),sameAs,image:absoluteUrl('/assets/location-one.webp')
    },
    {
      '@type':'Restaurant','@id':absoluteUrl('/en/visit-us/#ss2'),
      name:'BiBiChik SS2',url:absoluteUrl('/en/visit-us/'),
      telephone:'+60 11-7023 3354',
      address:{'@type':'PostalAddress',streetAddress:'No. 17, Jalan SS 2/30, SS 2',postalCode:'47300',addressLocality:'Petaling Jaya',addressRegion:'Selangor',addressCountry:'MY'},
      openingHoursSpecification:[
        {'@type':'OpeningHoursSpecification',dayOfWeek:openDays,opens:'11:00',closes:'15:00'},
        {'@type':'OpeningHoursSpecification',dayOfWeek:openDays,opens:'17:30',closes:'22:30'}
      ],
      servesCuisine:['Malaysian','Nyonya','Peranakan'],menu:absoluteUrl('/en/menu/'),sameAs,image:absoluteUrl('/assets/location-two.webp')
    }
  ]};
}
