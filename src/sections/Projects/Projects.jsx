import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import crypto from "../../assets/crypto-place-2.png";
import dice from "../../assets/dice-icon.png";
const Projects = () => {
  return (
    <div>
      <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
          <ProjectCard
            src={crypto}
            link="crypto-2tracker.netlify.app/"
            h3="Crypto Place"
            p="Crypto Tracker"
          />
          <ProjectCard
            src={dice}
            link="dice-2game.netlify.app/"
            h3="Guess Number"
            p="Dice Game"
          />
        </div>
      </section>
    </div>
  );
};

export default Projects;
