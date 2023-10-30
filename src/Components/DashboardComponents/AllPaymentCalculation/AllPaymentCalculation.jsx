import axios from "axios";
import { useEffect, useState } from "react";


const AllPaymentCalculation = () => {
    const [paymentSummary, setPaymentSummary] = useState({});
    const [totalPayment, setTotalPayment] = useState(0)
    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/payment/student/allPayment')
            .then((response) => {
                setPaymentSummary(response.data);

            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    console.log(paymentSummary);
    return (
        <div>
            <h1>Payment Summary</h1>
            <p>Total Exam Fee: {paymentSummary?.paymentSummary?.examfeeTotal}</p>
            <p>Total Session Fee: {paymentSummary?.paymentSummary?.sessionfeeTotal}</p>
            <p>Total Monthly Fee: {paymentSummary?.paymentSummary?.monthlyfeeTotal}</p>
            <p>Total Fee: {paymentSummary?.paymentSummary?.examfeeTotal + paymentSummary?.paymentSummary?.sessionfeeTotal + paymentSummary?.paymentSummary?.monthlyfeeTotal}</p>

        </div>
    );
};

export default AllPaymentCalculation;