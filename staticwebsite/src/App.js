import './App.css';
import Vacancies from "./vacancies.json"
import {useState} from "react"
import logo from "./school.svg"

function App() {

  const [searchsub, setSearchSub] = useState('')
  const [searchdiv, setSearchDiv] = useState('')

  return (
    <div className="app">
          <h1 className="maintitle">Teacherr Job Mela</h1>
          <h5 className="subtitle">Hello Teachers, here you can find the list of vacancies for the job mela. </h5>
          <p className="description">Please, enter your name, year of experience and subject you teach.
              You will find the list of vacancies that you can apply by clicking on them.
          </p>
          <div className="form">
            <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Search for a subject..."
                        className="formsubject"
                        onChange={event => {setSearchSub(event.target.value)}}
            />
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
                  if (searchdiv === '' || setSearchDiv === ''){
                    return data
                  } else if ( data.subject.toLocaleLowerCase().includes(searchsub.toLocaleLowerCase()) && 
                              data.division.toLocaleLowerCase().includes(searchdiv.toLocaleLowerCase())
                  ){
                    return data
                  }
                  
                }).map((data) => {
                  return (
                    <ul className="details" key={data.id}> 
                    <div className="detailssplit">
                        <div className="detailssplitdata">
                          <li className="detailtitlelist"><span className="detailtitle">School Name:</span> {data.schoolname}</li>
                          <li className="detailtitlelist"><span className="detailtitle">Subject:</span> {data.subject}</li>
                          <li className="detailtitlelist"><span className="detailtitle">Job Role:</span> {data.jobrole}</li>
                          <li className="detailtitlelist"><span className="detailtitle">Division:</span> {data.division}</li>
                          <li className="detailtitlelist"><span className="detailtitle">Location:</span> {data.location}</li>
                        </div>
                        <div className="detailssplitimg">
                          <img src={logo} alt="school logos" className="detailsimg"/>
                        </div>
                    </div>
                      <a href={data.flipgridlink} className="link"><li className="detailtitlelistlink">Upload Resume Here</li></a>  
                    </ul>
                  )
                })}
          </div>
          <small>Made with 🧠 - 💻 by Teacherr</small>
    </div>
  );
}

export default App;
