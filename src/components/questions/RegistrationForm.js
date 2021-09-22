import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Card from "../ui/Card";
import classes from "./RegistrationForm.module.css";
import { addUserDetails } from "../../../actions/userResponseAction";

import { addQuestionNumber } from "../../../actions/questionAction";

function RegistrationForm() {
  const nameInputRef = useRef();
  const mobileInputRef = useRef();
  const emailInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredMobile = mobileInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    const RegistrationData = {
      name: enteredName,
      mobile: enteredMobile,
      email: enteredEmail,
    };

    console.log(RegistrationData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Name:</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="mobile">Contact Number:</label>
          <input type="text" required id="mobile" ref={mobileInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Contact Email:</label>
          <input type="text" required id="email" ref={emailInputRef} />
        </div>
        <div className={classes.actions}>
          <Link
            to="/choice"
            style={{ textDecoration: "none" }}
            className={classes.btn}
          >
            Submit
          </Link>
        </div>
      </form>
    </Card>
  );
}

export default RegistrationForm;
