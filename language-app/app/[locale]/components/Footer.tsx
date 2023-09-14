import {useTranslations} from 'next-intl'

export default function Footer ()

 { 
const t = useTranslations('footer')
    
    return (
    <>
    <p>{t('description')}</p>
    </>
  )


}