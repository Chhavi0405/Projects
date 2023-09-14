import {useTranslations} from 'next-intl'

import {getTranslator} from 'next-intl/server'


// export async function generateMetadata() {
//      const t = await useTranslations('contact')
    
//     return {
//         title: ('tab-title-contact')
//     }
//   }

export default function Contact ()

 { 
const t = useTranslations('contact')
    
    return (
    <>
    <p>{t('title')}</p>
    </>
  )


}