
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home/Home';
import AuthProvider from './contexts/AuthProvider';
import Header from './component/Shared/Header/Header';
import LogIn from './component/Login/LogIn/LogIn';
import ServiceDetails from './component/ServiceDetails/ServiceDetails';
import Register from './component/Login/Register/Register';
import Treatment from './component/Treatment/Treatment';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Footer from './component/Shared/Footer/Footer';
import About from './component/About/About';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/service">
              <Treatment></Treatment>
            </PrivateRoute>
            <PrivateRoute path='/serviceDetails/:detailsId'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
