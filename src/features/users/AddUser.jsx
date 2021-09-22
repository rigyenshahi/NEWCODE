import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { useState } from "react";
import { userAdded } from "./usersSlice";

export function AddUser() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [userName, setName] = useState("");
  const [userPhoneNumber, setMobile] = useState("");
  const [userEmail, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleMobile = (e) => setMobile(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const handleClick = () => {
    if (userName && userPhoneNumber && userEmail) {
      dispatch(
        userAdded({
          userName,
          userPhoneNumber,
          userEmail,
        })
      );

      setError(null);
      history.push("/");
    } else {
      setError("Fill in all fields");
    }

    setName("");
    setMobile("");
    setEmail("");
  };

  return (
    <form className="container">
      <div className="row">
        <div className="three columns">
          <div>
            <label htmlFor="nameInput">Name: </label>
            <input
              className="u-full-width"
              type="text"
              placeholder="Name"
              id="nameInput"
              onChange={handleName}
              value={userName}
            />
          </div>
          <div>
            <label htmlFor="mobileInput">Mobile: </label>
            <input
              className="u-full-width"
              type="name"
              placeholder="Mobile-Number"
              id="mobileInput"
              onChange={handleMobile}
              value={userPhoneNumber}
            />
          </div>
          <div>
            <label htmlFor="emailInput">Email: </label>
            <input
              className="u-full-width"
              type="email"
              placeholder="test@mailbox.com"
              id="emailInput"
              onChange={handleEmail}
              value={userEmail}
            />
          </div>
          {error && error}
          <button onClick={handleClick} className="button-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
