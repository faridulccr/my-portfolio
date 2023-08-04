import ProgressBar from "./ProgressBar";

const Tools = () => {
    return (
        <div className="pe-10 tools-container">
            <ProgressBar name="Vs Code" value="95" c="#079992" />
            <ProgressBar name="Chrome DevTools" value="90" c="#38ada9" />
            <ProgressBar name="Git & Github" value="80" c="#78e08f" />
            <ProgressBar name="Firebase" value="90" c="#b8e994" />
            <ProgressBar name="JWT" value="90" c="#82ccdd" />
            <ProgressBar name="npm" value="80" c="#60a3bc" />
            <ProgressBar name="Docker" value="30" c="#3c6382" />
            <ProgressBar name="Netlify" value="80" c="#3c6382" />
            <ProgressBar name="Heroku" value="80" c="#0a3d62" />
            <ProgressBar name="Surge" value="80" c="#6a89cc" />
            <ProgressBar name="PhotoShop" value="50" c="#4a69bd" />
        </div>
    );
};

export default Tools;
