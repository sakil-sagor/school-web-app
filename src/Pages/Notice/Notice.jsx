import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NoticeBoard from '../../Components/NoticeBoard/NoticeBoard';

const Notice = () => {
    const allNotice = useLoaderData();
    console.log(allNotice)
    return (
        <div className="min-h-[80vh] bg-blue-50">
            <div className="container mx-auto px-2">
                <br />
                <NoticeBoard allNotice={allNotice}></NoticeBoard>
            </div>
        </div>
    );
};

export default Notice;