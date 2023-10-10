import { useTranslations } from "next-intl";
import LandingHeader from "@/components/Header/LandingHeader";
import BodyMiddle from "@/components/Body/BodyMiddle";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";

export default function Home() {
   const t = useTranslations("Index");

   return (
      <>
       <Head>
        <title>
          iPhone 12 XS Max For Sale in Colorado - Big Discounts | Apple
        </title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head>
         <LandingHeader />
         <BodyMiddle />
         <Footer />
      </>
   );
}
