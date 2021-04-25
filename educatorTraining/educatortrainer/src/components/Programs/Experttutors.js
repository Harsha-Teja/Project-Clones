import React, {useState} from "react"
import image from "../../assets/svg/subject.svg";
import ReactPlayer from "react-player"
import "./Experttutors.css"
import { useFormik } from 'formik'
import Modal from 'react-modal'
import emailjs from "emailjs-com"
import demo from "../../assets/svg/enquiry.svg"

// Emojicons: 🏆 🥇 🥈 🥉 🏅 🎖 🏵 🎗 ✒️ ✏️ ▶️ ✅ ⟹ ⇨ 

Modal.setAppElement('#root')
function TutorProfileDetail (props){
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
    return (
    <>
        <div className="tutorprofiledetail">
            <div className="tutorprofiledetailone">
                <img src={image} alt="tutor profile pic" className="tutorprofiledetailoneimage"/>
                <div className="tutorprofiledetailone1">
                    <div className="tutorprofiledetailone1name">Random subject</div> 
                        {/* <div className="tutorprofiledetailone1subject">
                        <div className="tutorprofiledetailone1subjectdiv">Random </div>
                        <div className="tutorprofiledetailone1subjectdiv">Random</div>
                        <div className="tutorprofiledetailone1subjectdiv">Random</div>
                        <div className="tutorprofiledetailone1subjectdiv">Random</div>
                        <div className="tutorprofiledetailone1subjectdiv">Random</div>
                        <div className="tutorprofiledetailone1subjectdiv">Random</div>    
                        </div> */}
                    <button className="tutorprofiledetailone1button" onClick={() => setModalIsOpen(true)}>Enquire</button>
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

            {/* Second Part View */}

            <div className="tutorprofiledetailsecond"> 
                <div className="tutorprofiledetailsecondhead1"> Course Overview </div>
                {/* <hr/> */}
                <div className="tutorprofiledetailsecondtext1">
                    Random description about the curriculum of the course
                </div>

                <div className="tutorprofiledetailsecondhead3"> Job Prospects </div>
                {/* <hr/> */}

                <div className="tutorprofiledetailsecondtext3">
                    <li>📜 Random</li>
                    <li>📜 Random</li>
                    <li>📜 Random</li>
                </div>

                <div className="tutorprofiledetailsecondhead4"> Faculty details </div>
                {/* <hr/> */}

                <div className="tutorprofiledetailsecondtext4">
                    <li className="programdownnavbarli">
                              <div className="programdown-cards">
                                    <div className="programdown-card">
                                        <i className="fas fa-money-check-alt programdown-cards-cardicon"></i>
                                        <div className="programdown-cards-cardtitle"> Harsha</div>
                                        <div className="programdown-cards-cardtext"> Note that the development build is not optimized.
                                            To create a production build, use npm run build.</div>
                                </div>
                              </div>
                    </li>
                    <li className="programdownnavbarli">
                              <div className="programdown-cards">
                                    <div className="programdown-card">
                                        <i className="fas fa-money-check-alt programdown-cards-cardicon"></i>
                                        <div className="programdown-cards-cardtitle"> Varun</div>
                                        <div className="programdown-cards-cardtext"> Note that the development build is not optimized.
                                            To create a production build, use npm run build.</div>
                                </div>
                              </div>
                    </li>
                    <li className="programdownnavbarli">
                              <div className="programdown-cards">
                                    <div className="programdown-card">
                                        <i className="fas fa-money-check-alt programdown-cards-cardicon"></i>
                                        <div className="programdown-cards-cardtitle"> Sonu</div>
                                        <div className="programdown-cards-cardtext"> Note that the development build is not optimized.
                                            To create a production build, use npm run build.</div>
                                </div>
                              </div>
                    </li>
                </div>

                <div className="tutorprofiledetailsecondhead5"> The course content </div>
                {/* <hr/> */}

                <div className="tutorprofiledetailsecondtext5">
                    <ul className="coursecontent">
                    <li className="coursecontentcol"> 
                        <li className="coursecontentrow">
                            <h3 className="coursecontentrowtitle">Random</h3>
                            <p className="coursecontentrowtext">This module helps you to learn the basics of xyz</p>
                        </li>
                        <li className="coursecontentrow">
                            <h3 className="coursecontentrowtitle">Random</h3>
                            <p className="coursecontentrowtext">This module helps you to learn the basics of xyz</p>
                        </li>
                        <li className="coursecontentrow">
                            <h3 className="coursecontentrowtitle">Random</h3>
                            <p className="coursecontentrowtext">This module helps you to learn the basics of xyz</p>
                        </li>
                        <li className="coursecontentrow">
                            <h3 className="coursecontentrowtitle">Random</h3>
                            <p className="coursecontentrowtext">This module helps you to learn the basics of xyz</p>
                        </li>
                        <li className="coursecontentrow">
                            <h3 className="coursecontentrowtitle">Random</h3>
                            <p className="coursecontentrowtext">This module helps you to learn the basics of xyz</p>
                        </li>
                    </li>
                    <li className="coursecontentcol"> 
                        <li className="coursecontentrow">
                            <h3 className="coursecontentrowtitle">Random</h3>
                            <p className="coursecontentrowtext">This module helps you to learn the basics of xyz</p>
                        </li>
                        <li className="coursecontentrow">
                            <h3 className="coursecontentrowtitle">Random</h3>
                            <p className="coursecontentrowtext">This module helps you to learn the basics of xyz</p>
                        </li>
                        <li className="coursecontentrow">
                            <h3 className="coursecontentrowtitle">Random</h3>
                            <p className="coursecontentrowtext">This module helps you to learn the basics of xyz</p>
                        </li>
                        <li className="coursecontentrow">
                            <h3 className="coursecontentrowtitle">Random</h3>
                            <p className="coursecontentrowtext">This module helps you to learn the basics of xyz</p>
                        </li>
                        <li className="coursecontentrow">
                            <h3 className="coursecontentrowtitle">Random</h3>
                            <p className="coursecontentrowtext">This module helps you to learn the basics of xyz</p>
                        </li>
                    </li>
                    </ul>
                </div>
                
                {/* <hr/> */}
                <div className="tutorprofiledetailsecondhead5"> Demo Videos </div>

                <div className="tutorprofiledetailsecondvideo">
                <ReactPlayer 
                    width="190px"
                    height="190px"
                    controls
                    url="https://www.youtube.com/watch?v=RdrTxPQ2xRY"
                    onReady={() => console.log('onReady callback')}
                    onStart={() => console.log('onstart callback')}
                    onPause={() => console.log('onpause callback')}
                    onEnded={() => console.log('onended callback')}
                    onError={() => console.log('onerror callback')}
                    className="tutorprofiledetailsecondvideoview"
                    />
                    <ReactPlayer 
                    width="190px"
                    height="190px"
                    controls
                    url="https://www.youtube.com/watch?v=RdrTxPQ2xRY"
                    onReady={() => console.log('onReady callback')}
                    onStart={() => console.log('onstart callback')}
                    onPause={() => console.log('onpause callback')}
                    onEnded={() => console.log('onended callback')}
                    onError={() => console.log('onerror callback')}
                    className="tutorprofiledetailsecondvideoview"
                    />
                    <ReactPlayer 
                    width="190px"
                    height="190px"
                    controls
                    url="https://www.youtube.com/watch?v=RdrTxPQ2xRY"
                    onReady={() => console.log('onReady callback')}
                    onStart={() => console.log('onstart callback')}
                    onPause={() => console.log('onpause callback')}
                    onEnded={() => console.log('onended callback')}
                    onError={() => console.log('onerror callback')}
                    className="tutorprofiledetailsecondvideoview"
                    />
                    <ReactPlayer 
                    width="190px"
                    height="190px"
                    controls
                    url="https://www.youtube.com/watch?v=RdrTxPQ2xRY"
                    onReady={() => console.log('onReady callback')}
                    onStart={() => console.log('onstart callback')}
                    onPause={() => console.log('onpause callback')}
                    onEnded={() => console.log('onended callback')}
                    onError={() => console.log('onerror callback')}
                    className="tutorprofiledetailsecondvideoview"
                    />
                </div>

                <div className="tutorprofiledetailsecondhead2">Eligibility and Course Fee </div>
                {/* <hr/> */}
                <div className="tutorprofiledetailsecondtext2">
                    <ul>
                        <li>⟹ Random </li>
                        <li>⟹ Random</li>
                        <li>⟹ Random</li>
                        <li>⟹ Random</li>
                    </ul>
                </div>

            </div>
        </div>
    )
)
    </>
    )
}

export default TutorProfileDetail

