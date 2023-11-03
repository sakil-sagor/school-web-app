import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavbar from '../SideNavbar/TopNavbar';

const NoticeArea = () => {
    const routes = [
        { id: 1, path: '/dashboard/notice/all', name: 'All Notice' },
        { id: 2, path: '/dashboard/notice/addnotice', name: 'Add-Notice' },
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

export default NoticeArea;