'use client';

import moment from 'moment';
import {useTranslations} from 'next-intl';
import { useParams } from 'next/navigation';
require("moment/min/locales.min");
 
//  moment.locale('de')

export default function AboutPage() {
  const params = useParams()
console.log(params,"params")

  const t = useTranslations('Index');

//   if (params.locale=='de'){
//     const date = moment().format("dddd LLL")
   
//     return(date);
   
//   }
//   else {
// const dates =  moment().locale('en').format("dddd LLL")
// return(dates)

// }
// {params.locale === 'de'?moment().format("dddd LLL"): moment().locale('en').format("dddd LLL")}

 
  return (
    
      <div>
     <h2>{t('title')}</h2> 
     {params.locale === 'de'?moment().locale('de').format("dddd LLL"): moment().locale('en').format("dddd LLL")}
    
      </div>
    
  );
}
