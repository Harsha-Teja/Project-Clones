import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home" 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch> 
          <Route path='/' exact component={Home}/>
        </Switch> 
        
        {/* <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Findmetutor" component={Findmetutor}/>
          <Route path="/Becometutor" component={Becometutor}/>
          <Route path="/About" component={About}/>
        </Switch> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
