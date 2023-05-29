import "./Footer.css";
const Footer = () => {
  return (
    <div className="footersection-top-140">
      <div className="divflex3">
        <div className="h3t-64-cta">
          <b className="ready-to-level-container">
            <p className="ready-to-level">Ready to level up your</p>
            <p className="ready-to-level">Academics?</p>
          </b>
        </div>
        <div className="at-32">
          <div className="sign-me-up1">Sign me up</div>
        </div>
      </div>
      <div className="divmx-auto">
        <div className="divflex4">
          <div className="div2">
            <div className="svg" />
            <div className="p9">
              <div className="sait-is-the-container">
                <p className="ready-to-level">{`SAIT is the short for Student Association of `}</p>
                <p className="ready-to-level">{`Information Technology is an association from `}</p>
                <p className="ready-to-level">SOE, Cusat</p>
              </div>
            </div>
            <div className="navflex">
              <img className="agroup-icon" alt="" src="/agroup.svg" />
              <img className="agroup-icon" alt="" src="/agroup1.svg" />
              <img className="agroup-icon" alt="" src="/agroup2.svg" />
            </div>
          </div>
          <div className="pt-14">
            <div className="sait-is-the-container">© Hopscotch 2023</div>
          </div>
        </div>
        <div className="div3">
          <div className="divgrid3">
            <div className="div4">
              <div className="solutions">Solutions</div>
              <div className="divmt-4">
                <div className="freelancers">Freelancers</div>
                <div className="freelancers">Small businesses</div>
                <div className="freelancers">Customers</div>
                <div className="freelancers">Pricing</div>
              </div>
            </div>
            <div className="div5">
              <div className="solutions">Company</div>
              <div className="divmt-41">
                <div className="freelancers">About</div>
                <div className="freelancers">Careers</div>
                <div className="freelancers">Contact</div>
              </div>
            </div>
            <div className="div6">
              <div className="solutions">Features</div>
              <div className="divmt-42">
                <div className="freelancers">Invoicing</div>
                <div className="freelancers">Bill Pay</div>
                <div className="freelancers">Flow</div>
                <div className="freelancers">Integrations</div>
              </div>
            </div>
            <div className="div7">
              <div className="solutions">Education</div>
              <div className="divmt-4">
                <div className="freelancers">Blog</div>
                <div className="freelancers">eBooks</div>
                <div className="freelancers">Guides</div>
                <div className="freelancers">Templates</div>
                <div className="freelancers">Using Hopscotch</div>
              </div>
            </div>
          </div>
          <div className="divsection-top-200">
            <div className="terms-conditions">{`Terms & Conditions`}</div>
            <div className="privacy-policy2">Privacy Policy</div>
            <div className="cookie-policy">Cookie Policy</div>
          </div>
        </div>
      </div>
      <img className="image-icon" alt="" src="/image@2x.png" />
    </div>
  );
};

export default Footer;
