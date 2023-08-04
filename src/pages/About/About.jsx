import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";
import "./About.scss";
import Logo from "./Logo";

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
                    <div className="gradient-border mt-6 me-5">
                        <a
                            href="https://drive.google.com/file/d/1hGMuRr8mpOaEMlW--EdPWxCoAyKHU7wI/view?usp=drive_link"
                            className="flat-button"
                        >
                            VIEW RESUME
                        </a>
                    </div>
                    <div className="gradient-border">
                        <Link to="/projects" className="flat-button">
                            PROJECTS
                        </Link>
                    </div>
                </div>
                <Logo />
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default About;
