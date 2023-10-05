import { createBrowserRouter } from "react-router-dom";
import Teachers from "../Components/Teachers/Teachers";
import Main from "../Layout/Main";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ErroPage from "../Pages/ErrorPage/ErroPage";
import Gallery from "../Pages/Gallery/Gallery";
import Home from "../Pages/Home/Home";
import Notice from "../Pages/Notice/Notice";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErroPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/teachers",
                element: <Teachers></Teachers>,
                loader: async () => {
                    return fetch("teachers.json")
                }
            },
            {
                path: "/notice",
                element: <Notice></Notice>,
                loader: async () => {
                    return fetch("notice.json")
                }

            },
            {
                path: "/gallery",
                element: <Gallery></Gallery>
            },
            {
                path: "/contactUs",
                element: <ContactUs></ContactUs>
            },

        ]
    },
]);


export default router;