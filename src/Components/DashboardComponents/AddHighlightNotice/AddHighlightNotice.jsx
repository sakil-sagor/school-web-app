import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import blue from "../../../assets/blue.gif";
import useAxios from "../../../hooks/useAxios";
import AllHighlightNotice from "./AllHighlightNotice";
import HighlighNoticeForm from "./HighlighNoticeForm";
const AddHighlightNotice = () => {
  const [title, setTitle] = useState("");
  const [allNotice, setAllNotice] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxios();
  const [reload, setReload] = useState(0);

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);

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
        setReload(reload + 1);
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

  useEffect(() => {
    // setLoading(true)
    const fetchProducts = async () => {
      try {
        let url = `https://school-web-demo-server.vercel.app/api/v1/notice/highlightNotice`;
        const response = await axios.get(url);
        setAllNotice(response?.data?.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [reload]);

  // delete highlight notice
  const deleteHighLigeNotice = async (noticeId) => {
    try {
      const response = await axiosSecure.delete(
        `https://school-web-demo-server.vercel.app/api/v1/notice/highlightNotice?noticeId=${noticeId}`
      );

      const data = response.data;

      if (data.status === "success") {
        toast.success("Successfully Removed");
        const remainingData = allNotice.filter(
          (product) => product?._id !== noticeId
        );
        setAllNotice(remainingData);
      }
    } catch (error) {
      console.error("Error while removing notice:", error);
    }
  };
  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="full-width-all pt-4  pb-24 ">
        <div className="w-fullm-auto p-2">
          <div className="bg-blue-50 ">
            <div className="grid grid-cols-2 gap-2">
              <div className=" ">
                <div className=" border shadow-md shadow-blue-300 px-2 py-6 md:p-8 text-center rounded-md">
                  <h2 className="text-xl font-bold text-blue-700">
                    Add Highlight Notice
                  </h2>
                </div>
                <HighlighNoticeForm
                  handleFormSubmit={handleFormSubmit}
                  handleInputChange={handleInputChange}
                  blue={blue}
                  loading={loading}
                  title={title}
                ></HighlighNoticeForm>
              </div>
              <div>
                <AllHighlightNotice
                  allNotice={allNotice}
                  deleteHighLigeNotice={deleteHighLigeNotice}
                ></AllHighlightNotice>
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
