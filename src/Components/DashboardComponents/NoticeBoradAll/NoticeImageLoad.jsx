import React from 'react';

const NoticeImageLoad = ({ notice }) => {
    const { _id, imageUrl } = notice;
    return (
        <dialog id={`my_modal_${_id}`} className="modal  fixed">

            <div className="modal-box w-11/12 max-w-5xl ">
                <div className='flex justify-end sticky top-0'>
                    <form method="dialog">
                        <button className="btn font-bold text-2xl text-white bg-red-600 hover:bg-red-800 ">X</button>
                    </form>
                </div>
                <img src={imageUrl} alt="" />
            </div>
        </dialog>
    );
};

export default NoticeImageLoad;