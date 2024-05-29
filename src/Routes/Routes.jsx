import { createBrowserRouter } from "react-router-dom";
import AddStudents from "../Components/DashboardComponents/AddStudents/AddStudents";
import AddTeachers from "../Components/DashboardComponents/AddTeachers/AddTeachers";
import AllPaymentCalculation from "../Components/DashboardComponents/AllPaymentCalculation/AllPaymentCalculation";
import AllStudents from "../Components/DashboardComponents/AllStudents/AllStudents";
import StudentDetails from "../Components/DashboardComponents/AllStudents/StudentDetails";
import ExamFreePayment from "../Components/DashboardComponents/ExamFreePayment/ExamFreePayment";
import Teachers from "../Components/Teachers/Teachers";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";

import AddHighlightNotice from "../Components/DashboardComponents/AddHighlightNotice/AddHighlightNotice";
import UpdateTeacher from "../Components/DashboardComponents/AdminArea/UpdateTeacher";
import CommitteeSection from "../Components/DashboardComponents/CommitteeSection/CommitteeSection";
import AddNotice from "../Components/DashboardComponents/NoticeBoradAll/AddNotice";
import NoticeBoradAll from "../Components/DashboardComponents/NoticeBoradAll/NoticeBoradAll";
import StaffSection from "../Components/DashboardComponents/StaffSection/StaffSection";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ManageWebsite from "../Pages/Dashboard/ManageWebsite/ManageWebsite";
import NoticeArea from "../Pages/Dashboard/NoticeArea/NoticeArea";
import PaymentArea from "../Pages/Dashboard/PaymentArea/PaymentArea";
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
          return fetch("teachers.json");
        },
      },
      {
        path: "/notice",
        element: <Notice></Notice>,
        loader: async () => {
          return fetch("notice.json");
        },
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },

      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/login",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        {" "}
        <DashboardLayout></DashboardLayout>{" "}
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <ViewProfile></ViewProfile>,
      },
      {
        path: "/dashboard/updateteacher",
        element: <UpdateTeacher></UpdateTeacher>,
      },
      {
        path: "/dashboard/staff",
        element: <TeachersArea></TeachersArea>,
        children: [
          {
            path: "/dashboard/staff",
            element: <Teachers></Teachers>,
          },
          {
            path: "/dashboard/staff/allTeacher",
            element: <Teachers></Teachers>,
          },

          {
            path: "/dashboard/staff/allstaff",
            element: <StaffSection></StaffSection>,
          },
          {
            path: "/dashboard/staff/allcommittee",
            element: <CommitteeSection></CommitteeSection>,
          },
          {
            path: "/dashboard/staff/addnew",
            element: <AddTeachers></AddTeachers>,
          },
        ],
      },
      {
        path: "/dashboard/students",
        element: <StudentsArea></StudentsArea>,
        children: [
          {
            path: "/dashboard/students",
            element: <AllStudents></AllStudents>,
          },
          {
            path: "/dashboard/students/all",
            element: <AllStudents></AllStudents>,
          },
          {
            path: "/dashboard/students/:id",
            element: <StudentDetails></StudentDetails>,
          },

          {
            path: "/dashboard/students/addStudents",
            element: <AddStudents></AddStudents>,
          },
        ],
      },
      {
        path: "/dashboard/payment",
        element: <PaymentArea></PaymentArea>,
        children: [
          {
            path: "/dashboard/payment",
            element: <ExamFreePayment></ExamFreePayment>,
          },
          {
            path: "/dashboard/payment/all",
            element: <ExamFreePayment></ExamFreePayment>,
          },
          {
            path: "/dashboard/payment/allcalculation",
            element: <AllPaymentCalculation></AllPaymentCalculation>,
          },
        ],
      },
      {
        path: "/dashboard/notice",
        element: <NoticeArea></NoticeArea>,
        children: [
          {
            path: "/dashboard/notice",
            element: <NoticeBoradAll></NoticeBoradAll>,
          },
          {
            path: "/dashboard/notice/all",
            element: <NoticeBoradAll></NoticeBoradAll>,
          },

          {
            path: "/dashboard/notice/addnotice",
            element: <AddNotice></AddNotice>,
          },

          {
            path: "/dashboard/notice/highlightnotice",
            element: <AddHighlightNotice></AddHighlightNotice>,
          },
        ],
      },
      {
        path: "/dashboard/managewebsite",
        element: <ManageWebsite></ManageWebsite>,
      },
    ],
  },
]);

export default router;
