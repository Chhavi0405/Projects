'use client';

import {useTranslations} from 'next-intl';


export default function AboutPage() {
  const t = useTranslations('Index');

  return (
    
      <div>
     <h2>{t('title')}</h2>   
      </div>
    
  );
}
