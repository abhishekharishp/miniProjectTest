import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import EmailContainer from "../../components/EmailContainer";
import "./SignUpMail.css";
const SignUpMail = () => {
  const navigate = useNavigate();

  const onCloseBtnIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="sign-up-mail">
      <div className="sign-up-part">
        <img
          className="close-btn-icon"
          alt=""
          src="/close-btn.svg"
          onClick={onCloseBtnIconClick}
        />
        <EmailContainer />
      </div>
      <div className="image-part" />
    </div>
  );
};

export default SignUpMail;
