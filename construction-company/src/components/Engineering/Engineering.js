import React from "react";

import classes from "./Engineering.module.css";
import Container from "../Layout/Container";

const Engineering = () => {
  return (
    <section>
      <Container>
        <div className={classes.engineeringContent}>
          <h4>BUILDINGS OF TOMORROW</h4>
          <h3>
            Engineering the <span>future</span>
          </h3>
          <p>
            The priority for our industry is to provide the essential building
            and infrastructure services needed to secure a sustainable future.
          </p>
        </div>
        <div className={classes.engineering}>
          <div className={classes.engineeringBox}>
            <img src="/assets/images/engineering1.png" alt="img" />
            <p>
              Whether you are an established enterprise or a growing company,
              discover the best flexible spaces and solution to move your
              business forward.
            </p>
          </div>
          <div className={classes.engineeringBox}>
            <img src="/assets/images/engineering2.png" alt="img" />
            <p>
              For companies of all sizes, Flex Architecture provides the global scale
              and flexibility to help put your business on a map, adapt and
              shine.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Engineering;
