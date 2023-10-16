import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavbar from '../SideNavbar/TopNavbar';

const TeachersArea = () => {
    const routes = [
        { id: 1, path: '/dashboard/teachers/all', name: 'All teacher' },
        { id: 2, path: '/dashboard/teachers/addTeacher', name: 'Add Teacher' },



    ];
    return (
        <div>
            <div>
                <TopNavbar routes={routes}></TopNavbar>
            </div>
            <Outlet></Outlet>

        </div>
    );
};

export default TeachersArea;