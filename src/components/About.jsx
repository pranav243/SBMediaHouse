import Navbar from './Navbar';
import Footer from './Footer';
import AboutIntro from './AboutIntro';
import AboutProjects from './AboutProjects';
export default function About() {
    return (
        <>
          <Navbar />
          <AboutProjects/>
          <AboutIntro/>
          <Footer />
        </>
      )
}