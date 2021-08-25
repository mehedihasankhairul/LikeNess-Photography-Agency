import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './Shared/Navbar/Navbar';
import Footer from './Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
