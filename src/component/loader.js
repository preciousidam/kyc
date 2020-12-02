import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Spin} from 'antd';


export const Loader = _ => {
    return (
        <div id="loader">
            <Spin size="large" />
        </div>
    )
}

export const Error = _ => {

    return (
        <div id="error">
            <h3 style={{color: "black", marginTop: 20, marginBottom: 20}}>Something happened</h3>
            <FontAwesomeIcon icon="broadcast-tower" size="10x" />  
            <p style={{color: "black", marginTop: 20, marginBottom: 20}}>Please check your network, and refresh the page</p>
        </div>
    );
}