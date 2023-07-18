import ProgressBar from "./ProgressBar";

const Tools = () => {
    return (
        <div className="pe-10 grid sm:grid-cols-2 gap-5 sm:gap-40">
            <div>
                <p className="skill-text">Vs Code</p>
                <ProgressBar value="95" />
                <p className="skill-text">Chrome DevTools</p>
                <ProgressBar value="90" />
                <p className="skill-text">Git & Github</p>
                <ProgressBar value="80" />
                <p className="skill-text">Firebase & JWT</p>
                <ProgressBar value="90" />
                <p className="skill-text">npm</p>
                <ProgressBar value="80" />
            </div>
            <div>
                <p className="skill-text">Docker</p>
                <ProgressBar value="30" />
                <p className="skill-text">Netlify</p>
                <ProgressBar value="80" />
                <p className="skill-text">Heroku</p>
                <ProgressBar value="80" />
                <p className="skill-text">Surge</p>
                <ProgressBar value="80" />
                <p className="skill-text">Photoshop</p>
                <ProgressBar value="50" />
            </div>
        </div>
    );
};

export default Tools;
