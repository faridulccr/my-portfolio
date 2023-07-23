import ProgressBar from "./ProgressBar";

const FrontEnd = () => {
    return (
        <div className="pe-10 skill-container">
            <ProgressBar name="HTML5" value="90" />
            <ProgressBar name="CSS3" value="85" />
            <ProgressBar name="JavaScript" value="85" />
            <ProgressBar name="ES6" value="80" />
            <ProgressBar name="React.js" value="90" />
            {/* <ProgressBar name="React Native" value="30" /> */}
            <ProgressBar name="Next.js" value="60" />
            <ProgressBar name="Sass" value="80" />
            <ProgressBar name="BootStrap" value="90" />
            <ProgressBar name="Tailwind CSS" value="90" />
            <ProgressBar name="jQuery" value="70" />
            {/* <ProgressBar name="C" value="60" /> */}
        </div>
    );
};

export default FrontEnd;
