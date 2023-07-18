import ProgressBar from "./ProgressBar";

const FrontEnd = () => {
    return (
        <div className="pe-10">
            <p className="skill-text">HTML5</p>
            <ProgressBar value="90" />
            <p className="skill-text">CSS3</p>
            <ProgressBar value="85" />
            <p className="skill-text">JavaScript</p>
            <ProgressBar value="85" />
            <p className="skill-text">ES6</p>
            <ProgressBar value="80" />
            <p className="skill-text">React Js</p>
            <ProgressBar value="90" />
            <p className="skill-text">React Native</p>
            <ProgressBar value="30" />
            {/* <p className="skill-text">Next Js</p>
            <ProgressBar value="60" /> */}
            <p className="skill-text">Sass</p>
            <ProgressBar value="80" />
            <p className="skill-text">BootStrap</p>
            <ProgressBar value="90" />
            <p className="skill-text">Tailwind CSS</p>
            <ProgressBar value="90" />
            <p className="skill-text">JQuery</p>
            <ProgressBar value="70" />
            <p className="skill-text">C</p>
            <ProgressBar value="60" />
        </div>
    );
};

export default FrontEnd;
