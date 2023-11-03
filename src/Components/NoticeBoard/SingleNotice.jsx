import { useState } from "react";
import { AiFillEye, AiOutlineDownload } from "react-icons/ai";
import NoticeImageLoad from "../DashboardComponents/NoticeBoradAll/NoticeImageLoad";

const SingleNotice = ({ notice, index }) => {
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

            <td className="px-4 py-4 underline text-blue-500 ">{title}</td>
            <td className="px-4 py-4">{formatCreatedAt(createdAt)}</td>
            <td className="px-4 py-4">
                <div className=" flex flex-col lg:flex-row gap-4">
                    <div>
                        <div onClick={() => document.getElementById(`my_modal_${_id}`).showModal()} className="cursor-pointer flex bg-green-700 text-white px-2 py-1 rounded hover:bg-green-800 text-sm">
                            <AiFillEye className="inline mt-1 mr-1"></AiFillEye>
                            <span>View</span>
                        </div>
                        <NoticeImageLoad notice={notice}></NoticeImageLoad>
                    </div>
                    <div className=" ">
                        <a className="text-center flex cursor-pointer  bg-green-700 text-white px-2 py-1 rounded hover:bg-green-800 text-sm" href={imageUrl} target="_blank" download="image.jpg">
                            <AiOutlineDownload className="inline mt-1 mr-1"></AiOutlineDownload>
                            <span className="  text-white ">     Download  </span>
                        </a>
                    </div>
                </div>
            </td>

        </tr>
    );
};

export default SingleNotice;