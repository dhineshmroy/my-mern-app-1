import '../styles/HeroSection.css';
import phone from '../assets/images/phone.png';
import email from '../assets/images/email.png';
import insta from '../assets/images/insta.png';
import youtube from '../assets/images/youtube.png';
import fb from '../assets/images/fb.png';
import Twi from '../assets/images/Twi.png';

const HeroSection = () => {
  return (
    <div className='hero'>
        <div className='hero-top'>
            <div className='contact-info'>
                <div className='phone'>
                    <img src={phone} alt='' />
                    <span>(225) 555-0118</span>
                </div>
                
                <div className='email'>
                    <img src={email} alt='' />
                    <span>michelle.rivera@example.com</span>
                </div>

                <div className='paragraph'>
                    <p>Follow Us  and get a chance to win 80% off</p>
                </div>

                <div className='social-links'>
                    <span>Follow Us:</span>
                    <a href="#">
                        <img src={insta} alt='' />
                    </a>
                    <a href="#">
                        <img src={youtube} alt='' />
                    </a>
                    <a href="#">
                        <img src={fb} alt='' />
                    </a>
                    <a href="#">
                        <img src={Twi} alt='' />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection