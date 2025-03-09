import { useEffect } from "react";
import { SiMongodb, SiDjango, SiExpress,SiPandas,SiNumpy} from "react-icons/si";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact,faPython,faJs,faNodeJs,} from "@fortawesome/free-brands-svg-icons";

import "./Myskill.css"

const skills = [
    { name: "Python", icon: <FontAwesomeIcon icon={faPython} style={{ color: "#74C0FC", fontSize: "3rem" }} /> },
    { name: "JavaScript", icon: <FontAwesomeIcon icon={faJs} style={{color: "#FFD43B",fontSize: "3rem"}} /> },
    { name: "Pandas", icon: <SiPandas style={{color: "#FFD43B",fontSize: "3rem"}}/> },
    { name: "Numpy", icon:  <SiNumpy style={{ color: "#74C0FC", fontSize: "3rem" }} /> },
    { name: "Node.js", icon: <FontAwesomeIcon icon={faNodeJs} style={{color: "#53ea48",fontSize: "3rem"}} /> },
    { name: "React", icon:<FontAwesomeIcon icon={faReact} style={{ color: "#74C0FC", fontSize: "3rem" }} /> },
    { name: "MongoDB", icon: <SiMongodb style={{ color: "#53ea48", fontSize: "3rem" }}/> },
    { name: "Django", icon: <SiDjango style={{ color: "#74C0FC", fontSize: "3rem" }} /> },
    { name: "Express.js", icon: <SiExpress style={{color: "#FFD43B",fontSize: "3rem"}}/> },
];

function Skills() {
  useEffect(() => {
    const section = document.querySelector(".skills");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
  }, []);

  return (
    <div id='skills' className="skills">
      <div className="head">
      <h2 className="skills-title">My Skills</h2>
      </div>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <span className="skill-icon">{skill.icon}</span>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
