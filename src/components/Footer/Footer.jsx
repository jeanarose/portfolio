import React from "react";
import "./Footer.css";

const Footer = (props) => {
  return (
    <footer className="footer pb-6 ">
      <div className="content has-text-centered">
        <p>
          <strong className="">Portfolio</strong> by Jeana Rose
          Mathis. The source code is licensed by
          <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
