import Announcement from "@/components/anouncement/title";
import CallAction from "@/components/callaction/callaction";
import Column from "@/components/column/column";
import Feature from "@/components/feature/feature";
import Footer from "@/components/footer/footer";
import Frame from "@/components/frame/frame";
import HeroSection from "@/components/herosection/herosection";
import LogoCloud from "@/components/logocloud/logocloud";
import MetrixBox from "@/components/metrixbox/metrixbox";
import NavBar from "@/components/navbar/navbar";
import Testimonial from "@/components/testimonial/testimonial";

export default function Home() {
  return (
    <div>
      <Announcement />
      <NavBar />
      <HeroSection />
      <LogoCloud />
      <Feature />
      <Column />
      <Feature />
      <Frame />
      <MetrixBox />
      <Testimonial />
      <CallAction />
      <Footer />
    </div>
  );
}
