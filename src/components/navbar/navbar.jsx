import "./navbar.css";
const Navbar = () => {
  return (
    <div className="headersticky">
      <div className="divmx-auto1">
        <div className="divflex5">
          <div className="navhidden">
            <div className="divt-16">
              <div className="learn">Resources</div>
              <img className="svg-icon3" alt="" src="/svg3.svg" />
            </div>
            <div className="divt-161">
              <div className="learn">Learn</div>
              <img className="svg-icon3" alt="" src="/svg4.svg" />
            </div>
            <div className="learn">Clubs</div>
          </div>
        </div>
        <div className="div8">
        <div className="login1">Login</div>
          <div className="divoverflow-hidden9">
            <div className="divw-full2">
              <div className="get-started">Get started</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
