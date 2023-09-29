import React from 'react';
import { FaGraduationCap, FaPaintBrush, FaUserGraduate, FaUserTie } from "react-icons/fa";
import s3img from "../../assets/s3.jpg";
import TopSection from '../TopSection/TopSection';




const AllSummarySection = () => {
    return (
        <div className='py-16'>
            <div className='container mx-auto px-2'>
                <div>
                    <TopSection headline={"Our History makes us Strong"} paragraph={''}></TopSection>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text mt-16'>

                    <div className=' '>
                        <div className='grid grid-cols-2 gap-x-10'>
                            <div className=' bg-white border rounded-md py-8 text-center shadow-lg md:mb-8' >

                                <FaGraduationCap className='mx-auto text-pink-600 text-6xl'></FaGraduationCap>

                                <p className='text-gray-500 font-bold text-4xl my-4'>10+</p>
                                <p className='text-gray-500 font-semibold '>Total Classes</p>

                            </div>
                            <div className=' bg-white border rounded-md py-8 text-center shadow-lg md:mt-8' >

                                <FaUserTie className='mx-auto text-pink-600  text-6xl'></FaUserTie>

                                <p className='text-gray-500 font-bold text-4xl my-4'>500+</p>
                                <p className='text-gray-500 font-semibold '>Students</p>

                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-x-10'>
                            <div className=' bg-white border rounded-md py-8 text-center shadow-lg md:mb-8' >

                                <FaUserGraduate className='mx-auto text-pink-600 text-6xl'></FaUserGraduate>

                                <p className='text-gray-500 font-bold text-4xl my-4'>20+</p>
                                <p className='text-gray-500 font-semibold '>Certified Teacher</p>

                            </div>
                            <div className=' bg-white border rounded-md py-8 text-center shadow-lg md:mt-8' >

                                <FaPaintBrush className='mx-auto text-pink-600 text-6xl'></FaPaintBrush>

                                <p className='text-gray-500 font-bold text-4xl my-4'>1</p>
                                <p className='text-gray-500 font-semibold '>Shift</p>

                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-end text-right justify-center'>
                        <div className='w-2/3'>
                            <img className='  rounded-bl-full' src={s3img} alt="" />
                        </div>
                        <h2 className='font-bold text-3xl text-pink-800 my-8 '> 35 years experience </h2>
                        <div>
                            <p className='font-semibold'>Our schools and classes are designed to provide children with a fun, safe and fun environment in which they can learn about and enjoy their studies. Each class is assigned a teacher who will work very hard to ensure that your child enjoys every moment of their learning process. No matter what level or subjects your child chooses, their education will be tailored specifically for them.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllSummarySection;