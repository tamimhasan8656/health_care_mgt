import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from "./pages/SignIn"
import DoctorPage from "./pages/DoctorPage"
import Chat from "./pages/Chat"
import Login from "./pages/SignInDoctor"
import ChatWithPatient from "./pages/ChatWithPatient"
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/sign-up' component={SignUp} />
         <Route path='/sign-in' component={SignIn} />
         <Route path='/doctors' component={DoctorPage} />
         <Route path='/chat/:doctorID' component={Chat} />
         <Route path='/chatwithpatient/:doctorID' component={ChatWithPatient} />
         <Route path='/signinasdoctor' component={Login} /> 
        </Switch>
      </Router>
    </>
  );
}

export default App;