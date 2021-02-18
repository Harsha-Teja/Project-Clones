import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/pages/Home';
import Products from './Components/pages/Products';
import Services from './Components/pages/Services';
import Signup from './Components/pages/Signup';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path='/Products' component={Products}/>
        <Route path='/Serivces' component={Services}/>
        <Route path='/Signup' component={Signup}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
