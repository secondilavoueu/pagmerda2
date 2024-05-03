import React from 'react';
import './Footer.css';


 function Footer() {
    return (
        <div className="Menu">
            <h6> © 2024 Todos os direitos reservados ao povo do 3º/Informática para Internet.</h6>
            <h50>Contato: almossar@cabacos.com</h50>
            <div className="logosesi">
            <img src={require('./SESI.png')} alt="LOGOSESI" />   
        </div>
        </div>
    );
  }
  
  export default Footer;

