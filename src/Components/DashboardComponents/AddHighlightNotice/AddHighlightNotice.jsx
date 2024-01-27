import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import blue from "../../../assets/blue.gif";
import useAxios from "../../../hooks/useAxios";
const AddHighlightNotice = () => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxios();

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(title);
    try {
      const response = await axiosSecure.post(
        "https://school-web-demo-server.vercel.app/api/v1/notice/highlightNotice",
        { title },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setLoading(false);
        setTitle("");
        toast.success("success");
      } else {
        console.error("Error adding notice");
        toast.error("Error submitting form");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error submitting form: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // const handleFormSubmit = async (e) => {
  //     e.preventDefault()
  //     setLoading(true)
  //     try {
  //         const response = await fetch('https://school-web-demo-server.vercel.app/api/v1/notice/highlightNotice', {
  //             method: 'POST',
  //             headers: {
  //                 'Content-Type': 'application/json',
  //             },
  //             body: JSON.stringify({ title }),
  //         });

  //         if (response.ok) {
  //             toast.success("success");

  //             setLoading(false)
  //         } else {
  //             console.error('Error adding notice');
  //             toast.error('Error submitting form');
  //             setLoading(false)
  //         }
  //     } catch (error) {
  //         console.error('Error:', error);
  //         toast.error('Error submitting form:', error);
  //         setLoading(false)
  //     }
  // };
  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="full-width-all pt-4  pb-24 ">
        <div className="w-full md:w-3/4 lg:w-2/4 m-auto pt-12">
          <div className="bg-blue-50 ">
            <div className=" ">
              <div className=" border shadow-md shadow-blue-300 px-2 py-6 md:p-8 text-center rounded-md">
                <h2 className="text-2xl font-bold text-blue-700">Add Notice</h2>
              </div>
              <div className=" mt-4 ">
                <form
                  className=" border shadow-xl shadow-blue-300 px-2 py-6 md:p-8 rounded-md"
                  onSubmit={handleFormSubmit}
                >
                  <div className="flex flex-col w-full">
                    <label className=" text-gray-600 font-semibold block mb-2">
                      Notice Title
                    </label>

                    <textarea
                      required
                      className="py-1 rounded-md  px-2  border border-gray-300"
                      name="address"
                      id="address"
                      value={title}
                      cols="30"
                      rows="2"
                      onChange={handleInputChange}
                    ></textarea>
                    {/* <input
                                            required
                                            className='py-1 px-2 rounded-md border border-gray-300'
                                            type="text"
                                            placeholder=" Notice Title"
                                            value={title}
                                            onChange={handleInputChange}

                                        /> */}
                  </div>

                  <div className=" mt-8 ">
                    <div className="flex items-center justify-center h-10  bg-indigo-500 hover:bg-indigo-700 duration-300	 rounded">
                      <button className=" ">
                        <img
                          className={`w-8 text-center  mx-auto ${
                            !loading && "hidden"
                          }`}
                          src={blue}
                          alt=""
                        />
                      </button>
                      <button
                        className={`w-full h-full text-xl text-white py-18 ${
                          loading && "hidden"
                        }`}
                      >
                        <span>Add Notice</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={1000} theme="colored" />
    </div>
  );
};

export default AddHighlightNotice;
