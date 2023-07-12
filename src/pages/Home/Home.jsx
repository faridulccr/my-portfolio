import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import F_letter from "../../assets/images/newF2.svg";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "../AnimatedLetters/AnimatedLetters.scss";
import "./Home.scss";
import Logo from "./Logo";

const Home = () => {
    const [letterClass, setLetterClass] = useState("text-animate");
    const jobArr = [
        " Web  Developer",
        "JavaScript Developer",
        "Front-end Developer.",
        "MERN Stack Developer.",
        "React  Js Developer.",
        "Back-end Developer",
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // this function will call at the end of text-animate class's action after 4.5 s
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3500);

        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            5000 // every 7 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div className="container home-page">
            <div className="ps-32">
                <h1 className="heading">
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _2`}>i,</span>
                    <p></p>
                    <span className={`${letterClass} _3`}>I</span>
                    <span className={`${letterClass} _4`}>&apos;m</span>
                    <img className="F-letter" src={F_letter} alt="developer" />
                    <AnimatedLetters
                        letterClass={letterClass}
                        text="aridul"
                        id={5}
                    />
                    <br />
                    <AnimatedLetters
                        // letterClass={letterClass}
                        letterClass="text-animate2"
                        text={jobArr[index % jobArr.length]}
                        id={index ? 2 : 11}
                    />
                </h1>

                <h2>Full-Stack Web App Developer</h2>

                <div className="gradient-border mt-6">
                    <Link to="/contact" className="flat-button">
                        CONTACT ME
                    </Link>
                </div>
            </div>

            <Logo />
        </div>
    );
};

export default Home;
