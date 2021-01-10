import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import db from "../firebase/firebase"
import Navbar from "../Components/Navbar"


 function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [doctors, setDoctors] = useState([])
  const [doctor, setDoctor] = useState("")
  const [login, setLogin] = useState(false)

  useEffect(() => {
      const unsubscribe = db.collection("doctors").onSnapshot(e => (
      setDoctors(e.docs.map(doc =>(
        {
          id: doc.id,
          data: doc.data()
        }
      )))
    ))
    return () => {
        unsubscribe();
    }
  }, [])

  function validateForm() {
    return userName.length > 0 && password.length > 0;
   
  }

  function handleSubmit(event) {
    event.preventDefault();
    doctors.map(e => {
        if(e.data.username=== userName && e.data.password===password){
            setDoctor(e.id)          
            setLogin(true)
        }
    })
    console.log(login)
  }

  return (
    <div>
      <Navbar />
      <div className="Login">
        {login? 
        <div className="doctor-login">
        <Link to={`/chatwithpatient/${doctor}`} style={{textDecoration: "none"}} >
        Enter
        </Link>    
        </div>    
        :
        <Form onSubmit={handleSubmit} className="form">
          <h2 style={{marginLeft: "15px"}}>Enter Doctor Credentials</h2>
        <Form.Group size="lg" controlId="userName" className="input">
          <Form.Label >User Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{padding: "10px"}}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password" className="input">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{padding: "10px"}}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()} className="button" style={{cursor: "pointer"}}>
          Login
        </Button>
      </Form>
    }
      
    </div>
    </div>
    
  );
}

export default Login