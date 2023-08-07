import ProgressBar from "./ProgressBar";
const BackEnd = () => {
    return (
        <div className="pe-3 sm:pe-0 skill-sec">
            <div
                className="card before:bg-[#079992]"
                data-aos="rotate-skill-right"
            >
                <div className="card-body">
                    <ProgressBar name="Node.js" value="70" c="#079992" />
                </div>
            </div>
            <div
                className="card before:bg-[#83348e]"
                data-aos="rotate-skill-left"
            >
                <div className="card-body">
                    <ProgressBar name="Express.js" value="90" c="#83348e" />
                </div>
            </div>
            <div
                className="card before:bg-[#60a3bc]"
                data-aos="rotate-skill-right"
            >
                <div className="card-body">
                    <ProgressBar name="MongoDB" value="85" c="#60a3bc" />
                </div>
            </div>
            <div
                className="card before:bg-[#3c6382]"
                data-aos="rotate-skill-left"
            >
                <div className="card-body">
                    <ProgressBar name="Mongoose" value="80" c="#3c6382" />
                </div>
            </div>
            <div
                className="card before:bg-[#6a89cc]"
                data-aos="rotate-skill-right"
            >
                <div className="card-body">
                    <ProgressBar name="REST API" value="90" c="#6a89cc" />
                </div>
            </div>
            <div
                className="card before:bg-[#4a69bd]"
                data-aos="rotate-skill-left"
            >
                <div className="card-body">
                    <ProgressBar name="Next.js" value="60" c="#4a69bd" />
                </div>
            </div>
            <div
                className="card before:bg-[#1e3799]"
                data-aos="rotate-skill-right"
            >
                <div className="card-body">
                    <ProgressBar name="JWT" value="70" c="#1e3799" />
                </div>
            </div>
            <div
                className="card before:bg-[#cf8947]"
                data-aos="rotate-skill-left"
            >
                <div className="card-body">
                    <ProgressBar name="Node Mailer" value="70" c="#cf8947" />
                </div>
            </div>
            <div
                className="card before:bg-[#e55039]"
                data-aos="rotate-skill-right"
            >
                <div className="card-body">
                    <ProgressBar name="PostMan" value="90" c="#e55039" />
                </div>
            </div>
            <div
                className="card before:bg-[#fa983a]"
                data-aos="rotate-skill-left"
            >
                <div className="card-body">
                    <ProgressBar name="Stripe" value="90" c="#fa983a" />
                </div>
            </div>
        </div>
    );
};

export default BackEnd;
