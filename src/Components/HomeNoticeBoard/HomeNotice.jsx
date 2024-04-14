import { AiFillDatabase } from "react-icons/ai";
import SkeletonNotice from "../NoticeBoard/SkeletonNotice";
import HomeSingleNotice from "./HomeSingleNotice";

const HomeNotice = ({ allNotice, page, setPage, count, total, loading }) => {
  //   const [page, setPage, count, total] = useAllNotices();

  const skleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="w-full  mx-auto bg-white  ">
      <div className="overflow-x-auto sm:px-1 md:p-2">
        <div className="">
          <h2 className="text-green-600 font-semibold text-xl ">
            <AiFillDatabase className="inline mb-2 "></AiFillDatabase> Latest
            Notice Board:
          </h2>
        </div>
        <hr />
        <table className="w-full table-auto border border-spacing-y-6">
          {loading ? (
            <tbody className="my-2">
              {skleton.map((skel, index) => (
                <SkeletonNotice key={index} index={index}></SkeletonNotice>
              ))}
            </tbody>
          ) : (
            <tbody className="my-2">
              {allNotice.map((notice, index) => (
                <HomeSingleNotice
                  key={notice.id}
                  index={index}
                  notice={notice}
                ></HomeSingleNotice>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default HomeNotice;
