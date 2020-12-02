import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../style/header.css';
import Image from '../images/logo.png';

export const Header = () => {
    return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink exact={true} activeClassName='is-active' className="navbar-brand" to="/"><img src={Image} alt="KBL" /></NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li >
          <NavLink 
            activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}
            activeClassName='is-active' className={`nav-link`} to="/individual">Individual</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='is-active' className={`nav-link`} to="/corporate">Corporate</NavLink>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="tel:07032358685" className="nav-link"><FontAwesomeIcon icon="phone-alt" /> 07032358685</a>
        </li>
        <li className="nav-item">
          <a href="tel:07032358685" className="nav-link"><FontAwesomeIcon icon="phone-alt" /> 08090512127</a>
        </li>
        <li className="nav-item">
          <a href="https://api.whatsapp.com/send?phone=07032358685" className="nav-link">
            <FontAwesomeIcon icon={['fab', 'whatsapp']} color="green" size="lg" /> 07040345052
          </a>
        </li>
      </ul>
    </div>
  </nav>)
}