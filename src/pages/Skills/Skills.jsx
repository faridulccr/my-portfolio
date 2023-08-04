import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";
import BackEnd from "./BackEnd";
import FrontEnd from "./FrontEnd";
import "./Skills.scss";
import Tools from "./Tools";

const Skills = () => {
    const [letterClass, setLetterClass] = useState("text-animate");
    useEffect(() => {
        // this function will call at the end of text-animate class's action after 4.5 s
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000);
    }, []);
    return (
        <>
            <div className="skill-page pe-3">
                <div className="front-end relative">
                    {/* <h1 className="heading">
                        <AnimatedLetters
                            letterClass={letterClass}
                            text="Front-end Skills"
                            id={1}
                        />
                    </h1> */}
                    <p className="skills">
                        <AnimatedLetters
                            letterClass={letterClass}
                            text="Front-end Skills"
                            id={1}
                        />
                    </p>
                    <FrontEnd />
                </div>
                <div className="back-end relative">
                    {/* <h1 className="heading">
                        <AnimatedLetters
                            letterClass={letterClass}
                            text="Back-end Skills"
                            id={1}
                        />
                    </h1> */}
                    <p className="skills">
                        <AnimatedLetters
                            letterClass={letterClass}
                            text="Back-end Skills"
                            id={1}
                        />
                    </p>
                    <BackEnd />
                    <div className="text-center pt-10">
                        <div className="gradient-border">
                            <Link to="/projects" className="flat-button">
                                PROJECTS
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tools mt-10">
                <h1 className="heading w-fit mx-auto">
                    <AnimatedLetters
                        letterClass={letterClass}
                        text="Tools"
                        id={1}
                    />
                </h1>
                <Tools />
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Skills;
