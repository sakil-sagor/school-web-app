import { useState } from "react";
import NoticeImageLoad from "../DashboardComponents/NoticeBoradAll/NoticeImageLoad";

const HomeSingleNotice = ({ notice, index }) => {
  const [numPages, setNumPages] = useState(null);
  const { _id, title, imageUrl, createdAt } = notice;
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  // date fixer
  const formatCreatedAt = (createdAt) => {
    const date = new Date(createdAt);
    const day = date.getDate();
    const month = date.getMonth() + 1; // 'long' for the full month name
    const year = date.getFullYear().toString().slice(-2);
    return `${day}-${month}-${year}`;
  };
  return (
    <tr key={notice.id} className={index % 2 === 0 ? "bg-[#f2f2f2] " : ""}>
      <td className="px-4 py-4">{index + 1}</td>
      <td className="px-4 py-4 underline text-blue-500 text-sm">
        <button
          onClick={() => document.getElementById(`my_modal_${_id}`).showModal()}
        >
          {title}
        </button>
        <NoticeImageLoad notice={notice}></NoticeImageLoad>
      </td>
    </tr>
  );
};

export default HomeSingleNotice;
