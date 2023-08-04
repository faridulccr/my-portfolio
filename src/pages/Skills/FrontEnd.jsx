import ProgressBar from "./ProgressBar";

const FrontEnd = () => {
    return (
        <div className="pe-3 sm:pe-0 skill-sec">
            <div className="card before:bg-[#3c6382]">
                <div className="card-body">
                    <ProgressBar name="HTML5" value="90" c="#3c6382" />
                </div>
            </div>
            <div className="card before:bg-[#38ada9]">
                <div className="card-body">
                    <ProgressBar name="CSS3" value="85" c="#38ada9" />
                </div>
            </div>
            <div className="card before:bg-[#e58e26]">
                <div className="card-body">
                    <ProgressBar name="JavaScript" value="85" c="#e58e26" />
                </div>
            </div>
            <div className="card before:bg-[#e55039]">
                <div className="card-body">
                    <ProgressBar name="ES6" value="80" c="#e55039" />
                </div>
            </div>
            <div className="card before:bg-[#eb2f06]">
                <div className="card-body">
                    <ProgressBar name="React.js" value="90" c="#eb2f06" />
                </div>
            </div>
            <div className="card before:bg-[#b71540]">
                <div className="card-body">
                    <ProgressBar name="React Native" value="30" c="#b71540" />
                </div>
            </div>
            <div className="card before:bg-[#6a89cc]">
                <div className="card-body">
                    <ProgressBar name="Next.js" value="60" c="#6a89cc" />
                </div>
            </div>
            <div className="card before:bg-[#4a69bd]">
                <div className="card-body">
                    <ProgressBar name="Sass" value="80" c="#4a69bd" />
                </div>
            </div>
            <div className="card before:bg-[#1e3799]">
                <div className="card-body">
                    <ProgressBar name="BootStrap" value="90" c="#1e3799" />
                </div>
            </div>
            <div className="card before:bg-[#3c6382]">
                <div className="card-body">
                    <ProgressBar name="Tailwind CSS" value="90" c="#3c6382" />
                </div>
            </div>
            <div className="card before:bg-[#0a3d62]">
                <div className="card-body">
                    <ProgressBar name="jQuery" value="70" c="#0a3d62" />
                </div>
            </div>
        </div>
    );
};

export default FrontEnd;
