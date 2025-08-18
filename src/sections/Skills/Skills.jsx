import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";

const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skills="HTML5" />
        <SkillList src={checkMarkIcon} skills="CSS3" />
        <SkillList src={checkMarkIcon} skills="JavaScript ES6" />
        <SkillList src={checkMarkIcon} skills="TypeScript" />
      </div>
      <br />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skills="ReactJS" />
        <SkillList src={checkMarkIcon} skills="NextJs" />
        <SkillList src={checkMarkIcon} skills="Tailwind CSS" />
        <SkillList src={checkMarkIcon} skills="Redux" />
        <SkillList src={checkMarkIcon} skills="Webpack" />
        <SkillList src={checkMarkIcon} skills="Jest" />
      </div>
    </section>
  );
};

export default Skills;
