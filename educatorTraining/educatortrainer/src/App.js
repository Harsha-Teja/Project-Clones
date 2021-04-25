import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "../src/components/About/About";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Programs from './components/Programs/Programs';
import Experttutors from './components/Programs/Experttutors';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch> 
          <Route path='/' exact component={Home}/>
          <Route path='/Programs' component={Programs}/>
          <Route path='/experttutors' component={Experttutors}/>
          <Route path="/About" component={About}/>
        </Switch> 
        <Footer />
      </Router>
    </>
  );
}

export default App;
