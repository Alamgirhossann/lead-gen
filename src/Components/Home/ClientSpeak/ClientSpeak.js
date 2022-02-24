import React from "react";
import "../../Home/Style/style.css";
import clientImage from "../../../images/Picture.png";

const ClientSpeak = () => {
  return (
    <div className="m-0 p-0">
      <div className="row m-0">
        <div className="col-md-6 p-0">
          <div className="comment-heading">
            <div className="px-3">
              <h3 className="landing-page-head">Our Client Speak</h3>
              <p style={{ fontSize: "16px" }}>
                Here’s what some of our clients have to say about <br />{" "}
                Leadzen.ai
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 p-0">
          <div className="client-comment">
            <div className="clild-comnt d-flex align-items-center">
              <div className="container-fluid">
                <div className="d-flex">
                  <div className="d-flex align-items-center">
                    <img style={{ height: "50px" }} src={clientImage} alt="" />
                  </div>
                  <div className="ps-3 pt-2">
                    <div>
                      <p style={{ fontWeight: "600" }}>Tejas Jagannath</p>
                      <p>VP Transactions- Unlistedkart</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: "18px" }}>
                    The quality and the comprehensiveness of the information
                    provided by LeadZen.ai is very good. We also use their
                    services to improve our conversion rate. Not only did we get
                    verified information but also it allowed us to get a
                    comprehensive understanding of our leads and what would work
                    for us. A must try product.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSpeak;
