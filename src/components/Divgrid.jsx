import "./Divgrid.css";
const Divgrid = () => {
  return (
    <div className="divgrid2">
      <div className="agroup">
        <img className="svg-icon" alt="" src="/svg@2x.png" />
        <div className="h3t-32">
          <b className="create-and-send-container">
            <p className="create-and-send">Create and send</p>
            <p className="create-and-send">invoices in seconds</p>
          </b>
        </div>
        <div className="join-clubs">Join Clubs</div>
      </div>
      <div className="agroup1">
        <img className="svg-icon" alt="" src="/svg1@2x.png" />
        <div className="h3t-321">
          <b className="create-and-send-container">
            <p className="create-and-send">Pay bills on time</p>
            <p className="create-and-send">without missing a beat</p>
          </b>
        </div>
        <div className="join-circles">Join Circles</div>
      </div>
      <div className="agroup2">
        <img className="svg-icon2" alt="" src="/svg2@2x.png" />
        <div className="h3t-322">
          <b className="create-and-send-container">
            <p className="create-and-send">Control your cash</p>
            <p className="create-and-send">flow on-demand</p>
          </b>
        </div>
        <div className="find-resources">Find Resources</div>
      </div>
    </div>
  );
};

export default Divgrid;
