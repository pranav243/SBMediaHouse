import Navbar from "./Navbar"
import Services from "./Services"
import Footer from "./Footer"
import QuoteForm from "./QuoteForm"
export default function ServicesPage() {
    return (
       <>
            
            <Navbar/>
            <div className="servicePage-header">
                <h1>Our Services</h1>
                <p>We offer a wide range of services tailored to enhance your brand.</p>
            </div>
            
            <Services/>
            <QuoteForm/>
            <Footer />
       </>
    )
}