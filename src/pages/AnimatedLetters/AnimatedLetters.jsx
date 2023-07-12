/* eslint-disable react/prop-types */
import "./AnimatedLetters.scss";

const AnimatedLetters = ({ letterClass = "", text = "", id = 1 }) => {
    const strArray = text.split("");

    return (
        <>
            {strArray.map((char, index) => (
                <span
                    key={char + index}
                    className={`${letterClass} _${index + id}`}
                >
                    {char}
                </span>
            ))}
        </>
    );
};

export default AnimatedLetters;
