import { SocialIcon } from 'react-social-icons'

export default function MHModels() {
    function goToWebsite() {
        window.open('https://www.mhmodels.in/', '_blank');
    }
    return (
        <div className="mh-container">
            <div className="mh-card">
            <div className="mh-card-photo">
                    <img
                    src="/mh.png"
                    alt="Example"
                    />
                </div>
                <div className="mh-card-content">
                    <h2>MH MODELS</h2>
                    <h3>MH Models is a part of SB Media and Production, dedicated to turning dreams into reality.</h3>
                    <p>
                    Here, we provide aspiring models and actors the platform and opportunities to step into the world they have always envisioned. Your dream, our mission!  
                    </p>
                    <button onClick={goToWebsite}>Know More</button>
                    <div className="mh-card-content-social-icons">
                        <SocialIcon style={{ width: 40, height: 40 }} bgColor='grey' url="https://www.facebook.com/sakshibhutada/" />
                        <SocialIcon style={{ width: 40, height: 40 }} bgColor='grey' url="https://www.instagram.com/sakshi__bhutada_/" />
                        <SocialIcon style={{ width: 40, height: 40 }} bgColor='grey' url="https://youtube.com/sakshibhutada" />
                    </div>

                </div>
                

            </div>
        </div>
    )
}