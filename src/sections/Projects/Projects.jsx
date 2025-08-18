import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import ProjectCard from "../../common/ProjectCard";

const Projects = () => {
  return (
    <div>
      <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
          <ProjectCard
            src={viberr}
            link="https://www.github.com"
            h3="Viberr"
            p="Streaming App"
          />
          <ProjectCard
            src={freshBurger}
            link="https://www.github.com"
            h3="Fresh Burger"
            p="Humburger Resturant"
          />
        </div>
      </section>
    </div>
  );
};

export default Projects;
