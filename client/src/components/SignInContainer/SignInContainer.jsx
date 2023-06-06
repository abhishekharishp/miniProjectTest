//import { useCallback, useState } from "react";
//import { useNavigate } from "react-router-dom";
import FrameComponent from "../FrameComponent/FrameComponent";
import "./SignInContainer.css";

const SignInContainer = () => {
 // const navigate = useNavigate();
  

  // const onButtonContainerClick = useCallback(() => {
  //   // Handle sign in logic
  //   console.log("Sign in clicked");
  // }, []);

  // const onSignUpText1Click = useCallback(() => {
  //   navigate("/signup-mail");
  // }, [navigate]);

  
  return (
    <div className="email-container">
      <h1 className="jump-sait">Jump Into SAIT</h1>
      <div className="frm">
        <form action="http://localhost/RDBMS_MINIPROJECT/server/login.php" method="post">
          <p className="input-heading">
            <label htmlFor="user">Username:</label>
            <input type="text" id="user" name="user" />
          </p>
          <p className="input-heading">
            <label htmlFor="pass">Password:</label>
            <input type="password" id="pass" name="pass" />
          </p>
          <p>
            <input type="submit" id="btn" value="Login" />
          </p>
        </form>
      </div>
      <FrameComponent
        socialMediaLogo="/social-media-logo1.svg"
        propAlignItems="flex-start"
        propJustifyContent="flex-start"
        propWidth="35.5rem"
        propCursor="pointer"
      />
    </div>
  );
};

export default SignInContainer;
