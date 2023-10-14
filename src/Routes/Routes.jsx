import { createBrowserRouter } from "react-router-dom";
import AddTeachers from "../Components/AddTeachers/AddTeachers";
import Teachers from "../Components/Teachers/Teachers";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ViewProfile from "../Pages/Dashboard/SideNavbar/ViewProfile";
import StudentsArea from "../Pages/Dashboard/StudentsArea/StudentsArea";
import ErroPage from "../Pages/ErrorPage/ErroPage";
import Gallery from "../Pages/Gallery/Gallery";
import Home from "../Pages/Home/Home";
import Notice from "../Pages/Notice/Notice";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";

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
            {
                path: "/login",
                element: <Registration></Registration>
            },



        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute> <DashboardLayout></DashboardLayout>  </PrivateRoute>,
        children: [


            {
                path: '/dashboard',
                element: <ViewProfile></ViewProfile>
            },
            {
                path: '/dashboard/addTeachers',
                element: <AddTeachers></AddTeachers>
            },
            {
                path: '/dashboard/studentsArea',
                element: <StudentsArea></StudentsArea>
            },




        ]
    },
]);


export default router;