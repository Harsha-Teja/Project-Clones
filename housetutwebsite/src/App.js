import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home" 
import Findmetutor from "./components/Findmetutor/Findmetutor"
import TutorProfile from "../src/components/TutorProfile/TutorProfile"
import TutorProfileDetail from "../src/components/TutorProfileDetail/TutorProfileDetail"
import Becometutor from "../src/components/BecomeTutor/BecomeTutor"
import About from "../src/components/About/About"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch> 
          <Route path='/' exact component={Home}/>
          <Route path="/findmetutor" component={Findmetutor}/>
          <Route path="/tutorprofile" exact component={TutorProfile}/>
          <Route path="/tutorprofile/:TutorProfileTitleName" component={TutorProfileDetail}/>
          <Route path="/Becometutor" component={Becometutor}/>
          <Route path="/About" component={About}/>
        </Switch> 
        <Footer />
      </Router>
    </>
  );
}

export default App;
