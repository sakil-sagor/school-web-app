import axios from "axios";
import { useEffect, useState } from "react";
import NoticeBoard from "../../NoticeBoard/NoticeBoard";


const NoticeBoradAll = () => {
    const [allNotice, setAllNotice] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(0);
    const [count, setCount] = useState(0)
    const [total, setTotal] = useState(0)
    const limit = 3;

    useEffect(() => {
        // setLoading(true)
        const fetchProducts = async () => {
            try {
                let url = `https://school-ms.iitpark.com/api/v1/notice/allNotice?page=${page + 1}&limit=${limit}`
                const response = await axios.get(url);
                setAllNotice(response?.data?.data?.result);
                setCount(response?.data?.data?.pageCount);
                setTotal(response?.data?.data?.totalNotice);
                console.log(response);
                window.scrollTo(0, 0);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchProducts();

    }, [page])


    console.log(allNotice);
    return (
        <div className="min-h-[80vh] bg-blue-50">
            <div className="container mx-auto px-2">
                <br />
                <NoticeBoard allNotice={allNotice} page={page} setPage={setPage} count={count} total={total} loading={loading} ></NoticeBoard>
            </div>
        </div>
    );
};

export default NoticeBoradAll;