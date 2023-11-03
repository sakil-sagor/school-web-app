import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NoticeBoradAll from '../../Components/DashboardComponents/NoticeBoradAll/NoticeBoradAll';

const Notice = () => {
    const allNotice = useLoaderData();
    console.log(allNotice)
    return (
        <div className="min-h-[80vh] bg-blue-50">
            <div className="container mx-auto px-2 pb-8">
                <br />
                <NoticeBoradAll></NoticeBoradAll>
            </div>
        </div>
    );
};

export default Notice;