import {useTranslations} from 'next-intl'

export default function Contact ()

 { 
const t = useTranslations('contact')
    
    return (
    <>
    <p>{t('title')}</p>
    </>
  )


}