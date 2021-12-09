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
            Our projects are one of the main see sights of any city that we
            build and are recognizable around the world
          </p>
        </div>
        <div className={classes.projects}>
          <div className={classes.row}>
            <div className={classes.column}>
              <div className={classes.project}>
                <div className={classes.projectImage}>
                  <img src="/assets/images/project1.png" alt="project" />
                  <div className={classes.projectDescription}>
                    <p className={classes.projectTitle}>Zkorvjen</p>
                    <p className={classes.projectPlace}>Oslo, Norway</p>
                  </div>
                </div>
              </div>
              <div className={classes.project}>
                <div className={classes.projectImage}>
                  <img src="/assets/images/project2.png" alt="project" />
                  <div className={classes.projectDescription}>
                    <p className={classes.projectTitle}>Yosemite</p>
                    <p className={classes.projectPlace}>San-Francisco, USA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.column}>
              <div className={classes.project}>
                <div className={classes.projectImage}>
                  <img src="/assets/images/project3.png" alt="project" />
                  <div className={classes.projectDescription}>
                    <p className={classes.projectTitle}>Torre d’Espanya</p>
                    <p className={classes.projectPlace}>Madrid, Spain</p>
                  </div>
                </div>
              </div>
              <div className={classes.project}>
                <div className={classes.projectImage}>
                  <img src="/assets/images/project4.png" alt="project" />
                  <div className={classes.projectDescription}>
                    <p className={classes.projectTitle}>Tietgen</p>
                    <p className={classes.projectPlace}>Copenhagen, Denmark</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.column}>
              <div className={classes.project}>
                <div className={classes.projectImage}>
                  <img src="/assets/images/project5.png" alt="project" />
                  <div className={classes.projectDescription}>
                    <p className={classes.projectTitle}>John Dutt Tower</p>
                    <p className={classes.projectPlace}>London, UK</p>
                  </div>
                </div>
              </div>
              <div className={classes.project}>
                <div className={classes.projectImage}>
                  <img src="/assets/images/project6.png" alt="project" />
                  <div className={classes.projectDescription}>
                    <p className={classes.projectTitle}>Zvezda</p>
                    <p className={classes.projectPlace}>Moscow, Russia</p>
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
