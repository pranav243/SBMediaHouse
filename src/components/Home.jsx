import Navbar from './Navbar';
import MainInfo from './MainInfo';
import Footer from './Footer';
import HomeAbout from './HomeAbout';
import Carousel from './Carousel';
import Services from './Services';
import MHModels from './MHModels';
export default function Home() {
    return (
        <>
          <Navbar />
          <Carousel/>
          <MainInfo />
          <Services />
          <MHModels />
          <HomeAbout />
          <Footer />
        </>
      )
}