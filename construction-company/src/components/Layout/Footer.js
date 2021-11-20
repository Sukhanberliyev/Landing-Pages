import React from "react";
import Container from "./Container";

import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer>
      <Container>
        <div className={classes.footerInfo}>
          <div className={classes.companyInfo}>
            <p className={classes.logo}>Group</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et tortor
              gravida non congue tortor dictum elementum. Nullam risus,
              ullamcorper elit lobortis gravida. .{" "}
            </p>
          </div>
          <div className={classes.footerNav}>
            <a href="">About us</a>
            <a href="">Features</a>
            <a href="">Why us</a>
            <a href="">Partners</a>
            <a href="">DNA</a>
          </div>
        </div>
        <div className={classes.copyrights}>
           <p>Copyrights 2021 (c) Group name. All rights reserved.</p>
        </div>
      </Container>
        <span className={classes.line}></span>
    </footer>
  );
};

export default Footer;
