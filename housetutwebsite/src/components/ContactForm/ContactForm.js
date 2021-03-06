import React from 'react'
import { useFormik } from 'formik'
import "./ContactForm.css"
import emailjs from "emailjs-com"
import contactus from "../../Assets/svg/contactus.svg"

export function ContactForm () {

  const validate = values => {
    const errors = {}

    if (!values.name) {
      errors.name = 'Required'
    } else if (values.email.length < 3) {
      errors.name = 'Must be 5 characters or more'
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

    emailjs.sendForm('service_b8nkcuh', 'template_t948m58', e.target, 'user_0l7XB9qhOnLbF5SD5qgrK')
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
      message: ''
    },
    validate,

    // onSubmit: {sendmail}
    
    // values => {
    //   alert(JSON.stringify(values, null, 2))
    //   sendmail();
    // }

  })

  return (
      <div className="contactform">
        <h1 className="contactformtitle">Contact Us </h1>
        <div className="contactuspic">
          <img  src={contactus} alt="contact us " className="contactusimg"/>
        </div>
        {/* <form onSubmit={formik.handleSubmit}> */}
        <form onSubmit={sendmail}>
          <div className="w">
          {/* Name */}
          <label htmlFor="name" className="contactnamelabel">Name</label>
          <input
            id="name"
            name="name"
            type="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="contactnameinput"/>
          {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
          
          {/* Email */}
          <label htmlFor="email" className="contactemaillabel">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="contactemailinput"/>
          {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}

          {/* Phone number */}
          <label htmlFor="phonenumber" className="contactphonelabel">Phone Number</label>
          <input
            id="phonenumber"
            name="phonenumber"
            type="tel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phonenumber}
            className="contactphoneinput"/>
          {formik.touched.phonenumber && formik.errors.phonenumber ? <div className='error'>{formik.errors.phonenumber}</div> : null}
          
          {/* Message */}
          <label htmlFor="message" className="contactmessagelabel">Message</label>
          <input
            id="message"
            name="message"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="contactmessageinput"/>
          {formik.touched.message && formik.errors.message ? <div className='error'>{formik.errors.message}</div> : null}

          {/* Submit Button */}
          <button type="submit" className="contactbutton">Send</button>
          </div>
        </form>
      </div>
    )
}

export default ContactForm