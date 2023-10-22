import { createBrowserRouter } from "react-router-dom";
import AddStudents from "../Components/DashboardComponents/AddStudents/AddStudents";
import AddTeachers from "../Components/DashboardComponents/AddTeachers/AddTeachers";
import AllStudents from "../Components/DashboardComponents/AllStudents/AllStudents";
import StudentDetails from "../Components/DashboardComponents/AllStudents/StudentDetails";
import Teachers from "../Components/Teachers/Teachers";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ViewProfile from "../Pages/Dashboard/SideNavbar/ViewProfile";
import StudentsArea from "../Pages/Dashboard/StudentsArea/StudentsArea";
import TeachersArea from "../Pages/Dashboard/TeachersArea/TeachersArea";
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
                path: '/dashboard/teachers',
                element: <TeachersArea></TeachersArea>,
                children: [


                    {
                        path: '/dashboard/teachers',
                        element: <Teachers></Teachers>,

                    },
                    {
                        path: '/dashboard/teachers/all',
                        element: <Teachers></Teachers>,

                    },

                    {
                        path: '/dashboard/teachers/addTeacher',
                        element: <AddTeachers></AddTeachers>
                    },
                ]
            },
            {
                path: '/dashboard/students',
                element: <StudentsArea></StudentsArea>,
                children: [


                    {
                        path: '/dashboard/students',
                        element: <AllStudents></AllStudents>,

                    },
                    {
                        path: '/dashboard/students/all',
                        element: <AllStudents></AllStudents>,

                    },
                    {
                        path: '/dashboard/students/:id',
                        element: <StudentDetails></StudentDetails>,

                    },

                    {
                        path: '/dashboard/students/addStudents',
                        element: <AddStudents></AddStudents>
                    },
                ]
            },




        ]
    },
]);


export default router;