import { useState, useCallback } from "react";
import SignInWithGoogle from "./SignInWithGoogle";
import PortalPopup from "./PortalPopup";
import TextField from "./TextField";
import { useNavigate } from "react-router-dom";
import FrameComponent from "./FrameComponent";
import "./EmailContainer.css";
const EmailContainer = () => {
  const [isSignInWithGoogleOpen, setSignInWithGoogleOpen] = useState(false);
  const navigate = useNavigate();

  const openSignInWithGoogle = useCallback(() => {
    setSignInWithGoogleOpen(true);
  }, []);

  const closeSignInWithGoogle = useCallback(() => {
    setSignInWithGoogleOpen(false);
  }, []);

  const onButtonContainerClick = useCallback(() => {
    navigate("/signup-password");
  }, [navigate]);

  return (
    <>
      <div className="email-container">
        <div className="jump-into-sait1">Jump into Sait</div>
        <div className="email-form">
          <TextField
            label="Email"
            icon="/icon.svg"
            prop="123456"
            icons="/icons.svg"
            textFieldWidth="33rem"
            rectangle1Display="none"
          />
          <div className="button1" onClick={onButtonContainerClick}>
            <div className="icons-group">
              <img className="icons3" alt="" src="/icons1.svg" />
              <div className="sign-up3">Continue</div>
            </div>
          </div>
        </div>
        <div className="divider">
          <div className="divider1" />
          <div className="or">OR</div>
          <div className="divider1" />
        </div>
        <div className="continue-google-button" onClick={openSignInWithGoogle}>
          <FrameComponent socialMediaLogo="/social-media-logo.svg" />
        </div>
      </div>
      {isSignInWithGoogleOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignInWithGoogle}
        >
          <SignInWithGoogle onClose={closeSignInWithGoogle} />
        </PortalPopup>
      )}
    </>
  );
};

export default EmailContainer;
