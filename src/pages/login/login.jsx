/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";

import "./Login.css";

function Login() {
  return (
    <div className='login'>
      <div className='signUpOverlay'>
        <img className='icons' alt="" src="/icons.svg" />
        <div className='signUpOverlayChild' />
        <div className='jumpIntoSaitParent'>
          <div className='jumpIntoSaitContainer'>
            <p className='jumpIntoSait'>Jump into Sait</p>
            <p className='jumpIntoSait'>{` `}</p>
          </div>
          <div className='textFieldParent'>
            <div className='textField'>
              <div className='labelParent'>
                <div className='label'>Email</div>
                <div className='passwordHideSee'>
                  <img className='icon' alt="" src="/icon.svg" />
                  <div className='hide'>Hide</div>
                </div>
              </div>
              <div className='textField1'>
                <div className='inputs'>
                  <div className='div'>123456</div>
                  <div className='inputsChild' />
                </div>
                <img className='icons1' alt="" src="/icons1.svg" />
              </div>
              <div className='errorMessage'>Error message</div>
            </div>
            <div className='button'>
              <div className='iconsParent'>
                <img className='icons2' alt="" src="/icons2.svg" />
                <div className='signUp'>Continue</div>
              </div>
            </div>
          </div>
          <div className='frameWrapper'>
            <div className='socialMediaSignuploginWrapper'>
              <div className='socialMediaSignuplogin'>
                <div className='socialMediaLogoParent'>
                  <img
                    className='socialMediaLogo'
                    alt=""
                    src="/social-media-logo.svg"
                  />
                  <div className='div'>Continue with Google</div>
                </div>
              </div>
            </div>
          </div>
          <div className='divider'>
            <div className='divider1' />
            <div className='div'>OR</div>
            <div className='divider1'/>
          </div>
        </div>
      </div>
      <div className='image' />
    </div>
  );
}

export default Login;
