import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TeacherState } from "../../../contexts/TeacherProvider";

const AllPaymentCalculation = () => {
  const { teacher } = TeacherState();
  const [paymentSummary, setPaymentSummary] = useState({});
  const [loading, setLoading] = useState(true);
  const [totalDayPayment, setTotalDayPayment] = useState([]);
  const [totalPayment, setTotalPayment] = useState([]);
  const [againFetch, setAgainFetch] = useState(0);

  // for total paymet all
  useEffect(() => {
    axios
      .get(
        "https://school-web-demo-server.vercel.app/api/v1/payment/student/allPayment"
      )
      .then((response) => {
        setPaymentSummary(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [loading]);

  // for single day payment
  useEffect(() => {
    axios
      .get(
        "https://school-web-demo-server.vercel.app/api/v1/payment/getAllByDay"
      )
      .then((response) => {
        // single payment all data
        setTotalDayPayment(response.data.data);
        // single payment all data sum
        setTotalPayment(response.data.payment);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [loading]);
  console.log(totalPayment);
  const lastAuthor = totalDayPayment[0];

  // submit single day payment
  const handleSubmitPay = async () => {
    const paymentFee = {
      id: teacher?.teacherName,
      examfee:
        paymentSummary?.paymentSummary?.examfeeTotal -
        totalPayment?.examfeeTotal,
      sessionfee:
        paymentSummary?.paymentSummary?.sessionfeeTotal -
        totalPayment?.sessionfeeTotal,
      monthlyfee:
        paymentSummary?.paymentSummary?.monthlyfeeTotal -
        totalPayment?.monthlyfeeTotal,
      // total: paymentSummary?.paymentSummary?.examfeeTotal + paymentSummary?.paymentSummary?.sessionfeeTotal + paymentSummary?.paymentSummary?.monthlyfeeTotal,
    };

    setLoading(true);
    try {
      const response = await fetch(
        "https://school-web-demo-server.vercel.app/api/v1/payment/student/allPayment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(paymentFee),
        }
      );
      if (response.ok) {
        toast.success("success");
        dispatch({ type: "RESET" });
        setLoading(false);
      } else {
        toast.error("Registration failed");
        setLoading(false);
      }
    } catch (error) {
      toast.error("Error submitting form:", error);
      setLoading(false);
    }
  };
  const formatCreatedAt = (createdAt) => {
    const date = new Date(createdAt);
    const day = date.getDate();
    const month = date.getMonth() + 1; // 'long' for the full month name
    const year = date.getFullYear().toString().slice(-2);

    return `${day}-${month}-${year}`;
  };

  return (
    <div className="p-2">
      {/* total all paymet  */}
      <div className="flex justify-between text-white text-lg text-center">
        <p className="p-3 bg-green-500 rounded-md">
          Total Exam <br /> {paymentSummary?.paymentSummary?.examfeeTotal || 0}
        </p>
        <p className="p-3 bg-blue-500 rounded-md">
          Total Admission <br />
          {paymentSummary?.paymentSummary?.sessionfeeTotal || 0}
        </p>
        <p className="p-3 bg-pink-500 rounded-md">
          Total Monthly <br />
          {paymentSummary?.paymentSummary?.monthlyfeeTotal || 0}
        </p>
        <p className="p-3 bg-orange-500 rounded-md">
          Total Get: <br />
          {paymentSummary?.paymentSummary?.examfeeTotal +
            paymentSummary?.paymentSummary?.sessionfeeTotal +
            paymentSummary?.paymentSummary?.monthlyfeeTotal || 0}
        </p>
      </div>
      <div className="my-4">
        {/* single day payment submit  */}
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-left"> Exam </th>
                <th className="py-3 px-6 text-left"> Admission</th>
                <th className="py-3 px-6 text-left">Monthly</th>
                <th className="py-3 px-6 text-left">Total</th>
                <th className="py-3 px-6 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 text-sm font-light">
              <tr className="border-b border-gray-200 hover:bg-gray-100 font-semibold">
                <td className="py-3 px-6 text-left">
                  {formatCreatedAt(Date.now())}
                </td>
                <td className="py-3 px-6 text-left">
                  {paymentSummary?.paymentSummary?.examfeeTotal -
                    totalPayment?.examfeeTotal || 0}
                </td>
                <td className="py-3 px-6 text-left">
                  {paymentSummary?.paymentSummary?.sessionfeeTotal -
                    totalPayment?.sessionfeeTotal || 0}
                </td>
                <td className="py-3 px-6 text-left">
                  {paymentSummary?.paymentSummary?.monthlyfeeTotal -
                    totalPayment?.monthlyfeeTotal || 0}
                </td>
                <td className="py-3 px-6 text-left ">
                  {paymentSummary?.paymentSummary?.examfeeTotal +
                    paymentSummary?.paymentSummary?.sessionfeeTotal +
                    paymentSummary?.paymentSummary?.monthlyfeeTotal -
                    (totalPayment?.examfeeTotal +
                      totalPayment?.sessionfeeTotal +
                      totalPayment?.monthlyfeeTotal) || 0}
                </td>
                <td className="py-3 px-6 text-center ">
                  <button
                    onClick={handleSubmitPay}
                    className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded mx-2 mb-2"
                  >
                    submit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* signle day payment all  */}
      <div className="my-4">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-left"> Exam </th>
                <th className="py-3 px-6 text-left"> Admission</th>
                <th className="py-3 px-6 text-left">Monthly</th>
                <th className="py-3 px-6 text-left">Total</th>
                <th className="py-3 px-6 text-center">Author</th>
              </tr>
            </thead>
            {totalDayPayment.map((ele) => (
              <tbody className="text-gray-800 text-sm font-light">
                <tr className="border-b border-gray-200 hover:bg-gray-100 font-semibold">
                  <td className="py-3 px-6 text-left">
                    {formatCreatedAt(lastAuthor?.createdAt)}
                  </td>
                  <td className="py-3 px-6 text-left">{ele?.examfee}</td>
                  <td className="py-3 px-6 text-left ">{ele?.sessionfee} </td>
                  <td className="py-3 px-6 text-left">{ele?.monthlyfee}</td>
                  <td className="py-3 px-6 text-left ">
                    {ele?.examfee + ele?.monthlyfee + ele?.sessionfee}
                  </td>
                  <td className="py-3 px-6 text-left">{ele?.id}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={1000} theme="colored" />
    </div>
  );
};

export default AllPaymentCalculation;
