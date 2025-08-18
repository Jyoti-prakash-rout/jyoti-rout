import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const linkdinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  return (
    <section className={styles.container} id="hero">
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile picture" />

        <img
          className={styles.colorMode}
          src={themeIcon}
          onClick={toggleTheme}
          alt="Color mode icon"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Jyoti <br /> Rout
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://linkdin.com" target="_blank">
            <img src={linkdinIcon} alt="Linkdin Icon" />
          </a>
          <a href="https://github.com" target="_blank">
            <img src={githubIcon} alt="Linkdin Icon" />
          </a>
        </span>

        <p className={styles.description}>
          With a passion for developing modern React web apps that provides
          great user experience.
        </p>
        <a href={CV} target="_blank" open>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
