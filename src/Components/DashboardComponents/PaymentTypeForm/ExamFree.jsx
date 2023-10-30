import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ExamFree = ({ paymentType, searchResult, againFetch, setAgainFetch }) => {
    const [money, setMoney] = useState(0)
    const [payOption, setPayOption] = useState('')
    let studentResult = searchResult[0];

    console.log(studentResult);
    const fee = {
        money,
        payOption,
        type: "examfee",
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://school-ms.iitpark.com/api/v1/payment/student/${searchResult[0]?._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(fee),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === "Success") {
                    toast.success("Successfully payment")
                    setAgainFetch(againFetch + 1)
                }
                if (data.data.error) {
                    toast.error('Error submitting Fee', error);
                }
            })
            .catch((error) => {
                // console.error('Error updating product:', error);
                toast.error('Error submitting Fee', error);
            });

    };
    return (
        <div>

            {
                paymentType === "exam-fee" &&
                <div className='bg-blue-300 p-4 rounded-md'>
                    <div>
                        <h3 className='text-2xl text-pink-700 mb-2'>Exam Fee</h3>
                    </div>
                    <hr />
                    <div className='flex justify-between py-2'>
                        <div>
                            <p>Half-Year : {studentResult?.payment?.examfee?.halfYear}</p>
                        </div>
                        <div>
                            <p>Full-Year : {studentResult?.payment?.examfee?.fullYear}</p>
                        </div>
                        <div>
                            <p>Pre-Test : {studentResult?.payment?.examfee?.pretest}</p>
                        </div>
                        <div>
                            <p>Test : {studentResult?.payment?.examfee?.test}</p>
                        </div>
                    </div>
                    <hr />
                    <form onSubmit={handleSubmit} className='mt-4'>
                        <div className='flex '>
                            <div className=''>
                                <select
                                    className=' px-2 py-1 rounded-md  border border-gray-300 text-center'
                                    name='examFee'
                                    id='examFee'

                                    required
                                    onChange={(e) => setPayOption(e.target.value)}
                                >
                                    <option className='' value='' disabled selected>--Select Exam--</option>
                                    <option value='halfYear'>Half Year </option>
                                    <option value='fullYear'>Full-Year</option>
                                    <option value='pretest'>Pre-Test</option>
                                    <option value='test'>Test</option>

                                </select>
                            </div>

                            <div className='mx-4'>

                                <input className='border text-right bg-white border-gray-500 ml-1 w-24 rounded p-1' type="number" id="feeAmount" name="feeAmount" onBlur={e => setMoney(e.target.value)} /><span> Tk</span>
                            </div>
                            <div>
                                <button className=' bg-pink-500 hover:bg-pink-700 duration-200 text-white rounded px-3 py-1' type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            }
            <ToastContainer
                position="top-right"
                autoClose={1000}
                theme="colored"
            />
        </div>
    );
};

export default ExamFree;