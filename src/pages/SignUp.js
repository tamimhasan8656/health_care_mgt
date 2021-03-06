import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { register } from "../Components/RegistrationStyles";
import { Link } from 'react-router-dom';

import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { Button } from "@material-ui/core";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import ErrorIcon from "@material-ui/icons/Error";
import CloseIcon from "@material-ui/icons/Close";
import Navbar from "../Components/Navbar"

import {auth,  provider } from "../firebase/firebase";


class SignUp extends Component {
  state = {
    email: "",
    password: "",
    passwordConfrim: "",
    hidePassword: true,
    error: null,
    errorOpen: false,
    user: ""
  };

  errorClose = e => {
    this.setState({
      errorOpen: false
    });
  };

  handleChange = name => e => {
    this.setState({
      [name]: e.target.value
    });
  };

  isValid = () => {
    if (this.state.email === "") {
      return false;
    }
    return true;
  };




     login = () => {
      auth.signInWithPopup(provider)
      .then(result =>{
        console.log(result)
        this.setState({
          user: result.user
        })
        localStorage.setItem("profile", JSON.stringify(result.additionalUserInfo.profile))
        localStorage.setItem("LoggedIn", true)
      })
      .catch((error) => alert(error.message))
    }

  render() {
    const { classes } = this.props;
    return (
        <div>
            <Navbar />
        <div className={classes.main}>
        <CssBaseline />
        <div>
        <Paper className={classes.paper}>
          {
            !this.state.user? 
            <h2>Sign Up as a Patient</h2>
            :
            <h2>Signup Complete</h2>
          }
        
          <Avatar className={classes.avatar}>
            <PeopleAltIcon className={classes.icon} />
          </Avatar>
          <div
            className={classes.form}
          >
             {
              !this.state.user? 
              <Button
              disableRipple
              fullWidth
              variant="outlined"
              className={classes.button}
              type="submit"
              onClick={this.login}
              style={{cursor: "pointer"}}
            >
            SIGNUP with Google
            </Button>
            :
            <Link to="/doctors" className={classes.button} style={{textDecoration: "none"}} >
            Enter
            </Link>
            }
            
          </div>

          {this.state.error ? (
            <Snackbar
              variant="error"
              key={this.state.error}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              open={this.state.errorOpen}
              onClose={this.errorClose}
              autoHideDuration={3000}
            >
              <SnackbarContent
                className={classes.error}
                message={
                  <div>
                    <span style={{ marginRight: "8px" }}>
                      <ErrorIcon fontSize="large" color="error" />
                    </span>
                    <span> {this.state.error} </span>
                  </div>
                }
                action={[
                  <IconButton
                    key="close"
                    aria-label="close"
                    onClick={this.errorClose}
                  >
                    <CloseIcon color="error" />
                  </IconButton>
                ]}
              />
            </Snackbar>
          ) : null}
        </Paper>
        </div>
        
      </div>
        </div>
      
    );
  }
}

export default withStyles(register)(SignUp);
