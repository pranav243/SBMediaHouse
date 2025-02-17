import { SocialIcon } from 'react-social-icons'

export default function AboutIntro() {
    return (
        <div className="about-intro-container">
            <div className="about-intro-card">
                <div className="about-intro-card-content">
                    <h2>About</h2>
                    <p>
                    At SB Media and Prodcution, we believe in the power of storytelling. Whether through captivating visuals, immersive AR/VR experiences, or impactful marketing campaigns, our goal is to help businesses connect with their audience. With a team of passionate creators and strategists, we cater to all your digital and production needs under one roof. Your success is our priority.  
                    </p>
                    <button>About Me</button>
                    <div className="about-intro-card-content-social-icons">
                        <SocialIcon style={{ width: 40, height: 40 }} bgColor='black' url="https://www.facebook.com/sakshibhutada/" />
                        <SocialIcon style={{ width: 40, height: 40 }} bgColor='black' url="https://www.instagram.com/sb_mediahouse/" />
                        <SocialIcon style={{ width: 40, height: 40 }} bgColor='black' url="https://www.linkedin.com/in/sakshibhutada/" />
                        <SocialIcon style={{ width: 40, height: 40 }} bgColor='black' url="https://x.com/sakshibhutada" />
                    </div>

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