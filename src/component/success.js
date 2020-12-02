import Lottie from "lottie-react";
import Complete from '../images/complete.json';



export const Success = _ => {

    return (
        <div id="success">
            <Lottie animationData={Complete} id="lottie" />
            <h4>Thank you! your KYC has been updated successfully</h4>
            <div id="other-link">
                <a style={{color: 'blue'}} href="https://kblinsurance.com/">Visit our website</a>
                <a style={{color: 'blue'}} href="https://kblinsurance.com/personal-insurance/">product and services</a>
            </div>
            
        </div>
    )
}

export default Success;