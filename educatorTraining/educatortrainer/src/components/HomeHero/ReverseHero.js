import React, {useState} from "react";
import "./Hero.css"
import Modal from 'react-modal'
import { useFormik } from 'formik'
import emailjs from "emailjs-com"
import demo from "../../assets/svg/enquiry.svg"
import {NavLink} from "react-router-dom";

Modal.setAppElement('#root')
function ReverseHero ({ReverseHeroImage, ReverseHeroTitle, ReverseHeroText, ReverseHeroButton1, ReverseHeroButton2}) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const validate = values => {
        const errors = {}
    
        if (!values.name) {
          errors.name = 'Required'
        } else if (values.name.length < 3) {
          errors.name = 'Must be 5 characters or more'
        }
    
        if (!values.subject) {
            errors.subject = 'Required'
          } 
        
        if (!values.subject) {
            errors.subject = 'Required'
          } 
    
        if (!values.email) {
          errors.email = 'Required'
        } else if (values.email.length < 4) {
          errors.email = 'Must be 5 characters or more'
        }
    
        if (!values.phonenumber) {
          errors.phonenumber = 'Required'
        } else if (values.phonenumber.length < 10) {
          errors.phonenumber = 'Must be 10 characters or more'
        } else if (values.phonenumber === '1234567890') {
          errors.password = 'Must not be 1234567890 !!!'
        }
    
        if (!values.message) {
          errors.message = 'Required'
        } else if (values.message.length < 4 ) {
          errors.message = 'Please, enter a meaning full message !!!'
        }
    
        return errors
      }
    
      function sendmail(e){
        e.preventDefault();
    
        emailjs.sendForm('service_b8nkcuh', 'template_rwuygwl', e.target, 'user_0l7XB9qhOnLbF5SD5qgrK')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    
          e.target.reset()
      }

      const formik = useFormik({
    
        initialValues: {
          name: '',
          email: '',
          phonenumber: '',
          subject:'',
          educationlevel:''
        },
        validate,
    
      })
    return(
            <div className="hero">
                <div className="hero-illustration">
                    <img src={ReverseHeroImage} alt="Teacher teaching illustration"/>
                </div>
                <div className="hero-content">
                    <div className="hero-content-container">
                        <div className="hero-content-title">{ReverseHeroTitle} </div>
                        <div className="hero-content-text">{ReverseHeroText}</div>
                        <div className="hero-content-button">
                        <NavLink 
                        exact={true}
                        to="/Programs" 
                        className="program-nav-link" 
                        >
                          <button className="hero-content-button-1">{ReverseHeroButton2}</button>
                        </NavLink>   
                        <button className="hero-content-button-1" onClick={() => setModalIsOpen(true)}>{ReverseHeroButton1}</button>
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={() => setModalIsOpen(false)}
                            style={{
                            overlay: {
                                position: 'fixed',
                                top: 40,
                                left: 40,
                                right: 40,
                                bottom: 40,
                                backgroundColor: 'rgba(255, 255, 255, 0.75)'
                            },
                            content: {
                                
                            }
                            }}
                        >
                            <div className="demoformfull">
                                <div className="demoformpic">
                                <img src={demo} alt="demo" className="demoformimg"/>
                                </div>
                                <div className="demoform">
                                <h1 className="demoformtitle">Enquiry Form </h1>
                                {/* <form onSubmit={formik.handleSubmit}> */}
                                <form onSubmit={sendmail}>
                                    <div className="w">
                                    {/* Name */}
                                    <label htmlFor="name" className="demonamelabel">Name*</label>
                                    <input
                                    id="name"
                                    name="name"
                                    type="name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                    className="demonameinput"/>
                                    {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                                    
                                    {/* Email */}
                                    <label htmlFor="email" className="demoemaillabel">Email Address*</label>
                                    <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    className="demoemailinput"/>
                                    {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                        
                                    {/* Phone number */}
                                    <label htmlFor="phonenumber" className="demophonelabel">Phone Number*</label>
                                    <input
                                    id="phonenumber"
                                    name="phonenumber"
                                    type="tel"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phonenumber}
                                    className="demophoneinput"/>
                                    {formik.touched.phonenumber && formik.errors.phonenumber ? <div className='error'>{formik.errors.phonenumber}</div> : null}

                                    {/* Subject */}
                                    <label htmlFor="subject" className="demonamelabel">Program(s)*</label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formik.values.subject}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="demonameinput"
                                        style={{ display: 'block' }}
                                    >
                                        <option value="" label="Select a Subject" />
                                        <option value="Hindi" label="Hindi" />
                                        <option value="Maths" label="Maths" />
                                        <option value="Science" label="Science" />
                                    </select>
                                    {formik.touched.subject && formik.errors.subject ? <div className='error'>{formik.errors.subject}</div> : null}
                                    {/* Submit Button */}
                                    <button type="submit" className="demobutton" onClick={() => setModalIsOpen(false)}>Send</button>
                                    </div>
                                </form>
                                </div>
                            </div>
                        </Modal>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ReverseHero;
