import Loader from "react-loaders";
import { Link } from "react-router-dom";
import logoF from "../../assets/images/Faridul.png";
import "./Logo.scss";

const Logo = () => {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch("Mern-Stack.pdf").then((res) => {
            res.blob().then((blob) => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Faridul-Islam-(MERN).pdf";
                alink.click();
            });
        });
    };
    return (
        <div>
            <div className="box">
                <div className="logo-container">
                    <img
                        className="solid-logo"
                        src={logoF}
                        alt="faridul's face"
                    />
                </div>
            </div>

            <div className="gradient-border block mx-auto mt-5">
                <button className="flat-button" onClick={onButtonClick}>
                    DOWNLOAD RESUME
                </button>
            </div>
            <div className="flex justify-center flex-wrap gap-5 mt-5">
                <div className="gradient-border">
                    <Link to="/skills" className="flat-button">
                        VIEW SKILLS
                    </Link>
                </div>
                <div className="gradient-border">
                    <Link to="/projects" className="flat-button">
                        VIEW PROJECTS
                    </Link>
                </div>
            </div>

            <Loader type="pacman" />
        </div>
    );
};

export default Logo;
