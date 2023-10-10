// @ts-ignore
import "@/public/scss/styles.scss";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import Head from "next/head";
import { Metadata } from "next";

export const generateMetadata = ({ params }: { params: { locale: 'ru' | 'kk' | 'en' } }): Metadata => {
   const titleRu = 'Пробное онлайн-тестирование для поступления в НИШ и РФМШ';
   const titleEn = 'NIS and RFMS online trial admission tests';
   const titleKk = 'НЗМ және РФММ-ге түсу үшін сынама онлайн-тестілеу';
 
   let title: string;
 
   if (params.locale === 'ru') {
     title = titleRu;
   } else if (params.locale === 'en') {
     title = titleEn;
   } else if (params.locale === 'kk') {
     title = titleKk;
   } else {
     title = 'Synaq';
   }
 
   return {
     title,
   };
 };

export default async function LocaleLayout({
   children,
   params: { locale },
}: any) {
   let messages;
   try {
      messages = (await import(`../../messages/${locale}.json`)).default;
   } catch (error) {
      notFound();
   }

   

   return (

      <html lang={locale}>
         <Head>            
            {/* <title>{locale === 'ru' ? titleRu : locale === 'en' ? titleEn : titleKk}</title> */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
               rel="preconnect"
               href="https://fonts.gstatic.com"
               crossOrigin=""
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
               rel="stylesheet"
            />
         </Head>
         <body>
            <NextIntlClientProvider locale={locale} messages={messages}>
               {children}
            </NextIntlClientProvider>
         </body>
      </html>
   );
}
