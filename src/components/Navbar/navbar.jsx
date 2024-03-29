import React, { Component } from 'react';
import Modal from './modal';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useCart } from 'react-use-cart';

export default function Navbar(){  

  const {
    totalUniqueItems,
  
  } = useCart();

  
  const collapse = () => {
    document.getElementById("burger").click();
  }

  const totallogic = () => {
    if (totalUniqueItems > 0 ){
      return <div className="text-danger text-end">!</div>
    }
  }

    return(
        <div >
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" style={{border:"1px solid white"}}>
        <div className="container-fluid">
          <a className="navbar-brand ml-3" id="Brand">Kit-Zone</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
          <div className="container text-end text-danger">{totallogic()}</div> <span className="navbar-toggler-icon outline-white" id="burger"></span>
          </button>
          <div className="navbar-collapse collapse" id="navmenu">
            <ul className="navbar-nav ms-auto hover-toggle smooth-scroll">
              
              <li className="specials" onClick={collapse}>
              <Link to="/" type="button" className="nav-link specials px-3 active-link" id="Homes">Home</Link>
              </li>

              <li className="specials" onClick={collapse}>
              <Link to="/otherwears" type="button" className="nav-link specials px-3 active-link" id="Homes">Other-wears</Link>
              </li>

              <li className="specials" onClick={collapse}>
              <Link to="/custom-kits" type="button" className="nav-link specials px-3 active-link" id="Homes">Custom kits</Link>
              </li>

              <li className="specials" data-bs-toggle="modal" data-bs-target="#email" onClick={collapse}>
                <a className="nav-link specials px-3" id="emailing" type="button" data-bs-target="#email">Email-us</a>
              </li>
              
              <li className="specials" onClick={collapse}>
                <a className="nav-link specials px-3" id="smoothing" href="#socials-area">Socials</a>
              </li>

              <Link to="/cart" type="button" className="nav-link specials px-3">

              <button type="button" className="button position-relative" onClick={collapse}>
                Go to Cart
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                     
                    <span>{totalUniqueItems}</span>
                  </span>
              </button>

              </Link>

              <Link to="/auths" type="button" className="nav-link specials px-3">
              <button type="button" id="acc" className="button position-relative" onClick={collapse}>
                Account
               
              </button>
              
              </Link>
            </ul>
           
          </div>
          
        </div>
        
      </nav>

      <Modal/> 
      </div>
    
    
    );
    
}
