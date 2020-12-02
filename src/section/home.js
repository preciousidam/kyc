import { Link } from "react-router-dom";
import '../style/main.css';

export const Home = ({}) => {

    return (
        <div id="main">
            <div className="container info">
                <h1>KBL INSURANCE KYC UPDATE FORM</h1>
                <p>Dear Esteemed Client,</p>
                <p>In order to further protect your insurance assets, we would like to confirm that we have your 
                    correct and updated information, kindly fill the form below and click the submit button afterwards.
                </p>
                <p>For any enquiries, you may reach us via Email: info@kblinsurance.com | WhatsApp: +2347040345052 | 
                    Call: +2347032358685.
                </p>
                <p>Thank you</p>
                <div className="btnCont">
                    <Link to="/individual" className="button">Individual</Link>
                    
                    <Link to="/corporate" className="button">Corporate</Link>
                </div>
            </div>
        </div>
    )
}

export default Home;