import React, { useState } from "react";
import "./login.css";

const LogIn = () => {
  const [emailError, setEmailError] = useState(false);
  const emailValidate = (event) => {
    if (/^[a-zA-Z0-9]+@lapd.online+$/.test(event.target.value))
      setEmailError(false);
    else setEmailError(true);
  };

  return (
    <div className="sign-up-body row justify-content-center">
      <div className="sign-up-form-container ">
        <h4 className="text-center">Welcome!</h4>
        <p className="text-center">Please sign in to continue.</p>
        <form className="w-100 text-left" action="">
          <div className="form-group pt-4">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              onBlur={(env) => emailValidate(env)}
            />
          </div>
          {emailError && (
            <label className="brand-color fw-500">
              enter valid email address ending with @lapd.online
            </label>
          )}

          <div className="form-group pt-4">
            <div>
              <label>Password</label>
              <a className="float-end" href="">
                <label className="brand-color fw-500">Forgot password</label>
              </a>
            </div>
            <input type="password" className="form-control" id="firstName" />
          </div>
          <div className="mt-4 pt-4 text-center">
            <button className="btn btn-orange">Sign in</button>
            <label className="d-block pt-4">
              Want to create an account instead?
            </label>
            <span className="d-flex align-content-center justify-content-center login-orange pt-4">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.709 5.63125C21.099 6.02125 21.099 6.65125 20.709 7.04125L18.879 8.87125L15.129 5.12125L16.959 3.29125C17.1459 3.104 17.3995 2.99876 17.664 2.99876C17.9285 2.99876 18.1822 3.104 18.369 3.29125L20.709 5.63125ZM2.99902 20.5012V17.4613C2.99902 17.3212 3.04902 17.2012 3.14902 17.1012L14.059 6.19125L17.809 9.94125L6.88902 20.8512C6.79902 20.9513 6.66902 21.0012 6.53902 21.0012H3.49902C3.21902 21.0012 2.99902 20.7812 2.99902 20.5012Z"
                  fill="#FF4513"
                />
              </svg>{" "}
              Create an account
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
