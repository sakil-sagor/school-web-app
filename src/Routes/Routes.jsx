import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErroPage from "../Pages/ErrorPage/ErroPage";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErroPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: async () => {
                    return fetch("/data.json")
                }

            },

        ]
    },
]);


export default router;