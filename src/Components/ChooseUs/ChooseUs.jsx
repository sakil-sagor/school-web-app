import { BsAwardFill, BsBarChartLine, BsBookFill, BsCodeSlash } from "react-icons/bs";
import { FaCanadianMapleLeaf, FaGraduationCap, FaUnlink } from "react-icons/fa";
import { FaPersonRunning } from "react-icons/fa6";
import TitleBoard from "../TopSection/TitleBoard";
import TopSection from "../TopSection/TopSection";

const ChooseUs = () => {
    return (
        <div className="my-16 ">
            <TopSection headline={"WHY CHOOSE US"} ></TopSection>
            <TitleBoard titleWord={'We have 35 years experience in our Academy'}></TitleBoard>
            <div className="mt-16 ">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    <div className='  border rounded-md py-8 text-center bg-blue-50 shadow-2xl hover:shadow-blue-200  hover:bg-white duration-300' >
                        <div className="">
                            <FaUnlink className='mx-auto text-blue-500 text-6xl  p-2 rounded-full border-4 border-green-900 '></FaUnlink>
                        </div>
                        <h3 className='text-gray-500 font-bold text-2xl my-4'>Online Class Facilities</h3>
                        <p className='text-gray-500 font-semibold '>Students can join online class by register urer id or email.</p>
                    </div>
                    <div className='  border rounded-md py-8 text-center bg-blue-50 shadow-2xl hover:shadow-blue-200  hover:bg-white duration-300' >
                        <div className="">
                            <BsBookFill className='mx-auto text-blue-500 text-6xl  p-2 rounded-full border-4 border-green-900 '></BsBookFill>
                        </div>
                        <h3 className='text-gray-500 font-bold text-2xl my-4'>Modern Book Library</h3>
                        <p className='text-gray-500 font-semibold '>Students can join online class by register urer id or email.</p>
                    </div>
                    <div className='  border rounded-md py-8 text-center bg-blue-50 shadow-2xl hover:shadow-blue-200  hover:bg-white duration-300' >
                        <div className="">
                            <FaGraduationCap className='mx-auto text-blue-500 text-6xl  p-2 rounded-full border-4 border-green-900 '></FaGraduationCap>
                        </div>
                        <h3 className='text-gray-500 font-bold text-2xl my-4'>Be qualified student</h3>
                        <p className='text-gray-500 font-semibold '>Students can join online class by register urer id or email.</p>
                    </div>
                    <div className='  border rounded-md py-8 text-center bg-blue-50 shadow-2xl hover:shadow-blue-200  hover:bg-white duration-300' >
                        <div className="">
                            <BsCodeSlash className='mx-auto text-blue-500 text-6xl  p-2 rounded-full border-4 border-green-900 '></BsCodeSlash>
                        </div>
                        <h3 className='text-gray-500 font-bold text-2xl my-4'>Programming Classes</h3>
                        <p className='text-gray-500 font-semibold '>Students can join online class by register urer id or email.</p>
                    </div>
                    <div className='  border rounded-md py-8 text-center bg-blue-50 shadow-2xl hover:shadow-blue-200  hover:bg-white duration-300' >
                        <div className="">
                            <BsBarChartLine className='mx-auto text-blue-500 text-6xl  p-2 rounded-full border-4 border-green-900 '></BsBarChartLine>
                        </div>
                        <h3 className='text-gray-500 font-bold text-2xl my-4'>Annual festival </h3>
                        <p className='text-gray-500 font-semibold '>Students can join online class by register urer id or email.</p>
                    </div>
                    <div className='  border rounded-md py-8 text-center bg-blue-50 shadow-2xl hover:shadow-blue-200  hover:bg-white duration-300' >
                        <div className="">
                            <BsAwardFill className='mx-auto text-blue-500 text-6xl  p-2 rounded-full border-4 border-green-900 '></BsAwardFill>
                        </div>
                        <h3 className='text-gray-500 font-bold text-2xl my-4'>sports and cultural activities</h3>
                        <p className='text-gray-500 font-semibold '>Students can join online class by register urer id or email.</p>
                    </div>
                    <div className='  border rounded-md py-8 text-center bg-blue-50 shadow-2xl hover:shadow-blue-200  hover:bg-white duration-300' >
                        <div className="">
                            <FaCanadianMapleLeaf className='mx-auto text-blue-500 text-6xl  p-2 rounded-full border-4 border-green-900 '></FaCanadianMapleLeaf>
                        </div>
                        <h3 className='text-gray-500 font-bold text-2xl my-4'> Natural Environment</h3>
                        <p className='text-gray-500 font-semibold '>Students can join online class by register urer id or email.</p>
                    </div>
                    <div className='  border rounded-md py-8 text-center bg-blue-50 shadow-2xl hover:shadow-blue-200  hover:bg-white duration-300' >
                        <div className="">
                            <FaPersonRunning className='mx-auto text-blue-500 text-6xl  p-2 rounded-full border-4 border-green-900 '></FaPersonRunning>
                        </div>
                        <h3 className='text-gray-500 font-bold text-2xl my-4'>physical exercise</h3>
                        <p className='text-gray-500 font-semibold '>Students can join online class by register urer id or email.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ChooseUs;