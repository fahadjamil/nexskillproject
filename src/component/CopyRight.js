import React from "react";
import "./CopyRight.css";
import img1 from "./Images/1.svg";
import img2 from "./Images/2.svg";
import img3 from "./Images/3.svg";
import img4 from "./Images/4.svg";

const CopyRight = () => {
  return (
    <div className="copy-right">
      <div className="container mt-2 d-flex justify-content-between">
        <div>
          <p>Copyright © 2020 Nexskill Be Productive.</p>
        </div>
        <div className="row">
          <img className="footer-links" src={img1} alt="img-1" />
          <img className="footer-links" src={img2} alt="img-2" />
          <img className="footer-links" src={img3} alt="img-3" />
          <img className="footer-links" src={img4} alt="img-4" />
        </div>
        <div className="d-flex ">
          <p className="mx-2">Privacy Policy</p>
          <p className="mx-2">Terms of Service</p>
        </div>
      </div>
    </div>
  );
};
export default CopyRight;
