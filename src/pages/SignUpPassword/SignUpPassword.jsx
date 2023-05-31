import { useCallback } from "react";
import { redirect } from "react-router-dom";
import TextField from "../../components/TextField/TextField"
import "./SignUpPassword.css";
const SignUpPassword = () => {
  const navigate = redirect();

  const onCloseButtonIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="sign-up-password">
      <div className="image-part1" />
      <div className="sign-up-part1">
        <img
          className="close-button-icon"
          alt=""
          src="/close-button.svg"
          onClick={onCloseButtonIconClick}
        />
        <div className="password-form-container">
          <div className="jump-into-sait-container">
            <p className="jump-into-sait">Jump into Sait</p>
            <p className="jump-into-sait">{` `}</p>
          </div>
          <div className="password-form">
            <div className="text-field">
              <div className="label-parent">
                <div className="label">Your password</div>
                <div className="password-hide-see">
                  <img className="icon" alt="" src="/icon2.svg" />
                  <div className="hide">Hide</div>
                </div>
              </div>
              <div className="text-field1">
                <div className="inputs">
                  <div className="div2">123456</div>
                  <div className="inputs-child" />
                </div>
                <img className="icons" alt="" />
              </div>
              <div className="error-message">Error message</div>
            </div>
            <TextField
              label="Confirm password"
              icon="/icon2.svg"
              prop="123456"
              icons="/icons3.svg"
              textFieldWidth="35.5rem"
              textFieldZIndex="1"
            />
            <div className="button" onClick={onButtonContainerClick}>
              <div className="icons-parent">
                <img className="icons1" alt="" src="/icons4.svg" />
                <div className="sign-up1">Continue</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPassword;
