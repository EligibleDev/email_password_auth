import { createBrowserRouter } from "react-router-dom";
import MyLayout from "../Layouts/MyLayout";
import Home from "../Pages/Home/Home";

const MyRouter = createBrowserRouter([
    {
        path: "/",
        element: <MyLayout/>,
        children: [
            {
                path: "/", 
                element: <Home/>
            }
        ]
    }
])

export default MyRouter;