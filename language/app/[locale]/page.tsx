'use client';
 
import i18next from 'i18next'
import {useTranslations} from 'next-intl';
import { useState } from 'react';


export default function Index() {
  const [language,setLanguage]= useState('en')
  const t = useTranslations('Title');
  const t1 = useTranslations('Index');
  const handleLanguage =(e:any)=>{
   
    const lang = e.target.value;
    console.log(lang);
    setLanguage(lang);
    i18next.changeLanguage(lang);

    
    
   
  }
  return (
    <>
      <label>choose language</label>
      <br />
 
      <select onChange={handleLanguage} value={language}>
      <option value="de">DANISH</option>
      <option value="en">ENGLISH</option>
    </select>

    
      <h1>{t("word")}</h1>
      <h2>{t1("title")}</h2>
    </>
  );
  
}


