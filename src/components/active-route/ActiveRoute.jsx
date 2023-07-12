/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const ActiveRoute = ({ to, children, ...rest }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => (isActive ? "active" : "")}
            {...rest}
        >
            {children}
        </NavLink>
    );
};

export default ActiveRoute;
