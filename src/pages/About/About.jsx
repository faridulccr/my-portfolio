import {
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faNodeJs,
    faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./About.scss";

const About = () => {
    const [letterClass, setLetterClass] = useState("text-animate");
    useEffect(() => {
        // this function will call at the end of text-animate class's action after 4.5 s
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000);
    }, []);

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1 className="heading">
                        <AnimatedLetters
                            letterClass={letterClass}
                            text="About Me"
                            id={1}
                        />
                    </h1>
                    {/* how ambitious I am */}
                    <p>
                        I&apos;m a MERN Stack Developer with a strong passion
                        for creating visually appealing and user-friendly
                        websites and have completed my BBA in Accounting and
                        Information System from the National University of
                        Bangladesh in 2019. This academic journey provided me
                        with a solid foundation in both the business and
                        technology aspects of the field.
                    </p>
                    {/* how confident I am */}
                    <p>
                        Aside from programming, I have a keen interest in
                        complex problem-solving and mathematics. I enjoy
                        tackling challenging math problems and even playing
                        chess with strong players. These activities help me
                        sharpen my analytical thinking and enhance my ability to
                        approach problems from different angles.
                    </p>
                    {/* how definition I am */}
                    <p>
                        To summarize, I am a MERN Stack Developer. Alongside my
                        BBA degree, my passion for problem-solving and love for
                        mathematics further enhance my abilities in the field.
                        Once again, I want to express my gratitude for your
                        interest in getting to know me better.
                    </p>
                    <div className="gradient-border mt-6">
                        <a
                            href="https://drive.google.com/file/d/1E8ME7B_dUuHy6XLEoJ3lK49rPic7dDkv/view?usp=drive_link"
                            className="flat-button"
                        >
                            VIEW RESUME
                        </a>
                    </div>
                </div>

                <div className="stage-cube-cont">
                    <div className="cube-spinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon
                                icon={faJsSquare}
                                color="#EFD81D"
                            />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faNodeJs} color="#68a063" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default About;
