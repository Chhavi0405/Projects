"use client"
import {useTranslations} from 'next-intl'
import moment from 'moment'
import 'moment/locale/pt-br';
// import { useSearchParams } from 'next/navigation';
import { useParams } from 'next/navigation'
export default function About ()

 { 
const t = useTranslations('about')
const params = useParams()
console.log(params,"params")
 
// const dayOne =moment().format('dddd'); 
// const timer = moment().calendar();  
// const y = moment.locale(); 
// console.log(moment().locale("fr").format(),"data")
// const params= useSearchParams()
const y = moment().locale("fr").format('dddd MMM')
    return (
    <>
    <h4>{y}</h4>
    <p>{t('title')}</p>
    {/* {/* <h1>{}</h1> */}
    {/* <h2>{data}</h2>  */}
    
    </>
  )


}