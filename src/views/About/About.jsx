import React from "react";
import style from "./about.module.css";
import { Link } from "react-router-dom";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import aboutImage from "../../../src/img/about.png";

export default function About() {
  return (
    <div className={style.container}>
      <div className={style.name}>
        <h1>GREIDY PEÑA</h1>
      </div>
      <div className={style.containerAbout}>
        <div className={style.info}>
          <p>
            👩🏻‍💻 I am a Full-Stack developer with over three years of experience
            in the technology and software development field. Throughout my
            career, I have acquired skills in web application development using
            Laravel, React JS, Node JS, MySQL, and PostgreSQL.
          </p>
          <p>
            I consider myself as a passionate person about technology and
            constant learning, always searching for new trends and tools to stay
            updated in this area. My goal is to contribute my skills and
            knowledge to solve problems in any project I face. 📚
          </p>

          <div>
            <Link
              className={style.brandIcon}
              to="https://www.linkedin.com/in/greidypena/"
              target="#"
            >
              <FontAwesomeIcon className="" icon={faLinkedin} />
            </Link>
            <Link
              className={style.brandIcon}
              to="https://github.com/greidykth"
              target="#"
            >
              <FontAwesomeIcon className="" icon={faGithub} />
            </Link>
          </div>
        </div>
        <div className={style.aboutImage}>
          <img src={aboutImage} />
        </div>
      </div>
    </div>
  );
}
