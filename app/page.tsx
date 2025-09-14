import Banner from "@/Components/Banner";
import BrowseCouse from "@/Components/BrowseCourses/BrowseCouse";
import Collexapage from "@/Components/Collexa/Collexapage";
import Contact from "@/Components/Contact/Contact";
import Faqs from "@/Components/FAQS/Faqs";
import Faculty from "@/Components/Faulty/Faculty";
import Footer from "@/Components/Footer";
import Personalized from "@/Components/Personalized/Personalized";
import Topuniversity from "@/Components/Toponlineuni/Topuniversity";




export default function Home() {
  return (

    <>
       
       

       <Banner />

       <Topuniversity />

       <BrowseCouse />

       <Faculty />

       <Collexapage />

       <Faqs />

       <Personalized />

       <Contact />

       <Footer />
    </>

  );
}
