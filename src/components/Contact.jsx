import Navbar from "./Navbar"
import Footer from "./Footer"
import ContactForm from "./ContactForm"
export default function Contact(){
    return (
        <>
            <Navbar/>
            <div className="contactPage-header">
                <h1>Contact</h1>
                <p>Let's make something incredible together!</p>
                <p>Reach out to us today to discuss your project.</p>
            </div>
            <ContactForm/>
            <Footer/>
        </>
    )
}