/* eslint-disable react/prop-types */
import Sidebar from "../Sidebar/Sidebar";
import "./Layout.scss";

const Layout = ({ children }) => {
    return (
        <div className="app">
            <Sidebar />
            <div className="page">
                <p className="tags top-tag-html">&lt;html&gt;</p>
                <p className="tags top-tags">&lt;body&gt;</p>
                <div className="min-h-full py-20">{children}</div>
                <p className="tags bottom-tags">&lt;/body&gt;</p>
                <p className="tags bottom-tag-html">&lt;/html&gt;</p>
            </div>
        </div>
    );
};

export default Layout;
