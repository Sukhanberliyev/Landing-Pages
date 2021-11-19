import React from "react";

import classes from "./Engineering.module.css"
import Container from "../Layout/Container";

const Engineering = () => {
  return (
    <section>
      <Container>
        <div className={classes.engineeringContent}>
          <h4>FUTURE ORIENTED</h4>
          <h3>
            Engineering the <span>future</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et tortor
            gravida non congue tortor dictum elementum. Nullam risus,
            ullamcorper elit lobortis gravida. .
          </p>
        </div>
        <div className={classes.engineering}>
          <div className={classes.engineeringBox}>
            <img src="/assets/images/engineering1.png" alt="img" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et tortor gravida non congue tortor dictum elementum. Nullam risus, ullamcorper elit lobortis gravida.</p>
          </div>
          <div className={classes.engineeringBox}>
            <img src="/assets/images/engineering2.png" alt="img" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et tortor gravida non congue tortor dictum elementum. Nullam risus, ullamcorper elit lobortis gravida.</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Engineering;
