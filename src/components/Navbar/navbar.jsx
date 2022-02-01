import React, { Component } from 'react';
import Searching_area from './search';
import Modal from './modal';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default class NavBar extends Component{  

  go_to_home(){
    document.getElementById("Homes").click();
  }

  
  render() {
    
    return(
        <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand ml-3" id="Brand">Kit-Zone	&#9917;</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
              <Link to="/" type="button" className="nav-link specials px-3" id="Homes">Home</Link>
              </li>
              <li className="nav-item" data-bs-toggle="modal" data-bs-target="#email">
                <a className="nav-link specials px-3" id="emailing" type="button" data-bs-toggle="modal" data-bs-target="#email">Email-us</a>
              </li>
              <li className="nav-item">
              
              </li>
              <li className="nav-item">
                <a className="nav-link specials px-3" onClick={this.go_to_home} href="#socials-area">Socials</a>
              </li>

              <Link to="/cart" type="button" className="nav-link specials px-3">

              <button type="button" className="btn btn-secondary position-relative">
                  Go to Cart
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    0
                    <span className="visually-hidden">Cart items</span>
                  </span>
              </button>

              </Link>
              
            </ul>
            <Searching_area/>
          </div>
          
        </div>
        
      </nav>

      <Modal/> 
      </div>
    
    
    );
    }
}
