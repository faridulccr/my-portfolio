/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./Layout.scss";

const Layout = ({ children }) => {
    const location = useLocation();
    const currentRoute = location.pathname;
    console.log(location.pathname);

    return (
        <>
            <div className={`${currentRoute !== "/skills" ? "app" : ""}`}>
                <div className="page">
                    <p className="tags top-tag-html">&lt;html&gt;</p>
                    <p className="tags top-tags">&lt;body&gt;</p>
                    <div className="min-h-full py-24 sm:py-16">{children}</div>
                    <p className="tags bottom-tags">&lt;/body&gt;</p>
                    <p className="tags bottom-tag-html">&lt;/html&gt;</p>
                </div>
            </div>
            {currentRoute !== "/skills" && <Sidebar />}
        </>
    );
};

export default Layout;
