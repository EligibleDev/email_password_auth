import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MyLayout = () => {
    return (
        <>
            <Header/>
            <div className="min-h-screen">
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
};

export default MyLayout;