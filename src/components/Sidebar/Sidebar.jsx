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
import LogoF from "../../assets/images/newF2.svg";
import ActiveRoute from "../active-route/ActiveRoute";
import "./Sidebar.scss";

const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo block" to="/">
                <img className="logoF" src={LogoF} alt="logo" />
                <h2 className="sub-logo text-center">Farid</h2>
            </Link>

            <nav>
                <ActiveRoute to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </ActiveRoute>
                <ActiveRoute className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </ActiveRoute>
                <ActiveRoute className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </ActiveRoute>
            </nav>

            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.github.com/faridulccr"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.youtube.com/channel/UC-lDYI15DaoW8lEImwqWBAQ"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.facebook.com/mdfaridul.islam.5494"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.skype.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
