import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import F_letter from "../../assets/images/newF2.svg";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";
import "../../components/AnimatedLetters/AnimatedLetters.scss";
import "./Home.scss";
import Logo from "./Logo";

const Home = () => {
    const [letterClass, setLetterClass] = useState("text-animate");
    const jobArr = [
        " Web  Developer.",
        "JavaScript Developer.",
        "Front-end Developer.",
        "MERN Stack Developer",
        "React  Js Developer.",
        "Back-end Developer.",
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // this function will call at the end of text-animate class's action after 4.5 s
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3500);

        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            5000 // every 5 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div className="container home-page">
            <div className="ps-5 sm:ps-32 mb-20 sm:mb-0">
                <h1 className="heading">
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _2`}>i,</span>
                    <p></p>
                    <span className={`${letterClass} _3`}>I</span>
                    <span className={`${letterClass} _4`}>&apos;m</span>
                    <img className="F-letter" src={F_letter} alt="developer" />
                    <AnimatedLetters
                        letterClass={letterClass}
                        text="aridul islam"
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
                <div className="flex flex-wrap justify-center sm:justify-start gap-5 mt-10">
                    <div className="gradient-border">
                        <Link to="/contact" className="flat-button">
                            CONTACT ME
                        </Link>
                    </div>
                    <div className="gradient-border">
                        <Link to="/about" className="flat-button">
                            ABOUT ME
                        </Link>
                    </div>
                </div>
            </div>

            <Logo />
        </div>
    );
};

export default Home;
