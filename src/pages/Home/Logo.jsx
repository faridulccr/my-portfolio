import Loader from "react-loaders";
import { Link } from "react-router-dom";
import logoF from "../../assets/images/Faridul.jpg";
import "./Logo.scss";

const Logo = () => {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch("MERN-Stack.pdf").then((res) => {
            res.blob().then((blob) => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "MERN-Stack.pdf";
                alink.click();
            });
        });
    };
    return (
        <div>
            <div className="logo-container">
                <img className="solid-logo" src={logoF} alt="faridul's face" />
            </div>
            <div className="gradient-border mx-auto mt-5">
                <button className="flat-button" onClick={onButtonClick}>
                    DOWNLOAD RESUME
                </button>
            </div>
            <div className="gradient-border mx-auto mt-5">
                <Link to="/skills" className="flat-button">
                    MY SKILLS
                </Link>
            </div>
            <div className="gradient-border mx-auto mt-5">
                <Link to="/projects" className="flat-button">
                    MY PROJECTS
                </Link>
            </div>

            <Loader type="pacman" />
        </div>
    );
};

export default Logo;
