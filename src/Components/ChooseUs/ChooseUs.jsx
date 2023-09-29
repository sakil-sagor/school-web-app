import { BsAwardFill, BsBarChartLine, BsBookFill, BsCodeSlash } from "react-icons/bs";
import { FaCanadianMapleLeaf, FaGraduationCap, FaUnlink } from "react-icons/fa";
import { FaPersonRunning } from "react-icons/fa6";
import TopSection from "../TopSection/TopSection";

const ChooseUs = () => {
    return (
        <div className="my-16 ">
            <TopSection headline={"WHY CHOOSE US"} paragraph={"We have 35 years experience in out Academy"} ></TopSection>
            <div className="mt-16 ">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className='  border rounded-md py-8 text-center shadow-lg bg-green-50' >
                        <div className="">
                            <FaUnlink className='mx-auto text-pink-600 text-6xl  p-2 rounded-full border-4 border-green-900 '></FaUnlink>
                        </div>
                        <h3 className='text-gray-500 font-bold text-2xl my-4'>Online Class Facilities</h3>
                        <p className='text-gray-500 font-semibold '>Students can join online class by register urer id or email.</p>
                    </div>
                    <div className='  border rounded-md py-8 text-center shadow-lg bg-green-50' >
                        <div className="">
                            <BsBookFill className='mx-auto text-pink-600 text-6xl  p-2 rounded-full border-4 border-green-900 '></BsBookFill>
                        </div>
                        <h3 className='text-gray-500 font-bold text-2xl my-4'>Modern Book Library</h3>
                        <p className='text-gray-500 font-semibold '>Students can join online class by register urer id or email.</p>
                    </div>
                    <div className='  border rounded-md py-8 text-center shadow-lg bg-green-50' >
                        <div className="">
                            <FaGraduationCap className='mx-auto text-pink-600 text-6xl  p-2 rounded-full border-4 border-green-900 '></FaGraduationCap>
                        </div>
                        <h3 className='text-gray-500 font-bold text-2xl my-4'>Be qualified student</h3>
                        <p className='text-gray-500 font-semibold '>Students can join online class by register urer id or email.</p>
                    </div>
                    <div className='  border rounded-md py-8 text-center shadow-lg bg-green-50' >
                        <div className="">
                            <BsCodeSlash className='mx-auto text-pink-600 text-6xl  p-2 rounded-full border-4 border-green-900 '></BsCodeSlash>
                        </div>
                        <h3 className='text-gray-500 font-bold text-2xl my-4'>Programming Classes</h3>
                        <p className='text-gray-500 font-semibold '>Students can join online class by register urer id or email.</p>
                    </div>
                    <div className='  border rounded-md py-8 text-center shadow-lg bg-green-50' >
                        <div className="">
                            <BsBarChartLine className='mx-auto text-pink-600 text-6xl  p-2 rounded-full border-4 border-green-900 '></BsBarChartLine>
                        </div>
                        <h3 className='text-gray-500 font-bold text-2xl my-4'>Annual festival </h3>
                        <p className='text-gray-500 font-semibold '>Students can join online class by register urer id or email.</p>
                    </div>
                    <div className='  border rounded-md py-8 text-center shadow-lg bg-green-50' >
                        <div className="">
                            <BsAwardFill className='mx-auto text-pink-600 text-6xl  p-2 rounded-full border-4 border-green-900 '></BsAwardFill>
                        </div>
                        <h3 className='text-gray-500 font-bold text-2xl my-4'>sports and cultural activities</h3>
                        <p className='text-gray-500 font-semibold '>Students can join online class by register urer id or email.</p>
                    </div>
                    <div className='  border rounded-md py-8 text-center shadow-lg bg-green-50' >
                        <div className="">
                            <FaCanadianMapleLeaf className='mx-auto text-pink-600 text-6xl  p-2 rounded-full border-4 border-green-900 '></FaCanadianMapleLeaf>
                        </div>
                        <h3 className='text-gray-500 font-bold text-2xl my-4'> Natural Environment</h3>
                        <p className='text-gray-500 font-semibold '>Students can join online class by register urer id or email.</p>
                    </div>
                    <div className='  border rounded-md py-8 text-center shadow-lg bg-green-50' >
                        <div className="">
                            <FaPersonRunning className='mx-auto text-pink-600 text-6xl  p-2 rounded-full border-4 border-green-900 '></FaPersonRunning>
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