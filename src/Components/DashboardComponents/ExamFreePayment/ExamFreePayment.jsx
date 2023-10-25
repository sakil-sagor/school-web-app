import React, { useEffect, useState } from 'react';
import PaymentSearchStd from '../PaymentSearchStd/PaymentSearchStd';


const ExamFreePayment = () => {
    const [searchText, setSearchText] = useState('')
    const [payOption, setPayOption] = useState('')
    const [loading, setLoading] = useState(false);
    const [paymentType, setPaymentType] = useState('')
    const [searchResult, setSearchResult] = useState([])
    console.log(paymentType)
    const size = 10;
    useEffect(() => {
        setLoading(true)
        const url = ` http://localhost:5000/api/v1/student?search=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setSearchResult(data.student);
                setLoading(false)
            })
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [searchText])

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        // const toalData = { ...formData, payType payOption }

        console.log(formData.get)
        e.target.reset();
    };

    return (
        <div className='px-2'>

            <div>
                <PaymentSearchStd searchResult={searchResult} searchText={searchText} setSearchText={setSearchText} setPayOption={setPayOption} paymentType={paymentType} setPaymentType={setPaymentType}></PaymentSearchStd>
            </div>

            {
                paymentType === "exam-fee" &&
                <div className='bg-blue-300 p-8 rounded-md'>
                    <div>
                        <h3 className='text-2xl text-pink-700 mb-2'>Exam Fee</h3>
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
                                    onChange={(e) => setPayOption()}
                                >
                                    <option className='' value='' disabled selected>--Select Exam--</option>
                                    <option value='half'>Half Year </option>
                                    <option value='annual'>Annual</option>
                                    <option value='modelTest'>Model Test</option>

                                </select>
                            </div>

                            <div className='mx-4'>

                                <input className='border text-right bg-white border-gray-500 ml-1 w-24 rounded p-1' type="number" id="feeAmount" name="feeAmount" /><span> Tk</span>
                            </div>
                            <div>
                                <button className=' bg-pink-500 hover:bg-pink-700 duration-200 text-white rounded px-3 py-1' type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            }
            {
                paymentType === "session-fee" &&
                <div className='bg-blue-300 p-8 rounded-md '>
                    <div>
                        <h3 className='text-2xl text-pink-700 mb-2'>Session Fee</h3>
                    </div>
                    <hr />
                    <form onSubmit={handleSubmit} className='mt-4'>
                        <div className='flex '>
                            <div className=''>
                                {/* <select
                                    className=' px-2 py-1 rounded-md  border border-gray-300 text-center'
                                    name='gender'
                                    id='gender'

                                    required
                                    onChange={(e) => setPayOption()}
                                >
                                    <option className='' value='' disabled selected>--Select Exam--</option>
                                    <option value=''>Half Year </option>
                                    <option value='annual'>Annual</option>
                                    <option value='modelTest'>Model Test</option>

                                </select> */}
                            </div>

                            <div className='mx-4 flex items-center'>

                                <input className='border text-right bg-white border-gray-500 ml-1 w-full rounded p-1 inline-block mr-2' type="number" id="sessionFee" name="sessionFee" /><span> Tk</span>
                            </div>
                            <div>
                                <button className=' bg-pink-500 hover:bg-pink-700 duration-200 text-white rounded px-3 py-1' type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            }
            {
                paymentType === "monthly-fee" &&
                <div className='bg-blue-300 p-8 rounded-md '>
                    <div>
                        <h3 className='text-2xl text-pink-700 mb-2'>Monthly Fee</h3>
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
                                    onChange={(e) => setPayOption()}
                                >
                                    <option className='' value='' disabled selected>--Select Month--</option>
                                    <option value='january'>January </option>
                                    <option value='february'>February </option>
                                    <option value='march'>March </option>
                                    <option value='april'>April </option>
                                    <option value='may'>May </option>
                                    <option value='june'>June </option>
                                    <option value='huly'>July </option>
                                    <option value='august'>August </option>
                                    <option value='september'>September </option>
                                    <option value='octobor'>Octobor</option>
                                    <option value='november'>November</option>
                                    <option value='december'>December</option>

                                </select>
                            </div>

                            <div className='mx-4'>

                                <input className='border text-right bg-white border-gray-500 ml-1 w-24 rounded p-1' type="number" id="feeAmount" name="feeAmount" /><span> Tk</span>
                            </div>
                            <div>
                                <button className=' bg-pink-500 hover:bg-pink-700 duration-200 text-white rounded px-3 py-1' type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            }

        </div>
    );
};

export default ExamFreePayment;