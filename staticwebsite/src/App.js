import './App.css';
import Vacancies from "./vacancies.json"
import {useState} from "react"
import logo from "./school.svg"
import teacherrlogo from "./logo.png"

function App() {

  const [searchsub, setSearchSub] = useState('')
  const [searchdiv, setSearchDiv] = useState('')

  return (
    <div className="app">
          <img src={teacherrlogo} alt="teacherr logo" className="mainlogo"/>
          <h1 className="maintitle">Welcome to Teacherr Job Mela 2021!!</h1>
          <h5 className="subtitle">Teacherr Job Mela is an online job fair created for teachers looking  for high paying teaching jobs.  . </h5>
          <p className="description">Find your dream teaching job in 2 steps! </p>
          <p className="description">
                1) Enter the subject and division that you teach.
                2) Discover teaching jobs and click on the "Upload Resume Here" to submit your video resume.
          </p>
          <div className="form">
            <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Enter the subject you teach"
                        className="formsubject"
                        onChange={event => {setSearchSub(event.target.value)}}
            />
            </div>
            <div className="form">
            <select
                        id="division"
                        name="division"
                        className="formdivision"
                        onChange={event => {setSearchDiv(event.target.value)}}
                    >
                        <option value="" label="Select a Education Level" />
                        <option value="High School" label="High School" />
                        <option value="Leadership" label="Leadership" />
                        <option value="Middle School" label="Middle School" />
                        <option value="Non-Teaching" label="Non-Teaching" />
                        <option value="Pre Primary" label="Pre Primary" />
                        <option value="Primary" label="Primary" />
            </select>
          </div>
          <div className="container">
                {Vacancies.Vacancies.filter((data) => {
                  if (searchdiv === '' || searchsub === ''){
                    return data
                  }
                  else if (data.jobrole.toLocaleLowerCase().includes(searchsub.toLocaleLowerCase()) && searchdiv === ''
                  ){
                    return data
                  } 
                  else if ( data.jobrole.toLocaleLowerCase().includes(searchsub.toLocaleLowerCase()) && 
                              (data.division === searchdiv)
                  ){
                    return data
                  } 
                }).map((data) => {
                  return (
                    <ul className="details" key={data.id}> 
                    <div className="detailssplit">
                        <div className="detailssplitdata">
                          <li className="detailtitlelist"><span className="detailtitle">Institute Name:</span> {data.schoolname}</li>
                          <li className="detailtitlelist"><span className="detailtitle">Job Role:</span> {data.jobrole}</li>
                          <li className="detailtitlelist"><span className="detailtitle">Division:</span> {data.division}</li>
                          <li className="detailtitlelist"><span className="detailtitle">Location:</span> {data.location}</li>
                        </div>
                        <div className="detailssplitimg">
                          <img src={logo} alt="school logos" className="detailsimg"/>
                        </div>
                    </div>
                      <a href={data.flipgridlink} className="link" target="_blank" rel="noreferrer"><li className="detailtitlelistlink">Upload Resume Here</li></a>  
                    </ul>
                  )
                })}
          </div>
          <small>Made with 🧠 - 💻 by Teacherr</small>
    </div>
  );
}

export default App;
