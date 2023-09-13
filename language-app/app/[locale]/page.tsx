import {useTranslations} from 'next-intl'
import TranslatedFile from './components/TranslatedFile'

export default function Home() {

  const t = useTranslations('homepage')
  return (
    <>
    <div>
    <p>{t('welcome-message')}</p>
    <p>{t('topic')}</p>
    </div>
    <div>
      <TranslatedFile translate={t('client-side-component')} />
    </div>
    </>
  )
}
