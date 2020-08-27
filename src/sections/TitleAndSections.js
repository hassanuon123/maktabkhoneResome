import React, { Component } from 'react';
import Fullpage from '../component/FullPage';
import { SocialIcon } from 'react-social-icons';
import data from '../data.json';
import DownIcon from '../component/DownIcon';
import { Link, Element } from 'react-scroll';


class TitleAndSections extends Component {
    state = {
        color: "with"
    }

    render() {
        return (
            <div>
                <Fullpage className="firest" color={this.props.color}>
                    <h1 className="title">
                        {data.title}
                    </h1>
                    <div>
                        {data.subtitle}
                    </div>
                    <div className="icon-wrapper">
                        {
                            Object.keys(data.links).map(key => {
                                return (
                                    <div>
                                        <SocialIcon url={data.links[key]} />
                                    </div>
                                );
                            })}
                    </div>
                </Fullpage>
                <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} delay={1}>
                    <DownIcon
                        icon={data.icons.down}
                        onClick={() => console.log("i am workingi am working")}
                    />
                </Link>
                <Element name="test1" className="element">
                </Element>
            </div>
        )
    }
}

export default TitleAndSections;