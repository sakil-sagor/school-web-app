import { AiFillDatabase } from "react-icons/ai";
import SingleNotice from "./SingleNotice";

const NoticeBoard = ({ allNotice, page, setPage, count, total }) => {
    // const [page, setPage, count, total] = useAllNotices();
    // console.log(total);
    return (

        <div className="w-full  mx-auto bg-white  ">
            <div className="overflow-x-auto sm:px-1 md:p-4">
                <div className="py-4">
                    <h2 className="text-green-600 font-semibold text-2xl "><AiFillDatabase className="inline mb-1"></AiFillDatabase> Notice Board: </h2>
                    <div className="flex items-center justify-between mt-4 px-2">
                        <p>Total Result: <span>{total}</span></p>
                        <div>
                            {/* <label htmlFor="">Search </label>
                            <input className="border border-gray-400 p-1 bg-blue-50 rounded" type="text" /> */}
                        </div>
                    </div>
                </div>
                <hr />
                <table className="w-full table-auto border border-spacing-y-6">
                    <thead className="">
                        <tr className="text-left border">
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Subject</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">View Profile</th>
                        </tr>
                    </thead>
                    <tbody className="my-2">
                        {
                            allNotice.map((notice, index) => <SingleNotice key={notice.id} index={index} notice={notice}></SingleNotice>)
                        }
                    </tbody>
                </table>
                <div className=' ' >
                    {
                        total ?
                            <>
                                <hr className='border-2 border-t-white mt-16' />
                                <div className=' mb-16  flex items-center mt-8' >
                                    <p className='text-blue-800 font-semibold mr-3'> Total Page : </p>
                                    <div>
                                        {
                                            [...Array(count).keys()].map(number => <button className={`${page === number ? "bg-blue-700 " : " bg-gray-500"} text-white rounded  mr-4 py-1 px-4`} key={number} onClick={() => setPage(number)}>{number + 1}</button>)
                                        }
                                    </div>

                                </div>
                            </>

                            :
                            <div></div>
                    }

                </div>

            </div>

        </div>

    );
};

export default NoticeBoard;