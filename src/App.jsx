import { Outlet } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout/Layout";

function App() {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
}

export default App;
