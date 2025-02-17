import {Link} from "react-router-dom";


export default function HomeAbout() {
    return (
        <div className="about-intro-container" style={{backgroundColor: "white"}}>
            <div className="about-intro-card" style={{backgroundColor: "rgb(216, 227, 232)" }}>
                <div className="about-intro-card-content">
                    <h2>About</h2>
                    <p>
                    At SB Media and Prodcution, we believe in the power of storytelling. Whether through captivating visuals, immersive AR/VR experiences, or impactful marketing campaigns, our goal is to help businesses connect with their audience. With a team of passionate creators and strategists, we cater to all your digital and production needs under one roof. Your success is our priority.  
                    </p>
                    <Link to="/about"><button>Know More</button></Link>

                </div>
                <div className="about-intro-card-photo">
                    <img
                    src="/sakshibhutada.png"
                    alt="Example"
                    />
                </div>

            </div>
        </div>
    )
}