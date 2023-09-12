// "use client"
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import '../globals.css';
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}


interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  let locale = 'en';
  if (params && params.locale) {
    locale = params.locale;
  }

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    // notFound();
    console.log(error, "error");
  }

  return (
    <html lang={locale}>
      <body>
            <NextIntlClientProvider locale={locale} messages={messages}>
              {children}
            </NextIntlClientProvider>
      </body>
    </html>
  );
}
