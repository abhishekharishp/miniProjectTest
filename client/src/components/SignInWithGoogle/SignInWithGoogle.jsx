import "./SignInWithGoogle.css";
const SignInWithGoogle = ({ onClose }) => {
  return (
    <div className="sign-in-with-google">
      <div className="account-choice-box">
        <div className="title">
          <div className="title-contents">
            <img className="google-logo-icon" alt="" src="/google-logo.svg" />
            <div className="sign-in-with">Sign in with Google</div>
          </div>
          <div className="px-border-bottom" />
        </div>
        <div className="main-content">
          <div className="header">
            <div className="company-logo">
              <div className="company-logo-child" />
              <div className="div1">✌</div>
            </div>
            <div className="header-text">
              <div className="choose-an-account">Choose an account</div>
              <div className="to-continue-to-container">
                <span>to continue to</span>
                <span className="company"> Company</span>
              </div>
            </div>
          </div>
          <div className="accounts-wrapper">
            <div className="title">
              <div className="account-details">
                <div className="profile-picture">
                  <div className="profile-picture1" />
                  <div className="a">A</div>
                </div>
                <div className="account-info">
                  <div className="account-name">Account Name</div>
                  <div className="emailgmailcom">email@gmail.com</div>
                </div>
              </div>
              <div className="px-border-bottom1">
                <div className="px-border-bottom" />
              </div>
            </div>
            <div className="title">
              <div className="account-details">
                <div className="profile-picture">
                  <div className="profile-picture1" />
                  <div className="a">A</div>
                </div>
                <div className="account-info">
                  <div className="account-name">Account Name</div>
                  <div className="emailgmailcom">email@gmail.com</div>
                </div>
              </div>
              <div className="px-border-bottom1">
                <div className="px-border-bottom" />
              </div>
            </div>
            <div className="another-account-option">
              <div className="another-account-option1">
                <div className="account-icon">
                  <img
                    className="account-icon1"
                    alt=""
                    src="/account-icon.svg"
                  />
                </div>
                <div className="use-another-account">Use another account</div>
              </div>
              <div className="px-border-bottom1">
                <div className="px-border-bottom" />
              </div>
            </div>
          </div>
        </div>
        <div className="description">
          <div className="sign-in-with">
            <p className="to-continue-google">
              To continue, Google will share your name, email address, language
              preference, and profile picture with Company. Before using this
              app, you can review Company’s
            </p>
            <p className="privacy-policy-and-terms-of-se">
              <span className="privacy-policy">privacy policy</span>
              <span className="and">{` and `}</span>
              <span className="terms-of-service">terms of service</span>
              <span className="and">.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInWithGoogle;
