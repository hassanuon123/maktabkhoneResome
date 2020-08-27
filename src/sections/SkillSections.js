import React, { Component } from 'react';
import Fullpage from '../component/FullPage';
import data from '../data.json';

class SkillSections extends Component {
    render() {
        return (
            <Fullpage className="third" color={this.props.color}>
                <h3>
                    {data.sections[1].title}
                </h3>
                <div className="cards-wrapper">
                    {data.sections[1].items.map(skill => {
                        return (
                            <div className="card">
                                <div classname="img-wrapper">
                                    <img src={skill.content.image} alt="" />
                                </div>
                                <div classname="skill-title-wrapper">
                                    <h4>
                                        {skill.content.title}
                                    </h4>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Fullpage>
        );
    }
}

export default SkillSections;