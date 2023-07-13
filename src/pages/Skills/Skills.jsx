import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";
import BackEnd from "./BackEnd";
import FrontEnd from "./FrontEnd";
import "./Skills.scss";

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
            <div className="skill-page">
                <div className="front-end">
                    <h1 className="heading">
                        <AnimatedLetters
                            letterClass={letterClass}
                            text="Front-end Skills"
                            id={1}
                        />
                    </h1>
                    <FrontEnd />
                </div>
                <div className="back-end">
                    <h1 className="heading">
                        <AnimatedLetters
                            letterClass={letterClass}
                            text="Back-end Skills"
                            id={1}
                        />
                    </h1>
                    <BackEnd />
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Skills;
