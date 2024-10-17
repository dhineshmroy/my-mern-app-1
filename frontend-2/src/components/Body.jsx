import '../styles/Body.css';
import backImg from '../assets/images/body.jpeg';
import next from '../assets/images/next.png';
import prev from '../assets/images/prev.png';

const Body = () => {
  return (
    <>
        <div className='container'>
            <img src={backImg} alt='' />

            <div className='Banner-text'>
                <h5>SUMMER 2020</h5>
                <h1>NEW COLLECTION</h1>
                <h4>We know how large objects will act, <br /> but things on a small scale.</h4>
                <button>
                    SHOP NOW
                </button>
            </div>

            <div className='navigation'>
                <div className='pre'>
                    <buton>
                        <img src={prev} alt=''/>
                    </buton>
                </div>
                
                <div className='next'>
                    <button>
                        <img src={next} alt='' />
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Body