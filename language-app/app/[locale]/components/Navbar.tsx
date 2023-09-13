import Link from 'next-intl/link'
import {useTranslations} from 'next-intl'


export default function Navbar (){

    const t = useTranslations('navbar')

    return(
        <>
        <header>
            <nav>
                 <div>
                        <Link href='/' locale='en'>Eng</Link> &nbsp;&nbsp;
                        <Link href='/' locale='fr'>french</Link>&nbsp;&nbsp;
                        <Link href='/' locale='sv'>Swedish</Link>
                 </div>
{/* //Components */}
                 <div>

                    <div>
                        <Link href={'/'}>{t('home')}</Link>
                    </div>

                    <div>
                        <Link href={'/about'}>{t('about')}</Link>
                    </div>

                    <div>
                        <Link href={'/contact'}>{t('contact')}</Link>
                    </div>

                 </div>
            </nav>
        </header>
        </>
    )
}