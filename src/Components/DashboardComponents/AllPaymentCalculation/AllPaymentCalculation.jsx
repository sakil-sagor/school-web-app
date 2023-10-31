import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AllPaymentCalculation = () => {
    const [paymentSummary, setPaymentSummary] = useState({});
    const [loading, setLoading] = useState(false)
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
    const handleSubmitPay = async () => {
        const paymentFee = {
            examfee: paymentSummary?.paymentSummary?.examfeeTotal,
            sessionfee: paymentSummary?.paymentSummary?.sessionfeeTotal,
            monthlyfee: paymentSummary?.paymentSummary?.monthlyfeeTotal,
            total: paymentSummary?.paymentSummary?.examfeeTotal + paymentSummary?.paymentSummary?.sessionfeeTotal + paymentSummary?.paymentSummary?.monthlyfeeTotal,
        }
        setLoading(true)
        try {
            const response = await fetch('http://localhost:5000/api/v1/payment/student/allPayment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(paymentFee),
            });
            if (response.ok) {
                toast.success("success");
                dispatch({ type: 'RESET' });
                setLoading(false)
            } else {

                toast.error('Registration failed');
                setLoading(false)
            }
        } catch (error) {
            toast.error('Error submitting form:', error);
            setLoading(false)
        }

    }
    return (
        <div className="p-2">

            <div className="flex justify-between text-white text-lg text-center">
                <p className="p-3 bg-green-500 rounded-md">Total Exam Fee: <br /> {paymentSummary?.paymentSummary?.examfeeTotal}</p>
                <p className="p-3 bg-blue-500 rounded-md">Total Session Fee: <br /> {paymentSummary?.paymentSummary?.sessionfeeTotal}</p>
                <p className="p-3 bg-pink-500 rounded-md">Total Monthly Fee: <br /> {paymentSummary?.paymentSummary?.monthlyfeeTotal}</p>
                <p className="p-3 bg-orange-500 rounded-md">Total Fee: <br /> {paymentSummary?.paymentSummary?.examfeeTotal + paymentSummary?.paymentSummary?.sessionfeeTotal + paymentSummary?.paymentSummary?.monthlyfeeTotal}</p>
            </div>
            <div className="my-4">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Date</th>
                                <th className="py-3 px-6 text-left"> Exam  </th>
                                <th className="py-3 px-6 text-left"> Admission</th>
                                <th className="py-3 px-6 text-left">Monthly</th>
                                <th className="py-3 px-6 text-left">Others</th>
                                <th className="py-3 px-6 text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-800 text-sm font-light">
                            <tr className="border-b border-gray-200 hover:bg-gray-100 font-semibold">
                                <td className="py-3 px-6 text-left">Date</td>
                                <td className="py-3 px-6 text-left">{paymentSummary?.paymentSummary?.examfeeTotal}</td>
                                <td className="py-3 px-6 text-left">{paymentSummary?.paymentSummary?.examfeeTotal}</td>
                                <td className="py-3 px-6 text-left">{paymentSummary?.paymentSummary?.examfeeTotal}</td>
                                <td className="py-3 px-6 text-left ">    {paymentSummary?.paymentSummary?.examfeeTotal} </td>
                                <td className="py-3 px-6 text-center ">
                                    <button onClick={handleSubmitPay} className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded mx-2 mb-2">submit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                theme="colored"
            />
        </div>
    );
};

export default AllPaymentCalculation;