import React from "react";
const AllHighlightNotice = ({ allNotice, deleteHighLigeNotice }) => {
  return (
    <div className="mx-2">
      <div className="bg-blue-50 border-2 rounded-lg p-2">
        <div className=" text-center rounded-md">
          <h2 className="text-xl font-bold text-blue-700">
            All Highlight Notice
          </h2>
        </div>
        <hr />
        {allNotice.map((notice, i) => (
          <div key={notice._id} className={i % 2 === 0 ? "bg-[#ffffff]  " : ""}>
            <div className="flex justify-between py-2 mx-2">
              <p>
                <span>{i + 1}) </span> {notice?.title}
              </p>
              <div className="ml-2 ">
                <button
                  onClick={() => deleteHighLigeNotice(notice._id)}
                  className="px-2 text-sm py-1 bg-red-500 hover:bg-red-600 rounded-md text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllHighlightNotice;
