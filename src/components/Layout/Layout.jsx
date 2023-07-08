/* eslint-disable react/prop-types */
import Sidebar from "../../pages/Sidebar/Sidebar";
import "./Layout.scss";

const Layout = ({ children }) => {
    return (
        <div className="App">
            <Sidebar />
            <div className="page">
                <span className="tags top-tags">&lt;body&gt;</span>
                {children}
                <span className="tags bottom-tags">&lt;/body&gt;</span>
                <br />
                <span className="tags bottom-tag-html">&lt;/html&gt;</span>
            </div>
        </div>
    );
};

export default Layout;
