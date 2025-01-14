import React from "react";
import "./Header.scss";
import { Link } from "react-scroll";

function Header() {
  const scrollOffset = -100;
  const scrollSmooth = true;
  const scrollDuration = 500;

  return (
    <header className="Header">
      <div className="left">
        <span>
          <sub>&lt;ebz /&gt; </sub>
          JOHN EBRIAN MANALO <sup>computer scientist</sup>
        </span>
      </div>
      <nav className="right">
        <ul>
          <li>
            <Link
              to="skill"
              smooth={scrollSmooth}
              offset={scrollOffset}
              duration={scrollDuration}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="project"
              smooth={scrollSmooth}
              offset={scrollOffset}
              duration={scrollDuration}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="career"
              smooth={scrollSmooth}
              offset={scrollOffset}
              duration={scrollDuration}
            >
              Career
            </Link>
          </li>
          <li>
            <Link
              to="certificate"
              smooth={scrollSmooth}
              offset={scrollOffset}
              duration={scrollDuration}
            >
              Certificates
            </Link>
          </li>
          <li>
            <Link
              to="personal"
              smooth={scrollSmooth}
              offset={scrollOffset}
              duration={scrollDuration}
            >
              Personal
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={scrollSmooth}
              offset={scrollOffset}
              duration={scrollDuration}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
