import React, { useState } from 'react';

const colorOptions = [{ name: "gray", code: "gray" }, { name: "red", code: "red" }, { name: "green", code: "green" }, { name: "blue", code: "blue" }]
const TopNav = () => {
    const [color, setColor] = useState(colorOptions[0].code);
    const selectOnChange = (event) => {
        setColor(event.target.value)
    }
    return (
        <nav style={{ backgroundColor: color }}>
            <div className="row">
                <div className="col-sm-6 col-xs-12">
                    <ul>
                        <li>
                            <a href="./sections/SkillSections">Skiils</a>
                            <a href="/sections/AboutSections">About</a>
                            <select value={color} onChange={selectOnChange}>
                                {colorOptions.map((elem, index) => {
                                    return <option value={elem.code} key={index}>{elem.name}</option>
                                })}
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default TopNav;
