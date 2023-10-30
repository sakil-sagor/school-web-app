import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const MonthlyFee = ({ paymentType, searchResult, againFetch, setAgainFetch }) => {
    const [money, setMoney] = useState(0)
    const [payOption, setPayOption] = useState('')
    let studentResult = searchResult[0];

    console.log(studentResult);
    const fee = {
        money,
        payOption,
        type: "monthlyfee",
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fee);
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

                toast.error('Error submitting Fee', error);
            });

    };
    return (
        <div>
            {
                paymentType === "monthly-fee" &&
                <div className='bg-blue-300 p-8 rounded-md '>
                    <div>
                        <h3 className='text-2xl text-pink-700 mb-2'>Monthly Fee</h3>
                    </div>
                    <hr />
                    <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 py-2'>
                        <div>
                            <p>jan : {studentResult?.payment?.monthlyfee?.january}</p>
                        </div>
                        <div>
                            <p>Feb : {studentResult?.payment?.monthlyfee?.february}</p>
                        </div>
                        <div>
                            <p>Mar : {studentResult?.payment?.monthlyfee?.march}</p>
                        </div>
                        <div>
                            <p>Apr : {studentResult?.payment?.monthlyfee?.april}</p>
                        </div>
                        <div>
                            <p>May : {studentResult?.payment?.monthlyfee?.may}</p>
                        </div>
                        <div>
                            <p>Jun : {studentResult?.payment?.monthlyfee?.june}</p>
                        </div>
                        <div>
                            <p>Jul : {studentResult?.payment?.monthlyfee?.july}</p>
                        </div>
                        <div>
                            <p>Aug : {studentResult?.payment?.monthlyfee?.august}</p>
                        </div>
                        <div>
                            <p>Sep : {studentResult?.payment?.monthlyfee?.september}</p>
                        </div>
                        <div>
                            <p>Oct : {studentResult?.payment?.monthlyfee?.october}</p>
                        </div>
                        <div>
                            <p>Nov : {studentResult?.payment?.monthlyfee?.november}</p>
                        </div>
                        <div>
                            <p>Dec: {studentResult?.payment?.monthlyfee?.december}</p>
                        </div>


                    </div>
                    <hr />
                    <form onSubmit={handleSubmit} className='mt-4'>
                        <div className='flex '>
                            <div className=''>
                                <select
                                    className=' px-2 py-1 rounded-md  border border-gray-300 text-center'
                                    name='monthlyFee'
                                    id='monthlyFee'

                                    required
                                    onChange={(e) => setPayOption(e.target.value)}
                                >
                                    <option className='' value='' disabled selected>--Select Month--</option>
                                    <option value='january'>January </option>
                                    <option value='february'>February </option>
                                    <option value='march'>March </option>
                                    <option value='april'>April </option>
                                    <option value='may'>May </option>
                                    <option value='june'>June </option>
                                    <option value='july'>July </option>
                                    <option value='august'>August </option>
                                    <option value='september'>September </option>
                                    <option value='october'>Octobor</option>
                                    <option value='november'>November</option>
                                    <option value='december'>December</option>

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
                autoClose={3000}
                theme="light"
            />
        </div>
    );
};

export default MonthlyFee;