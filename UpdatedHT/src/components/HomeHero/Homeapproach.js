import React, {useState} from "react";
import pic1 from "../../Assets/svg/homecenterpic1.jpg";
import "./Homeapproach.css"
import Modal from 'react-modal'
import { useFormik } from 'formik'
import emailjs from "emailjs-com"
import HouseTutoring from "../../Assets/images/HouseTutoring.png";

Modal.setAppElement('#root')
function Homeapproach () {
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
            <div className="heroapproach">
                <div className="heroapproachtitle">
                    <div className="heroapproachtitletext"> One hour of HouseTutoring <strong className="logocolor">supercedes</strong> 8 hours of school</div>
                </div>
                <div className="heroapproachcontainer">
                    <div className="heroapproachleftcontainer">
                        <div className="heroapproachleftwraptitle">Holistic Approach for learning</div>
                        <div className="heroapproachleftwrap">
                            <div className="heroapproachleftwrapone">
                                <div className="heroapproachleftwraponebox1">
                                    <img src={pic1} alt="one" className="heroapproachleftwraponebox1img"/>
                                    <div className="heroapproachleftwraponebox1text">Project based One on One learning</div>
                                </div>
                                <div className="heroapproachleftwraponebox2">
                                    <img src={pic1} alt="two" className="heroapproachleftwraponebox2img"/>
                                    <div className="heroapproachleftwraponebox2text">Flipped Classroom</div>
                                </div>
                            </div>
                        </div>
                        <div className="heroapproachleftwraptitle">A Classroom beyond Imagination</div>
                        <div className="heroapproachleftwrap">
                            <div className="heroapproachleftwrapone">
                                <div className="heroapproachleftwraponebox1">
                                    <img src={pic1} alt="one" className="heroapproachleftwraponebox1img"/>
                                    <div className="heroapproachleftwraponebox1text">Personalize as per your child's needs</div>
                                </div>
                                <div className="heroapproachleftwraponebox2">
                                    <img src={pic1} alt="two" className="heroapproachleftwraponebox2img"/>
                                    <div className="heroapproachleftwraponebox2text">Best Teachers</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="heroapproachrightcontainer">
                        <img src={pic1} alt="five" className="heroapproachrightcontainerimg"/>
                        <div className="heroapproachrightcontainerdesc">
                            "Tell me and I'll forget, show me and I may remember, involve me and I'll understand."
                        </div>
                        <button className="heroapproachrightcontainerbutton" onClick={() => setModalIsOpen(true)}>Book a Free Trail</button>
                    {/* Modal code */}
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
                                <img src={HouseTutoring} alt="demo" className="demoformimg"/>
                                </div>
                                <div className="demoform">
                                <h1 className="demoformtitle">Demo Request Form </h1>
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
                    {/* End Modal Code */}
                    </div>
                </div>
            </div>
    )
}

export default Homeapproach;