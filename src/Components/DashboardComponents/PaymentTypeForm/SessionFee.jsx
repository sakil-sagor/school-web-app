import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SessionFee = ({
  paymentType,
  searchResult,
  againFetch,
  setAgainFetch,
}) => {
  const [money, setMoney] = useState(0);
  const [payOption, setPayOption] = useState("");
  let studentResult = searchResult[0];

  console.log(studentResult);
  const fee = {
    money,
    payOption,
    type: "sessionfee",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fee);
    fetch(
      `https://school-web-demo-server.vercel.app/api/v1/payment/student/${searchResult[0]?._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fee),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "Success") {
          toast.success("Successfully payment");
          setAgainFetch(againFetch + 1);
        }
        if (data.data.error) {
          toast.error("Error submitting Fee", error);
        }
      })
      .catch((error) => {
        toast.error("Error submitting Fee", error);
      });
  };
  return (
    <div>
      {paymentType === "session-fee" && (
        <div className="bg-blue-300 p-8 rounded-md ">
          <div>
            <h3 className="text-2xl text-pink-700 mb-2">Session Fee</h3>
          </div>

          <hr />
          <div className="flex justify-start py-2">
            <div className="mr-8">
              <p>Session Fee : {studentResult?.payment?.sessionfee?.session}</p>
            </div>
            <div>
              <p>
                Admission Fee : {studentResult?.payment?.sessionfee?.admission}
              </p>
            </div>
          </div>
          <hr />
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="flex ">
              <div className="">
                <select
                  className=" px-2 py-1 rounded-md  border border-gray-300 text-center"
                  name="othersFee"
                  id="othersFee"
                  required
                  onChange={(e) => setPayOption(e.target.value)}
                >
                  <option className="" value="" disabled selected>
                    --Others Fee--
                  </option>
                  <option value="session">Session Fee </option>
                  <option value="admission">Admission Fee</option>
                  {/* <option value='modelTest'>Sports Fee</option>
                                    <option value='modelTest'>Library Fee</option> */}
                </select>
              </div>

              <div className="mx-4 flex items-center">
                <input
                  className="border text-right bg-white border-gray-500 ml-1 w-full rounded p-1 inline-block mr-2"
                  type="number"
                  id="sessionFee"
                  name="sessionFee"
                  onBlur={(e) => setMoney(e.target.value)}
                />
                <span> Tk</span>
              </div>
              <div>
                <button
                  className=" bg-pink-500 hover:bg-pink-700 duration-200 text-white rounded px-3 py-1"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />
    </div>
  );
};

export default SessionFee;
