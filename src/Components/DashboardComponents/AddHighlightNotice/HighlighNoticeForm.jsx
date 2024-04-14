import React from "react";

const HighlighNoticeForm = ({
  handleFormSubmit,
  handleInputChange,
  blue,
  loading,
  title,
}) => {
  return (
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
        </div>

        <div className=" mt-8 ">
          <div className="flex items-center justify-center h-10  bg-indigo-500 hover:bg-indigo-700 duration-300	 rounded">
            <button className=" ">
              <img
                className={`w-8 text-center  mx-auto ${!loading && "hidden"}`}
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
  );
};

export default HighlighNoticeForm;
