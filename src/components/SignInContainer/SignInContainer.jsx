import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../FrameComponent/FrameComponent";
import "./SignInContainer.css";

const SignInContainer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onButtonContainerClick = useCallback(() => {
    // Handle sign in logic
    console.log("Sign in clicked");
  }, []);

  const onSignUpText1Click = useCallback(() => {
    navigate("/signup-mail");
  }, [navigate]);

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handlePasswordChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  }, []);

  return (
    <div className="sign-in-container">
      <div className="sign-in2">Sign in</div>
      <div className="sign-in-form">
        <form onSubmit={handleSubmit}>
          <div className="text-field2">
            <div className="label-group">
              <div className="label1">User name or email address</div>
              <div className="password-hide-see1" style={{ display: "none" }}>
                <img className="icon1" alt="" src="/icon1.svg" />
                <div className="hide1">Hide</div>
              </div>
            </div>
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              className="div7"
            />
            <div className="error-message1">Error message</div>
          </div>

          <div className="password-form1">
            <div className="text-field2">
              <div className="label-group">
                <div className="label1">Your password</div>
                <div className="password-hide-see1">
                  <img className="icon1" alt="" src="/icon1.svg" />
                  <div className="hide1">Hide</div>
                </div>
              </div>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="div7"
              />
              <div className="error-message1">Error message</div>
            </div>
            <div className="forget-your-password">Forget your password</div>
          </div>

          <div className="button-container">
            <button type="submit" className="button2" onClick={onButtonContainerClick}>
              <div className="icons-container">
                <img className="icons4" alt="" src="/icons2.svg" />
                <div className="sign-up4">Sign in</div>
              </div>
            </button>
            <div className="sign-up-redirect1">
              <div className="text2">
                <div className="dont-have-an-container1">
                  <span className="dont-have-an1">Don’t have an account?</span>
                  <span className="span3">{` `}</span>
                  <span className="span4">{`  `}</span>
                </div>
                <div className="sign-up5" onClick={onSignUpText1Click}>
                  Sign up
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="divider3">
        <div className="divider4" />
        <div className="sign-up4">OR</div>
        <div className="divider4" />
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
