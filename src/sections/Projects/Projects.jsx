import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import crypto from "../../assets/crypto-place-2.png";
import dice from "../../assets/dice-icon.png";
import movie from "../../assets/movies4u_logo.png";
const Projects = () => {
  return (
    <div>
      <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
          <ProjectCard
            src={crypto}
            target="_blank"
            link="https://crypto-2tracker.netlify.app/"
            h3="Crypto Place"
            p="Crypto Tracker"
          />
          <ProjectCard
            src={dice}
            target="_blank"
            link="https://dice-2game.netlify.app/"
            h3="Guess Number"
            p="Dice Game"
          />
          <ProjectCard
            src={movie}
            target="_blank"
            link=""
            h3="Movies4u"
            p="Filter Latest Movies"
          />
        </div>
      </section>
    </div>
  );
};

export default Projects;
