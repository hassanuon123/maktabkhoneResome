import React, { Component } from 'react';
import Fullpage from '../component/FullPage';
import data from '../data.json';
import { Link, Element } from 'react-scroll';
import DownIcon from '../component/DownIcon';


class AboutSections extends Component {
    render() {
        return (
            <div>
                <Fullpage className="second" color={this.props.color}>
                    <h3>
                        {data.sections[0].title}
                    </h3>
                    <div className="paragraf">
                        {data.sections[0].items.map(p => {
                            return <p>{p.content}</p>;
                        })}
                    </div>
                </Fullpage>
                <Link activeClass="active" to="test2" spy={true} smooth={true} offset={50} duration={500} delay={1}>
                    <DownIcon
                        icon={data.icons.down}
                        onClick={() => console.log("i am working")}
                    />
                </Link>
                <Element name="test2" className="element">
                </Element>
            </div>
        )
    }
}

export default AboutSections;