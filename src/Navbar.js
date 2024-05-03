import React from 'react';
import './Navbar.css';


 function Navbar() {
    return (
        <nav className="Menu">
            <div className="logosenai">
            <img src={require('./SENAI.png')} alt="LOGOSENAI" />   
            </div>

        <div className='nav'>

        <ul className="elementos-nav">
                <li className="elementos-nav-item">
                    <Link className="elementos-nav-link" to="/"><h4>Home</h4></Link>
                </li>
                <li className="nemezes-nav-item">
                    <Link className="n-nav-link" to="/quemsomos"><h4>Quem Somos?</h4></Link>
                </li>
                <li className="nemezes-nav-item">
                    <Link className="nemezes-nav-link" to="/contato"><h4>Contato</h4></Link>
                </li>
            </ul>
            </div>
        </nav>
/* 
 <nav className="nemezes">
            <ul className="nemezes-nav">
                <li className="nemezes-nav-item">
                    <Link className="nemezes-nav-link" to="/"><h4>Home</h4></Link>
                </li>
                <li className="nemezes-nav-item">
                    <Link className="nemezes-nav-link" to="/quemsomos"><h4>Quem Somos?</h4></Link>
                </li>
                <li className="nemezes-nav-item">
                    <Link className="nemezes-nav-link" to="/contato"><h4>Contato</h4></Link>
                </li>
            </ul>
        </nav>
     */
    );
  }
  
  export default Navbar;

