import React, { useEffect, useState } from 'react';
import PaymentSearchStd from '../PaymentSearchStd/PaymentSearchStd';
import ExamFree from '../PaymentTypeForm/ExamFree';
import MonthlyFee from '../PaymentTypeForm/MonthlyFee';
import SessionFee from '../PaymentTypeForm/SessionFee';


const ExamFreePayment = () => {
    const [searchText, setSearchText] = useState('')
    const [payOption, setPayOption] = useState('')
    const [loading, setLoading] = useState(false);
    const [paymentType, setPaymentType] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [againFetch, setAgainFetch] = useState(0)
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
    }, [againFetch, searchText])



    return (
        <div className='px-2'>

            <div>
                <PaymentSearchStd searchResult={searchResult} searchText={searchText} setSearchText={setSearchText} setPayOption={setPayOption} paymentType={paymentType} setPaymentType={setPaymentType}></PaymentSearchStd>
            </div>


            <ExamFree searchResult={searchResult} paymentType={paymentType} againFetch={againFetch} setAgainFetch={setAgainFetch}></ExamFree>
            <SessionFee searchResult={searchResult} paymentType={paymentType} againFetch={againFetch} setAgainFetch={setAgainFetch} ></SessionFee>
            <MonthlyFee searchResult={searchResult} paymentType={paymentType} againFetch={againFetch} setAgainFetch={setAgainFetch}></MonthlyFee>



        </div >
    );
};

export default ExamFreePayment;