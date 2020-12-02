import React, {lazy, Suspense, useState} from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';
import ReCAPTCHA from "react-google-recaptcha";

import {site_key, STATE} from '../constants';
import ErrorBoundary from '../component/errorboundry';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Form = () => {

    const [data, setData] = useState({is_individual: true, is_corporate: false, 
        dob: moment(new Date(), 'yyyy-mm-dd'), issued_at: moment(new Date(), 'yyyy-mm-dd'), 
        expired_at: moment(new Date(), 'yyyy-mm-dd')});
    const [status, setStatus] = useState(null);
    const [captcha, setCaptcha] = useState(null);
    const Success = lazy(() => import('../component/success'));

    const onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let file = (e.target.type === 'file'&& e.target.files.length > 0) ? e.target.files[0] : null

        setData(prev => ({...prev, [name]: file||value}));
       
    }

    const onDateChanged = (date, field) => {
        setData(prev => ({...prev, [field]: date}));
    }

   
    const onFormSubmit = async (e) => {
        e.preventDefault();
        console.log(captcha)
        if(captcha === null) return;
        setStatus('loading');
        const formData = new FormData();
        const body = {...data, issued_at : data.issued_at.format('YYYY-MM-DD'), 
                        expired_at: data.issued_at.format('YYYY-MM-DD'),
                        dob: data.issued_at.format('YYYY-MM-DD')}

        for ( let key in body ) {
            formData.append(key, body[key]);
        }
        
        try{
            const res = await fetch('https://kbl-admin.herokuapp.com/api/v1/kyc/', {
                method: "POST",
                body: formData,
            })
            
            const json = await res.json();
            if(json?.name !== undefined ){
                setStatus('success')
            }
            else{
                setStatus('failed')
            }
        }catch(err){
            setStatus('failed')
        }
    }

    if (status === 'success') {
        return (
        <ErrorBoundary>
            <Suspense fallback={<p>loading...</p>}>
                <Success />
            </Suspense>
        </ErrorBoundary>)
    }

    return (
        <div className="individual">
            <div className="container formCont">
                <header>
                    <h3>This Form is for individuals</h3>
                </header>
                <p id="note"><strong>Fields marked with <span>*</span> are required</strong></p>
                
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullname">Name of Insured <span>*</span></label>
                        <input required={true} onChange={onChange} type="text" name="name" className="form-control" id="fullname" aria-describedby="fullname" />
                        <small id="fullname" className="form-text text-muted">Full Name (Surname First).</small>
                    </div>
                    <div className="form-group">
                        <p> Gender<span>*</span></p>
                        <div className="form-check">
                            <input required={true} onChange={onChange} name="gender" className="form-check-input" type="radio"vid="gender1" value="Male" />
                            <label className="form-check-label" htmlFor="gender1">
                                Male
                            </label>
                        </div>
                        <div className="form-check">
                            <input required={true} onChange={onChange} name="gender" className="form-check-input" type="radio" id="gender2" value="Female" />
                            <label className="form-check-label" htmlFor="gender2">
                                Female
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="dob">Date of Birth <span>*</span></label>
                            <DatePicker 
                                value={data.dob} 
                                className="form-control" id="issued" aria-describedby="issued"
                                name="dob"
                                required={true}
                                onChange={date => onDateChanged(date, 'dob')}
                                id="dob" 
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="polNum">Policy Number</label>
                            <input onChange={onChange} name="policy_number" type="text" className="form-control" id="polNum" aria-describedby="polNum" />
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="sector">Occupation <span>*</span></label>
                        <input required={true} onChange={onChange} name="occupation" type="text" className="form-control" id="sector" aria-describedby="sector" />
                        {/*<input type="text" className="form-control" id="occupation" aria-describedby="occupation" />*/}
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Residential Address<span>*</span></label>
                        <input required={true} onChange={onChange} name="address" type="text" className="form-control" id="address" aria-describedby="address" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State <span>*</span></label>
                        <select required={true} onChange={onChange} name="state" className="form-control" id="state">
                            <option>Select state</option>
                            {STATE.map(x => <option value={x}>{x}</option>)}
                        </select>
                        {/*<input type="text" className="form-control" id="occupation" aria-describedby="occupation" />*/}
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Mobile number <span>*</span></label>
                        <input 
                            required={true} 
                            onChange={onChange} 
                            name="phone" type="tel" 
                            className="form-control" 
                            id="phone" 
                            aria-describedby="phone"
                            maxLength={15}
                            
                        />
                        <small id="phone" className="form-text text-muted">Format +234XXXXXXXXXXX.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email <span>*</span></label>
                        <input required={true} onChange={onChange} name="email" type="email" className="form-control" id="email" aria-describedby="email" />
                    </div>
                    <div className="form-group">
                        <p>Type of ID<span>*</span></p>
                        <div className="form-check">
                            <input required={true} onChange={onChange} name="id_type" className="form-check-input" type="radio" id="id1" value="Int Passport" />
                            <label className="form-check-label" htmlFor="id1">
                                International passport
                            </label>
                        </div>
                        <div className="form-check">
                            <input required={true} onChange={onChange} name="id_type" className="form-check-input" type="radio" id="id2" value="Drivers License" />
                            <label className="form-check-label" htmlFor="id2">
                                Drivers License
                            </label>
                        </div>
                        <div className="form-check">
                            <input required={true} onChange={onChange} name="id_type" className="form-check-input" type="radio"  id="id3" value="National ID" />
                            <label className="form-check-label" htmlFor="id3">
                                National ID
                            </label>
                        </div>
                        <div className="form-check">
                            <input required={true} onChange={onChange} name="id_type" className="form-check-input" type="radio"  id="id4" value="Voters Card" />
                            <label className="form-check-label" htmlFor="id4">
                                Voters Card
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="idNumber">ID number <span>*</span></label>
                        <input required={true} onChange={onChange} name="id_number" type="text" className="form-control" id="idNumber" aria-describedby="idNumber" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="idcard">Upload Image of ID <span>*</span></label>
                        <input required={true} onChange={onChange} name="id_image" type="file" className="form-control-file" id="idcard" />
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="issued">Issued date <span>*</span></label>
                            <DatePicker 
                                selected={data.issued_at} 
                                onChange={date => onDateChanged(date, 'issued_at')}
                                className="form-control" id="issued" aria-describedby="issued"
                                name="issued_at"
                                required={true}
                            />
                            <small id="issued" className="form-text">Date ID was issued.</small>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="expired">Expiry date <span>*</span></label>
                            <DatePicker 
                                selected={data.expired_at} 
                                onChange={date => onDateChanged(date, 'expired_at')}
                                className="form-control" id="expired" aria-describedby="expired"
                                name="expired_at"
                                required={true}
                            />
                            <small id="expired" className="form-text">Date ID will expire.</small>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Any other information?</label>
                        <textarea onChange={onChange} name="other" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <p><small>
                        By clicking submit you thereby agree that the information provided is true and complete to the 
                        best of his knowledge and belief and that he undertakes to inform KBL Insurance of any changes therein 
                        immediately.  In the event that the information he provided proves to be untrue and incomplete in any respect, 
                        that the Company shall have no liability under the Insurance.
                    </small></p>
                    <ReCAPTCHA
                        sitekey={site_key}
                        onChange={value => setCaptcha(value)}
                    />
                    <button 
                        className="button" 
                        type="submit" 
                    >
                            {status === 'loading'? <FontAwesomeIcon icon='spinner' size="lg" color="#fff" />:'Submit'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Form;