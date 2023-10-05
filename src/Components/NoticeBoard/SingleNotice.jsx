import { AiFillEye, AiOutlineDownload } from "react-icons/ai";

const SingleNotice = ({ notice, index }) => {
    const { id, subject, link, category, pusblishDate } = notice;
    return (
        <tr key={notice.id} className={index % 2 === 0 ? "bg-[#f2f2f2]" : ""}>
            <td className="px-4 py-2">{index + 1}</td>

            <td className="px-4 py-2 underline text-blue-500 ">{subject}</td>
            <td className="px-4 py-2">{pusblishDate}</td>
            <td className="md:px-4 py-2 flex space-x-1">
                <div onClick={() => document.getElementById(`my_modal_${id}`).showModal()} className=" text-center cursor-pointer inline bg-green-700 text-white px-2 py-1 rounded hover:bg-green-800 text-sm"><AiFillEye className=" inline mb-1"></AiFillEye> <span className="hidden lg:block">View</span></div>

                <div onClick={() => document.getElementById(`my_modal_${id}`).showModal()} className=" text-center cursor-pointer inline bg-green-700 text-white px-2 py-1 rounded hover:bg-green-800 text-sm"><AiOutlineDownload className="inline mb-1"></AiOutlineDownload> <span className="hidden lg:block">Download</span></div>

            </td>
        </tr>
    );
};

export default SingleNotice;