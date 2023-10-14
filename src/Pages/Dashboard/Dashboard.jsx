import React, { useState } from 'react';

const Dashboard = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className='dashboard'>
            {/* Dashboard content goes here */}
            {/* <div className='text-right m-2 sideBar'>
                <button className='bg-blue-800 rounded ' onClick={handleDrawerToggle}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-white w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg></button>
            </div> */}
            {/* <SideDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle}>

                <p>Drawer Content</p>
            </SideDrawer> */}
        </div>
    );
};

export default Dashboard;