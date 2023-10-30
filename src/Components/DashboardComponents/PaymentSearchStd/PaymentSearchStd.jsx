import React from 'react';
import blue from '../../../assets/blue.gif';
const PaymentSearchStd = ({ searchResult, setSearchText, searchText, paymentType, setPayOption, setPaymentType }) => {

    return (
        <div className='px-2 py-8'>
            <div>
                <div className=' flex  justify-between gap-x-2'>
                    <div className='mb-2'>
                        <label htmlFor=""> Search</label>
                        <input placeholder='Write Student ID' onChange={(e) => setSearchText(e.target.value)} className='border bg-blue-200 border-gray-500 ml-1 rounded p-1' type="text" />
                        <button></button>
                    </div>
                    {
                        // searchResult.length &&
                        <div className=' space-x-2 '>

                            <button onClick={(e) => setPaymentType(e.target.name)} className={` hover:bg-pink-700 duration-200 text-white rounded px-3 py-1 ${paymentType === "exam-fee" ? "bg-pink-700" : "bg-gray-500"}`} name="exam-fee">Exam Fee</button>
                            <button onClick={(e) => setPaymentType(e.target.name)} className={` hover:bg-pink-700 duration-200 text-white rounded px-3 py-1 ${paymentType === "session-fee" ? "bg-pink-700" : "bg-gray-500"}`} name="session-fee">Others Fee</button>
                            <button onClick={(e) => setPaymentType(e.target.name)} className={` hover:bg-pink-700 duration-200 text-white rounded px-3 py-1 ${paymentType === "monthly-fee" ? "bg-pink-700" : "bg-gray-500"}`} name="monthly-fee">Monthly Fee</button>
                            {/* <button onClick={(e) => setPaymentType(e.target.name)} className=' bg-pink-500 hover:bg-pink-700 duration-200 text-white rounded px-3 py-1' name="other-fee">Others Fee</button> */}
                        </div>
                    }
                </div>
                <hr />

                <div className='mt-2'>
                    {
                        searchResult.length === 0 && searchText ?
                            <div className="flex justify-center items-center h-32">
                                <img className='w-24' src={blue} alt="" />
                            </div>
                            :
                            <div className=' h-32'>
                                <p className='text-xl font-bold text-pink-500'>Student Detials: </p>

                                <div>
                                    {
                                        searchResult.map(student =>
                                            <div>
                                                <div className='flex justify-between '>
                                                    <div className='bg-blue-400 rounded p-2'>

                                                        <p> id: {student?.studentId}</p>
                                                    </div>
                                                    <div className='bg-blue-400 rounded p-2'>

                                                        <p> name: {student?.studentsName}</p>
                                                    </div>
                                                    <div className='bg-blue-400 rounded p-2'>

                                                        <p>Class: {student?.nameOfClass}</p>
                                                    </div>
                                                    <div className='bg-blue-400 rounded p-2'>

                                                        <p>Section: {student?.section}</p>
                                                    </div>
                                                    <div className='bg-blue-400 rounded p-2'>

                                                        <p> Roll: {student?.classRoll}</p>
                                                    </div>
                                                </div>
                                            </div>)
                                    }
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default PaymentSearchStd;