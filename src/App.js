import React, { useState } from 'react';
import './App.css';
// import data from './data.json';
// import { SocialIcon } from 'react-social-icons';
// import Fullpage from './component/FullPage';
import TitleAndSections from './sections/TitleAndSections';
import AboutSections from './sections/AboutSections';
import SkillSections from './sections/SkillSections';
import SnowStorm from 'react-snowstorm';
import { Link, Element } from 'react-scroll';

const colorOptions = [{ name: "gray", code: "gray" }, { name: "red", code: "red" }, { name: "green", code: "green" }, { name: "blue", code: "blue" }]


function App() {
  const [color, setColor] = useState(colorOptions[0].code);
  const selectOnChange = (event) => {
    setColor(event.target.value)
  }
  return (
    <div className="App">
      <SnowStorm />
      <div class="navbar" color={color}>
        <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} delay={1}>
          <a href="./sections/AboutSections">About</a>
        </Link>
        <Element name="test1" className="element">
        </Element>
        <Link activeClass="active" to="test2" spy={true} smooth={true} offset={50} duration={500} delay={1}>
          <a href="./sections/SkillSections">SkillS </a>
        </Link>
        <Element name="test2" className="element">
        </Element>
        <Link>
          <a href="#contact">
            <select value={color} onChange={selectOnChange}>
              {colorOptions.map((elem, index) => {
                return <option value={elem.code} key={index}>{elem.name}</option>
              })}
            </select>
          </a>
        </Link>
      </div>
      < TitleAndSections color={color} />
      <AboutSections color={color} />
      <SkillSections color={color} />
    </div >
  );
}

export default App;
