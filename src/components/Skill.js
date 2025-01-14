import React, { useEffect, useRef, useState } from "react";
import "./Skill.scss";
import htmlImg from "../assets/skills/html.png";
import cssImg from "../assets/skills/css.png";
import pyImg from "../assets/skills/python.png";
import jsImg from "../assets/skills/javascript.png";
import phpImg from "../assets/skills/php.png";
import djangoImg from "../assets/skills/django.png";
import reactImg from "../assets/skills/react.png";
import vueImg from "../assets/skills/vue.png";
import mysqlImg from "../assets/skills/mysql.png";
import postgresqlImg from "../assets/skills/postgresql.png";
import sqliteImg from "../assets/skills/sqlite.png";
import awsImg from "../assets/skills/aws.png";
import linuxImg from "../assets/skills/linux.png";

const skills = [
  { name: "HTML", percentage: 90, img: htmlImg },
  { name: "CSS", percentage: 80, img: cssImg },
  { name: "Python", percentage: 90, img: pyImg },
  { name: "JavaScript", percentage: 70, img: jsImg },
  { name: "PHP", percentage: 50, img: phpImg },
  { name: "Django", percentage: 80, img: djangoImg },
  { name: "React.js", percentage: 50, img: reactImg },
  { name: "Vue.js", percentage: 50, img: vueImg },
  { name: "MySQL", percentage: 50, img: mysqlImg },
  { name: "PostgreSQL", percentage: 60, img: postgresqlImg },
  { name: "SQLite", percentage: 40, img: sqliteImg },
  { name: "AWS", percentage: 60, img: awsImg },
  { name: "Linux", percentage: 90, img: linuxImg },
];

function Skills() {
  const containerRef = useRef(null);
  const [bubbleData, setBubbleData] = useState([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const initialBubbles = skills.map((skill) => {
      const size = skill.percentage * 1.5; // Bubble size based on percentage
      const speedFactor = 3; // Adjust speed factor for more control
      return {
        ...skill,
        x: Math.random() * (containerWidth - size),
        y: Math.random() * (containerHeight - size),
        vx: (Math.random() - 0.5) * (speedFactor / (size / 20)), // Adjust velocity inversely proportional to size
        vy: (Math.random() - 0.5) * (speedFactor / (size / 20)), // Adjust velocity inversely proportional to size
        size: size,
      };
    });
    setBubbleData(initialBubbles);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateBubbles = () => {
      setBubbleData((prevData) =>
        prevData.map((bubble) => {
          let { x, y, vx, vy, size } = bubble;

          x += vx;
          y += vy;

          if (x < 0) {
            x = 0;
            vx *= -1; // Reverse direction if it hits the left edge
          }
          if (x + size > container.offsetWidth) {
            x = container.offsetWidth - size;
            vx *= -1; // Reverse direction if it hits the right edge
          }
          if (y < 0) {
            y = 0;
            vy *= -1; // Reverse direction if it hits the top edge
          }
          if (y + size > container.offsetHeight) {
            y = container.offsetHeight - size;
            vy *= -1; // Reverse direction if it hits the bottom edge
          }

          return { ...bubble, x, y, vx, vy };
        })
      );

      requestAnimationFrame(updateBubbles);
    };

    requestAnimationFrame(updateBubbles);
  }, []);

  return (
    <div className="Skill" id="skill">
      <div className="texts">
        These are my <span>SKILLS, </span>
        the bigger the bubble, the more knowledgeable I am.
      </div>

      <div className="bubble-container" ref={containerRef}>
        {bubbleData.map((bubble, index) => (
          <div
            key={index}
            className="bubble"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              transform: `translate(${bubble.x}px, ${bubble.y}px)`,
            }}
          >
            {bubble.img && (
              <img src={bubble.img} alt={bubble.name} className="bubble-img" />
            )}
            <span className="label">{bubble.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
