import { AiFillDatabase } from "react-icons/ai";
import SingleNotice from "./SingleNotice";

const NoticeBoard = ({ allNotice }) => {
    const { subject, link } = allNotice;
    return (

        <div className="w-full  mx-auto bg-white  mt-8">
            <div className="overflow-x-auto sm:px-1 md:p-8">
                <div className="py-6">
                    <h2 className="text-green-600 font-semibold text-2xl "><AiFillDatabase className="inline mb-1"></AiFillDatabase> Notice Board: </h2>
                    <div className="flex items-center justify-between mt-4 px-2">
                        <p>Total Result: <span>{""}</span></p>
                        <div>
                            <label htmlFor="">Search </label>
                            <input className="border border-gray-400 p-1 bg-blue-50 rounded" type="text" />
                        </div>
                    </div>
                </div>
                <hr />
                <table className="w-full table-auto border">
                    <thead className="">
                        <tr className="text-left border">
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Subject</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">View Profile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allNotice.map((notice, index) => <SingleNotice key={notice.id} index={index} notice={notice}></SingleNotice>)
                        }
                    </tbody>
                </table>

            </div>

        </div>

    );
};

export default NoticeBoard;