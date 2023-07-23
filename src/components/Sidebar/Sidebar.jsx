import {
    faFacebook,
    faGithub,
    faLinkedin,
    faSkype,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import LogoF from "../../assets/images/Faridul.png";
import ActiveRoute from "../active-route/ActiveRoute";
import "./Sidebar.scss";

const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo block" to="/">
                <img className="logoF" src={LogoF} alt="logo" />
                <h2 className="sub-logo">
                    <span>F</span>
                    <span>A</span>
                    <span>R</span>
                    <span>I</span>
                    <span>D</span>
                </h2>
            </Link>

            <nav>
                <ActiveRoute to="/">
                    <FontAwesomeIcon icon={faHome} />
                </ActiveRoute>
                <ActiveRoute className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} />
                </ActiveRoute>
                <ActiveRoute className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} />
                </ActiveRoute>
            </nav>

            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/md-faridul-islam-aa5207249"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#7f8fa6" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.github.com/faridulccr"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#7f8fa6" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.youtube.com/channel/UC-lDYI15DaoW8lEImwqWBAQ"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faYoutube} color="#7f8fa6" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.facebook.com/mdfaridul.islam.5494"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faFacebook} color="#7f8fa6" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://join.skype.com/invite/x14R5C7OgSmg"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faSkype} color="#7f8fa6" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
