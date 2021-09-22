import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div>
        <p>Footer</p>
        <hr />
        <div>
          <p>
            &copy;{new Date().getFullYear()} La Trobe University | All rights
            reserved | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
