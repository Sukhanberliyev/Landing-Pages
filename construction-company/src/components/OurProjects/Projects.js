import React from "react";
import Container from "../Layout/Container";
import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <section>
      <Container>
        <div className={classes.projectContent}>
          <h4>OUR PROJECTS</h4>
          <h3>
            We <span>design</span> the streets
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et tortor
            gravida non congue tortor dictum elementum. Nullam risus,
            ullamcorper elit lobortis gravida. .
          </p>
        </div>
        <div className={classes.projects}>
          <div className={classes.row}>
            <div className={classes.column}>
              <div className={classes.project}>
                <div className={classes.projectImage}>
                  <img src="/assets/images/project1.png" alt="project" />
                  <div className={classes.projectDescription}>
                    <p className={classes.projectTitle}>Project Name</p>
                    <p className={classes.projectPlace}>Project Place</p>
                  </div>
                </div>
              </div>
              <div className={classes.project}>
                <div className={classes.projectImage}>
                  <img src="/assets/images/project2.png" alt="project" />
                  <div className={classes.projectDescription}>
                    <p className={classes.projectTitle}>Project Name</p>
                    <p className={classes.projectPlace}>Project Place</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.column}>
              <div className={classes.project}>
                <div className={classes.projectImage}>
                  <img src="/assets/images/project3.png" alt="project" />
                  <div className={classes.projectDescription}>
                    <p className={classes.projectTitle}>Project Name</p>
                    <p className={classes.projectPlace}>Project Place</p>
                  </div>
                </div>
              </div>
              <div className={classes.project}>
                <div className={classes.projectImage}>
                  <img src="/assets/images/project4.png" alt="project" />
                  <div className={classes.projectDescription}>
                    <p className={classes.projectTitle}>Project Name</p>
                    <p className={classes.projectPlace}>Project Place</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.column}>
              <div className={classes.project}>
                <div className={classes.projectImage}>
                  <img src="/assets/images/project5.png" alt="project" />
                  <div className={classes.projectDescription}>
                    <p className={classes.projectTitle}>Project Name</p>
                    <p className={classes.projectPlace}>Project Place</p>
                  </div>
                </div>
              </div>
              <div className={classes.project}>
                <div className={classes.projectImage}>
                  <img src="/assets/images/project6.png" alt="project" />
                  <div className={classes.projectDescription}>
                    <p className={classes.projectTitle}>Project Name</p>
                    <p className={classes.projectPlace}>Project Place</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
