import React from 'react';

const TeachersDetails = ({ teacher }) => {
    const { _id, teacherName, image, fatherName, degree, department, gender, religion, teacherPhone, email, facebook, bloodGroup, joining, address } = teacher;

    return (
        <>
            <dialog id={`my_modal_${_id}`} className="modal  fixed">

                <div className="modal-box w-11/12 max-w-5xl ">
                    <div className='flex justify-end'>
                        <form method="dialog">

                            <button className="btn font-bold text-2xl text-red-600">X</button>
                        </form>
                    </div>
                    <div className='grid grid-cols-12  '>
                        <div className='col-span-12 md:col-span-3 lg:col-span-2 '>
                            <img className='rounded-full w-32 h-32  ' src={image} alt="" />
                        </div>
                        <div className='pb-8 col-span-12  md:col-span-9 lg:col-span-10 '>

                            <div className='grid grid-cols-1 md:grid-cols-2 my-2 '>
                                <div className='flex items-center'>
                                    <span className='w-24'>Name</span>

                                    <span>: {teacherName || "N/A"}</span>
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
                                    <span>: {gender || "N/A"}</span>
                                </div>
                            </div>
                            <hr />
                            <div className='grid grid-cols-1 md:grid-cols-2 my-2 '>
                                <div className='flex items-center'>
                                    <span className='w-24'>Degree</span>
                                    <span>: {degree || "N/A"}</span>
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
                                    <span>: {teacherPhone || "N/A"}</span>
                                </div>
                                <hr className='md:hidden my-2' />
                                <div className='flex items-center'>
                                    <span className='w-24'>Email</span>
                                    <span>: {email || "N/A"}</span>
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
                                    <span>: {facebook || "N/A"}</span>
                                </div>

                            </div>
                            <hr />


                        </div>
                    </div>




                </div>
            </dialog>
        </>
    );
};

export default TeachersDetails;