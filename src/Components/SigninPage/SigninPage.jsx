import React, { useState } from "react";
import "./SigninPage.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { auth } from "../Firebase/Config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
function SigninPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visibel, setVisible] = useState(<VisibilityOffIcon />);
  const [passwordtype, setPasswordtype] = useState("password");
  const visiblcontroler = () => {
    if (passwordtype == "password") {
      setVisible(<VisibilityIcon />);
      setPasswordtype("text");
    } else {
      setVisible(<VisibilityOffIcon />);
      setPasswordtype("password");
    }
  };
  const signin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="signinPage">
      <div>
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt=""
            className="signinPage_img"
          />
        </Link>
      </div>
      <div className="signinPage_input">
        <div className="signinPage_input_text">
          <h1>Sign-in</h1>
          <form action="">
            <div>
              <label htmlFor="E-mail">E-mail</label>
              <input
                type="text"
                placeholder="Enter your e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">password</label>
              <div className="password_input">
                <input
                  type={passwordtype}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <small onClick={visiblcontroler}>{visibel}</small>
              </div>
            </div>
            <button onClick={signin} type="submit" className="signin_button">
              Signin
            </button>
            <p>
              By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use
              & Sale. Please see our Privacy Notice, our Cookies Notice and our
              Interest-Based Ads Notice.
            </p>
            <button onClick={register} className="createacoutnt_button">
              Create your amazon account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SigninPage;
