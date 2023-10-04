import { createBrowserRouter } from "react-router-dom";
import MyLayout from "../../Layouts/MyLayout/MyLayout";
import Home from "../../Pages/Home/Home";
import Shop from "../../Pages/Shop/Shop";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

const MyRouter = createBrowserRouter([
    {
        path: "/",
        element: <MyLayout/>,
        children: [
            {
                path: "/", 
                element: <Home/>
            },
            {
                path: "/shop",
                element: <Shop/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/sign-up",
                element: <SignUp/>
            }
        ]
    }
])

export default MyRouter;