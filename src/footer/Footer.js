import React from "react";
import { useState, useEffect } from "react";
import "./Footer.css";
import FooterData from "./FooterData";
import FooterLogo from "./FooterLogo";
import Marquee from "react-fast-marquee";

const Footer = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1355);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1355);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="footer-container">
      <div className="footer-list">
        {isSmallScreen ? (
          <Marquee pauseOnHover={true}>
            {FooterData.map((item) => (
              <div className="footer-item" key={item.id}>
                {item.name}
              </div>
            ))}
          </Marquee>
        ) : (
          FooterData.map((item) => (
            <div className="footer-item" key={item.id}>
              {item.name}
            </div>
          ))
        )}
      </div>
      <div className="footer-logo">
        <FooterLogo />
      </div>
      <div className="footer-para">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
          tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce
          a nunc eget ligula suscipit finibus.{" "}
        </p>
      </div>

      <div className="links">
        <ul>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>RSS</li>
        </ul>
      </div>
      <div className="copyright">
        &copy;2012-2020 Nordic Rose Co.
        <br />
        All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
