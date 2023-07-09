import Loader from "react-loaders";
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
        <>
            <div className="download-btn-con">
                <button className="download-btn" onClick={onButtonClick}>
                    Download <br /> Resume
                </button>
            </div>
            <div className="logo-container">
                <img className="solid-logo" src={logoF} alt="faridul's face" />
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Logo;
