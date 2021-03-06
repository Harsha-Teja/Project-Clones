import React from 'react'
import { useFormik } from 'formik'
import emailjs from "emailjs-com"
import "../BecomeTutor/BecomeTutorForm.css"
import becometutor from "../../Assets/svg/becometutor.svg"

export function BecomeTutorForm () {

  const validate = values => {
    const errors = {}

    if (!values.name) {
      errors.name = 'Required'
    } else if (values.name.length < 3) {
      errors.name = 'Must be 5 characters or more'
    }

    if (!values.subject) {
        errors.subject = 'Required'
      } else if (values.subject.length < 4) {
        errors.subject = 'Must be 5 characters or more'
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

    // if (!values.message) {
    //   errors.message = 'Required'
    // } else if (values.message.length < 4 ) {
    //   errors.message = 'Please, enter a meaning full message !!!'
    // }

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
      subject:''
      // message: ''
    },
    validate,

    // onSubmit: values => {
    //   alert(JSON.stringify(values, null, 2))
    // }

  })

  return (
    <>
      <div className="becometutoroverall">
      <div className="becometutorform">
        <h1 className="becometutorformtitle">Become a Tutor: Form </h1>
        <h6>Please fill the form and our team will contact you shortly </h6>
        {/* <form onSubmit={formik.handleSubmit}> */}
        <form onSubmit={sendmail}>
          <div className="w">
          {/* Name */}
          <label htmlFor="name" className="becometutornamelabel">Name</label>
          <input
            id="name"
            name="name"
            type="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="becometutornameinput"/>
          {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
          
          {/* Email */}
          <label htmlFor="email" className="becometutoremaillabel">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="becometutoremailinput"/>
          {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}

          {/* Phone number */}
          <label htmlFor="phonenumber" className="becometutorphonelabel">Phone Number</label>
          <input
            id="phonenumber"
            name="phonenumber"
            type="tel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phonenumber}
            className="becometutorphoneinput"/>
          {formik.touched.phonenumber && formik.errors.phonenumber ? <div className='error'>{formik.errors.phonenumber}</div> : null}

          <label htmlFor="subject" className="becometutornamelabel">Subject(s)</label>
          <input
            id="subject"
            name="subject"
            type="subject"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
            className="becometutornameinput"/>
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
          <button type="submit" className="becometutorbutton">Send</button>
          </div>
        </form>
      </div>
      <div className="becometutorpic"> 
        <img src={becometutor} alt="become tutor" className="becometutorimg"/>
      </div>
      </div>
      </>
    )
}

export default BecomeTutorForm