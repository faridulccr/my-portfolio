import ProgressBar from "./ProgressBar";

const Tools = () => {
    return (
        <div className="pe-10 tools-container">
            <ProgressBar name="Vs Code" value="95" />
            <ProgressBar name="Chrome DevTools" value="90" />
            <ProgressBar name="Git & Github" value="80" />
            <ProgressBar name="Firebase" value="90" />
            <ProgressBar name="JWT" value="90" />
            <ProgressBar name="npm" value="80" />
            <ProgressBar name="Docker" value="30" />
            <ProgressBar name="Netlify" value="80" />
            <ProgressBar name="Heroku" value="80" />
            <ProgressBar name="Surge" value="80" />
            <ProgressBar name="PhotoShop" value="50" />
        </div>
    );
};

export default Tools;
