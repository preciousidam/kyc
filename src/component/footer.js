import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../style/footer.css';
import { ContactForm } from './forms';


export const Footer = () => {

    return (
        <footer id="footer">
            <div className="row top">
                <div className="col-md-6">
                    <h5>Please leave us a message and we will get back to you.</h5>
                    <ContactForm />
                </div>
                <div className="col-md-3">
                    <p><FontAwesomeIcon icon={['fas',"map-marked"]} size="lg" /> <span>Block 138 Plot 5 
                             Gabriel Olusanya Street, Lekki Express Way, Lekki, Lagos.</span></p>
                    <p><FontAwesomeIcon icon="phone-alt"  /> <span>07032358685, 08090512127</span></p>
                    <p><FontAwesomeIcon icon={['fab', 'whatsapp']} size="lg" /> <span>07040345052</span></p>
                    <p><FontAwesomeIcon icon="envelope" size="lg" /> <span>info@kblinsurance.com</span></p>
                </div>
                <div className="col-md-3">
                    
                </div>
            </div>
            <div className="bottom">KBLInsurance © 2020 All Rights Reserved.</div>
        </footer>
    );
}