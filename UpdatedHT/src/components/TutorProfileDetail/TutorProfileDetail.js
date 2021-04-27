import React, {useState} from "react"
import TutorList from "../../TutorsList.json"
import image from "../../Assets/svg/TutorsSvg/ladysitting.svg";
import "./TutorProfileDetail.css"
import ReactPlayer from "react-player"
import HouseTutoring from "../../Assets/images/HouseTutoring.png";
import Modal from 'react-modal'
import { useFormik } from 'formik'
import emailjs from "emailjs-com"

// Emojicons: 🏆 🥇 🥈 🥉 🏅 🎖 🏵 🎗 ✒️ ✏️ ▶️ ✅ ⟹ ⇨ 

Modal.setAppElement('#root')
function TutorProfileDetail (props){
    console.log("[props]",props);
    const {match} = props;
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
        {TutorList.TutorList.map((TutorList) => { 
            if(match.params.TutorProfileTitleName === TutorList.id )
                return ( 
                    <div className="tutorprofiledetail">
                        <div className="tutorprofiledetailone">
                            <img src={image} alt="tutor profile pic" className="tutorprofiledetailoneimage"/>
                            <div className="tutorprofiledetailone1">
                                <div className="tutorprofiledetailone1name">{TutorList.name}</div> 
                                    <div className="tutorprofiledetailone1subject">
                                    <div className="tutorprofiledetailone1subjectdiv">{TutorList.subject[0]} </div>
                                    <div className="tutorprofiledetailone1subjectdiv">{TutorList.subject[1]}</div>
                                    <div className="tutorprofiledetailone1subjectdiv">{TutorList.subject[2]}</div>
                                    <div className="tutorprofiledetailone1subjectdiv">{TutorList.subject[3]}</div>
                                    <div className="tutorprofiledetailone1subjectdiv">{TutorList.subject[4]}</div>
                                    <div className="tutorprofiledetailone1subjectdiv">{TutorList.subject[5]}</div>    
                                    </div>
                                <button className="tutorprofiledetailone1button" onClick={() => setModalIsOpen(true)}>BOOK FREE DEMO</button>
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

                        {/* Second Part View */}

                        <div className="tutorprofiledetailsecond"> 
                            <div className="tutorprofiledetailsecondhead1"> Overview </div>
                            {/* <hr/> */}
                            <div className="tutorprofiledetailsecondtext1">
                                {TutorList.TutorProfileOverview}
                            </div>
                            
                            <div className="tutorprofiledetailsecondhead2">Years of Experience </div>
                            {/* <hr/> */}
                            <div className="tutorprofiledetailsecondtext2">
                                <ul>
                                    <li>⟹ {TutorList.TutorProfileYOE[0]} </li>
                                    <li>⟹ {TutorList.TutorProfileYOE[1]}</li>
                                    <li>⟹ {TutorList.TutorProfileYOE[2]}</li>
                                    <li>⟹ {TutorList.TutorProfileYOE[3]}</li>
                                </ul>
                            </div>

                            <div className="tutorprofiledetailsecondhead3"> Education </div>
                            {/* <hr/> */}

                            <div className="tutorprofiledetailsecondtext3">
                                <li>📜 {TutorList.TutorProfileEducation[0]}</li>
                                <li>📜 {TutorList.TutorProfileEducation[1]}</li>
                                <li>📜 {TutorList.TutorProfileEducation[2]}</li>
                            </div>

                            <div className="tutorprofiledetailsecondhead4"> Verified Info </div>
                            {/* <hr/> */}

                            <div className="tutorprofiledetailsecondtext4">
                                <li>✅ {TutorList.TutorProfileVerified[0]}</li>
                                <li>✅ {TutorList.TutorProfileVerified[1]}</li>
                                <li>✅ {TutorList.TutorProfileVerified[2]}</li>
                            </div>

                            <div className="tutorprofiledetailsecondhead5"> Accolades </div>
                            {/* <hr/> */}

                            <div className="tutorprofiledetailsecondtext5">
                                <li>🏆 {TutorList.TutorProfileAccolades[0]}</li>
                                <li>🏆 {TutorList.TutorProfileAccolades[1]}</li>
                                <li>🏆 {TutorList.TutorProfileAccolades[2]}</li>
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
                        </div>
                    </div>
                )
                }
            )
        }
    </>
    )
}

export default TutorProfileDetail