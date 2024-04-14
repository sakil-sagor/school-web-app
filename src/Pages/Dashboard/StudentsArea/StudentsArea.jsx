import React from "react";
import { Outlet } from "react-router-dom";
import TopNavbar from "../SideNavbar/TopNavbar";

const StudentsArea = () => {
  const routes = [
    { id: 1, path: "/dashboard/students/all", name: "All Students" },
    { id: 2, path: "/dashboard/students/addStudents", name: "Add Students" },
  ];
  return (
    <div>
      <div>
        <div>
          <TopNavbar routes={routes}></TopNavbar>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default StudentsArea;
