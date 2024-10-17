import React from 'react';
import '../styles/Banner.css';
import leftImg from '../assets/images/left-img.png';
import rightImg from '../assets/images/rigth-img.png';

const Baner = () => {
  return (
    <>
        <div className='banner'>
            <div className='left-img'>
                <img src={leftImg} alt='' />
            </div>
            <div className='banner-text'>
                <h5>SUMMER 2020</h5>
                <h1>
                    Multicoloured <br /> Tie-dye Sweater
                </h1>
                <h4>
                    We know how large objects will act,
                </h4>
                <button>SHOP NOW</button>
            </div>
            <div className='right-img'>
                <img src={rightImg} alt='' />
            </div>
        </div>
    </>
  )
}

export default Baner