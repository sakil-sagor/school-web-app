import React from 'react';

const TeachersDetails = ({ teacher }) => {
    const { id, fullName, fatherName, education, department, sex, religion, social, bloodGroup, joining, address } = teacher;

    return (
        <>
            <dialog id={`my_modal_${id}`} className="modal  fixed">

                <div className="modal-box w-11/12 max-w-5xl ">
                    <div className='flex justify-end'>
                        <form method="dialog">

                            <button className="btn font-bold text-2xl text-red-600">X</button>
                        </form>
                    </div>
                    <div className='pb-8'>

                        <div className='grid grid-cols-1 md:grid-cols-2 my-2 '>
                            <div className='flex items-center'>
                                <span className='w-24'>Name</span>

                                <span>: {fullName || "N/A"}</span>
                            </div>
                            <hr className='md:hidden my-2' />
                            <div className='flex items-center'>
                                <span className='w-24'>father Name</span>
                                <span>: {fatherName || "N/A"}</span>
                            </div>
                        </div>
                        <hr />
                        <div className='grid grid-cols-1 md:grid-cols-2 my-2 '>
                            <div className='flex items-center'>
                                <span className='w-24'>Department</span>
                                <span>: {department || "N/A"}</span>
                            </div>
                            <hr className='md:hidden my-2' />
                            <div className='flex items-center'>
                                <span className='w-24'>Religion</span>
                                <span>: {religion || "N/A"}</span>
                            </div>
                        </div>
                        <hr />
                        <div className='grid grid-cols-1 md:grid-cols-2 my-2 '>
                            <div className='flex items-center'>
                                <span className='w-24'>joining</span>
                                <span>: {joining || "N/A"}</span>
                            </div>
                            <hr className='md:hidden my-2' />
                            <div className='flex items-center'>
                                <span className='w-24'>Gender</span>
                                <span>: {sex || "N/A"}</span>
                            </div>
                        </div>
                        <hr />
                        <div className='grid grid-cols-1 md:grid-cols-2 my-2 '>
                            <div className='flex items-center'>
                                <span className='w-24'>Degree</span>
                                <span>: {education || "N/A"}</span>
                            </div>
                            <hr className='md:hidden my-2' />
                            <div className='flex items-center'>
                                <span className='w-24'>Blood Group</span>
                                <span>: {bloodGroup || "N/A"}</span>
                            </div>
                        </div>
                        <hr />
                        <div className='grid grid-cols-1 md:grid-cols-2 my-2 '>
                            <div className='flex items-center'>
                                <span className='w-24'>Phone </span>
                                <span>: {social?.phone || "N/A"}</span>
                            </div>
                            <hr className='md:hidden my-2' />
                            <div className='flex items-center'>
                                <span className='w-24'>Email</span>
                                <span>: {social?.email || "N/A"}</span>
                            </div>
                        </div>
                        <hr />
                        <div className='grid grid-cols-1 md:grid-cols-2 my-2 '>
                            <div className='flex items-center'>
                                <span className='w-24'>Address</span>
                                <span>: {address || "N/A"}</span>
                            </div>
                            <hr className='md:hidden my-2' />
                            <div className='flex items-center'>
                                <span className='w-24'>Facebook</span>
                                <span>: {social?.facebook || "N/A"}</span>
                            </div>

                        </div>
                        <hr />


                    </div>


                </div>
            </dialog>
        </>
    );
};

export default TeachersDetails;