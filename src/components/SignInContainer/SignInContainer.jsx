import { useCallback } from "react";
import TextField from "../TextField/TextField";
import { useNavigate } from "react-router-dom";
import FrameComponent from "./FrameComponent";
import "./SignInContainer.css";
const SignInContainer = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSignUpText1Click = useCallback(() => {
    navigate("/signup-mail");
  }, [navigate]);

  return (
    <div className="sign-in-container">
      <div className="sign-in2">Sign in</div>
      <div className="sign-in-form">
        <TextField
          label="User name or email address"
          icon="/icon1.svg"
          prop="designer@gmail.com"
          icons="/icons.svg"
          textFieldWidth="35.5rem"
          propDisplay="none"
        />
        <div className="password-form1">
          <TextField
            label="Your password"
            icon="/icon1.svg"
            prop="123456"
            icons="/icons.svg"
            textFieldWidth="35.5rem"
            rectangle1Display="unset"
          />
          <div className="forget-your-password">Forget your password</div>
        </div>
        <div className="button-container">
          <div className="button2" onClick={onButtonContainerClick}>
            <div className="icons-container">
              <img className="icons4" alt="" src="/icons2.svg" />
              <div className="sign-up4">Sign in</div>
            </div>
          </div>
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
