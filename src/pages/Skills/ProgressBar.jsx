/* eslint-disable react/prop-types */
const ProgressBar = ({ value, name, c }) => {
    return (
        <div className="pt-14 overflow-hidden">
            <div className="bg-[#718093] relative h-[40px] w-full rounded-2xl">
                <p className="skill-text">{name}</p>
                <div
                    className="absolute top-0 left-0 h-full"
                    style={{ width: value + "%" }}
                >
                    <div
                        className="bg-color absolute top-0 left-0 h-full"
                        style={{ backgroundColor: c }}
                    >
                        <span
                            className="tooltip absolute right-0 bottom-full mb-2 rounded-sm py-1 px-2 text-2xl font-bold"
                            style={{ backgroundColor: c }}
                        >
                            <span
                                className="absolute bottom-[-3px] right-0 h-3 w-2 rounded-bl-[100%]"
                                style={{ backgroundColor: c }}
                            ></span>
                            {value}%
                        </span>
                    </div>
                </div>
            </div>
        </div>

        // <div className="mb-5">
        //     <div className="bg-[#718093] relative h-[10px] w-full rounded-2xl">
        //         <div
        //             className="absolute top-0 left-0 h-full rounded-2xl"
        //             style={{ width: value + "%" }}
        //         >
        //             <div className="bg-color absolute top-0 left-0 h-full rounded-2xl">
        //                 <span className="tooltip absolute -right-4 bottom-full mb-2 rounded-sm py-1 px-2 text-2xl font-bold">
        //                     {/* <span className="absolute bottom-[-2px] left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"></span> */}
        //                     {value}%
        //                 </span>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default ProgressBar;
