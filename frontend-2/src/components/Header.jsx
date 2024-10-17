import React from 'react';
import '../styles/Header.css';
import vector from '../assets/images/Vector.png';
import search from '../assets/images/search.png';
import cart from '../assets/images/cart.png';
import fav from '../assets/images/fav.png';

const Header = () => {
  return (
    <>
        <div className='navbar'>
            <div className='brand'>BrandName</div>

            <div className='navigation'>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Pages</li>
                </ul>
            </div>

            <div className='user-actions'>
                <ul>
                  <li className='login-register'>
                    <img src={search} alt='' />
                    <button>Login</button>
                    <span>/</span>
                    <button>Register</button>
                  </li>
                  <li>
                    <img src={cart} alt='' />
                    <span>1</span>
                  </li>
                  <li>
                    <button>
                      <img src={fav} alt='' />
                      <span>1</span>
                    </button>
                  </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Header
