
import axios from "axios";
import { useEffect, useState } from "react";


const useAllNotices = () => {

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

                // const url = `https://bloodserver.lifezet.com/api/v1/donor?donationStatus=active&fields=-password&sort=lastDonateDate,-totalDonate&page=${page + 1}&limit=${limit}`
                let url = `http://localhost:5000/api/v1/notice/allNotice?page=${page + 1}&limit=${limit}`


                const response = await axios.get(url);
                setAllNotice(response?.data?.data?.result);
                setCount(response?.data?.data?.pageCount);
                setTotal(response?.data?.data?.totalNotice);
                // console.log(response.data);
                window.scrollTo(0, 0);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchProducts();

        // console.log(count, total);
    }, [page, loading])

    return [allNotice, loading, setLoading, error, page, setPage, count, total]


}
export default useAllNotices;