import { useEffect, useState } from "react";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";
import ProgressBar from "./ProgressBar";

const Tools = () => {
    const [letterClass, setLetterClass] = useState("text-animate");
    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000);
    }, []);

    return (
        <div className="tools-container">
            <div className="relative">
                <p className="skills">
                    <AnimatedLetters
                        letterClass={letterClass}
                        text="Tools"
                        id={1}
                    />
                </p>

                <div className="pe-3 sm:pe-0 skill-sec">
                    <div className="card before:bg-[#079992]">
                        <div className="card-body">
                            <ProgressBar
                                name="Vs Code"
                                value="95"
                                c="#079992"
                            />
                        </div>
                    </div>
                    <div className="card before:bg-[#38ada9]">
                        <div className="card-body">
                            <ProgressBar
                                name="Chrome DevTools"
                                value="90"
                                c="#38ada9"
                            />
                        </div>
                    </div>
                    <div className="card before:bg-[#4bc465]">
                        <div className="card-body">
                            <ProgressBar
                                name="Git & Github"
                                value="80"
                                c="#4bc465"
                            />
                        </div>
                    </div>

                    <div className="card before:bg-[#457224]">
                        <div className="card-body">
                            <ProgressBar
                                name="Firebase"
                                value="90"
                                c="#457224"
                            />
                        </div>
                    </div>
                    <div className="card before:bg-[#82ccdd]">
                        <div className="card-body">
                            <ProgressBar name="JWT" value="90" c="#82ccdd" />
                        </div>
                    </div>
                    <div className="card before:bg-[#60a3bc]">
                        <div className="card-body">
                            <ProgressBar name="npm" value="80" c="#60a3bc" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative">
                <p className="skills" id="tool-2">
                    <AnimatedLetters
                        letterClass={letterClass}
                        text="Tools"
                        id={1}
                    />
                </p>

                <div className="pe-3 sm:pe-0 skill-sec" id="tool-sec-2">
                    <div className="card before:bg-[#3c6382]">
                        <div className="card-body">
                            <ProgressBar
                                name="Netlify"
                                value="80"
                                c="#3c6382"
                            />
                        </div>
                    </div>
                    <div className="card before:bg-[#0a3d62]">
                        <div className="card-body">
                            <ProgressBar name="Heroku" value="80" c="#0a3d62" />
                        </div>
                    </div>
                    <div className="card before:bg-[#419f89]">
                        <div className="card-body">
                            <ProgressBar name="Vercel" value="80" c="#419f89" />
                        </div>
                    </div>
                    <div className="card before:bg-[#6a89cc]">
                        <div className="card-body">
                            <ProgressBar name="Surge" value="80" c="#6a89cc" />
                        </div>
                    </div>
                    <div className="card before:bg-[#3c6382]">
                        <div className="card-body">
                            <ProgressBar name="Docker" value="30" c="#3c6382" />
                        </div>
                    </div>
                    <div className="card before:bg-[#4a69bd]">
                        <div className="card-body">
                            <ProgressBar
                                name="PhotoShop"
                                value="50"
                                c="#4a69bd"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tools;
