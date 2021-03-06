import React from 'react'
import { useFormik } from 'formik'
import emailjs from "emailjs-com"
import demo from "../../Assets/svg/demo.svg"
import "./DemoForm.css"

export function DemoForm () {

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
          // message: ''
        },
        validate,
    
        // onSubmit: values => {
        //   alert(JSON.stringify(values, null, 2))
        // }
    
      })
    
      return (
        <>
          <div className="demoformfull">
            <div className="demoformpic">
              <img src={demo} alt="demo" className="demoformimg"/>
            </div>
            <div className="demoform">
              <h1 className="demoformtitle">Book a Free Demo </h1>
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
                <label htmlFor="subject" className="demonamelabel">Course(s)*</label>
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


                {/* Education Level */}
                <label htmlFor="educationlevel" className="demonamelabel">Education Level*</label>
                  <select
                      id="educationlevel"
                      name="educationlevel"
                      value={formik.values.educationlevel}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="demonameinput"
                      style={{ display: 'block' }}
                  >
                      <option value="" label="Select a Education Level" />
                      <option value="Pre-Primary" label="preprimary" />
                      <option value="Primary" label="primary" />
                      <option value="Secondary" label="secondary" />
                      <option value="Higher-Secondary" label="highersecondary" />
                      <option value="Degree" label="Degree" />
                  </select>
                {formik.touched.subject && formik.errors.subject ? <div className='error'>{formik.errors.subject}</div> : null}
                  
                {/* Message */}
                {/* <label htmlFor="message" className="contactmessagelabel">Message</label>
                <input
                  id="message"
                  name="message"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  className="contactmessageinput"/>
                {formik.touched.message && formik.errors.message ? <div className='error'>{formik.errors.message}</div> : null} */}
      
                {/* Submit Button */}
                <button type="submit" className="demobutton">Send</button>
                </div>
              </form>
            </div>
          </div>
        </>
        )
}

export default DemoForm