import { FaUnlink } from "react-icons/fa";
import TopSection from "../TopSection/TopSection";

const ChooseUs = () => {
    return (
        <div className="my-16 ">
            <TopSection headline={"WHY CHOOSE US"}></TopSection>
            <div className="mt-8 ">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className='  border rounded-md py-8 text-center shadow-lg bg-green-50' >
                        <div className="">
                            <FaUnlink className='mx-auto text-pink-600 text-6xl  p-2 rounded-full border-4 border-green-900 '></FaUnlink>
                        </div>
                        <h3 className='text-gray-500 font-bold text-4xl my-4'>Online Class Facilities</h3>
                        <p className='text-gray-500 font-semibold '>Students can join online class by register urer id or email.</p>
                    </div>
                    <div className='  border rounded-md py-8 text-center shadow-lg bg-green-50' >
                        <div className="">
                            <FaUnlink className='mx-auto text-pink-600 text-6xl  p-2 rounded-full border-4 border-green-900 '></FaUnlink>
                        </div>
                        <h3 className='text-gray-500 font-bold text-4xl my-4'>Online Class Facilities</h3>
                        <p className='text-gray-500 font-semibold '>Students can join online class by register urer id or email.</p>
                    </div>
                    <div className='  border rounded-md py-8 text-center shadow-lg bg-green-50' >
                        <div className="">
                            <FaUnlink className='mx-auto text-pink-600 text-6xl  p-2 rounded-full border-4 border-green-900 '></FaUnlink>
                        </div>
                        <h3 className='text-gray-500 font-bold text-4xl my-4'>Online Class Facilities</h3>
                        <p className='text-gray-500 font-semibold '>Students can join online class by register urer id or email.</p>
                    </div>
                    <div className='  border rounded-md py-8 text-center shadow-lg bg-green-50' >
                        <div className="">
                            <FaUnlink className='mx-auto text-pink-600 text-6xl  p-2 rounded-full border-4 border-green-900 '></FaUnlink>
                        </div>
                        <h3 className='text-gray-500 font-bold text-4xl my-4'>Online Class Facilities</h3>
                        <p className='text-gray-500 font-semibold '>Students can join online class by register urer id or email.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ChooseUs;