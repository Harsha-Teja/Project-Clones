import React,{useState} from "react";
import "./Homecourseprice.css"
import HouseTutoring from "../../Assets/images/HouseTutoring.png";
import Modal from 'react-modal'
import { useFormik } from 'formik'
import emailjs from "emailjs-com"

Modal.setAppElement('#root')
function Homecourseprice () {
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
            <div className="homecourseprice">
                <div className="homecoursepricetitle">
                    <div className="homecoursepricetext"> Classses Starting as low as  <strong className="logocolor">250 INR per class</strong>.</div>
                    <div className="homecoursepricesubtext"> Your kid earns certification after every level</div>
                </div>
                <div className="homecoursepricecontainer">
                    {/* First */}
                    <div className="homecoursepricewrapper">
                        <div className="homecoursepricewrappertitle">
                            <div className="homecoursepricewrappertitletext">Beginner</div>
                            <div className="homecoursepricewrappersubtext">32 Classes</div>
                        </div>
                        <div className="homecoursepricewrappercourse">
                            <div className="homecoursepricewrappercoursetitle">Course Includes</div>
                            <div className="homecoursepricewrappercoursetext">🔖 1 Certification</div>
                        </div>
                        <div className="homecoursepricewrappercost">                            
                            <div className="homecoursepricewrappercostoriginal">
                            <hr/>
                                <div className="homecoursepricewrappercostoriginalone">Rs. 11,200 </div>
                                <div className="homecoursepricewrappercostoriginaltwo">Rs. 350 per class </div>
                            </div>
                            <div className="homecoursepricewrappercostshow"> Rs.14,400</div>
                        </div>
                        <div className="homecoursepricewrapperbutton" onClick={() => setModalIsOpen(true)} >Book a Free Trial</div>
                    </div>
                    {/* Second */}
                    <div className="homecoursepricewrapper">
                        <div className="homecoursepricewrappertitle" style={{backgroundColor: "lightgreen"}}>
                            <div className="homecoursepricewrappertitletext">Intermediate</div>
                            <div className="homecoursepricewrappersubtext">96 Classes</div>
                        </div>
                        <div className="homecoursepricewrappercourse">
                            <div className="homecoursepricewrappercoursetitle">Course Includes</div>
                            <div className="homecoursepricewrappercoursetext">🔖 3 Certification</div>
                        </div>
                        <div className="homecoursepricewrappercost">                            
                            <div className="homecoursepricewrappercostoriginal">
                            <hr/>
                                <div className="homecoursepricewrappercostoriginalone">Rs. 28,800 </div>
                                <div className="homecoursepricewrappercostoriginaltwo" style={{color:"lightgreen"}}>Rs. 300 per class </div>
                            </div>
                            <div className="homecoursepricewrappercostshow"> Rs.38,400</div>
                        </div>
                        <div className="homecoursepricewrapperbutton" onClick={() => setModalIsOpen(true)} style={{backgroundColor: "lightgreen"}}>Book a Free Trial</div>
                    </div>
                    {/* Third */}
                    <div className="homecoursepricewrapper">
                        <div className="homecoursepricewrappertitle" style={{backgroundColor: "lightblue"}}>
                            <div className="homecoursepricewrappertitletext">Advanced</div>
                            <div className="homecoursepricewrappersubtext">480 Classes</div>
                        </div>
                        <div className="homecoursepricewrappercourse">
                            <div className="homecoursepricewrappercoursetitle">Course Includes</div>
                            <div className="homecoursepricewrappercoursetext">🔖 15 Certification</div>
                        </div>
                        <div className="homecoursepricewrappercost">                            
                            <div className="homecoursepricewrappercostoriginal">
                            <hr/>
                                <div className="homecoursepricewrappercostoriginalone">Rs. 1,20,200 </div>
                                <div className="homecoursepricewrappercostoriginaltwo" style={{color:"lightblue"}}>Rs. 250 per class </div>
                            </div>
                            <div className="homecoursepricewrappercostshow"> Rs.1,68,400</div>
                        </div>
                        <div className="homecoursepricewrapperbutton" onClick={() => setModalIsOpen(true)} style={{backgroundColor: "lightblue"}}>Book a Free Trial</div>
                    </div>
                </div>
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
    )
}

export default Homecourseprice;