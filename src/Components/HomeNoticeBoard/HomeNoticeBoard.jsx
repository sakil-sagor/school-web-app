import axios from "axios";
import React, { useEffect, useState } from "react";
import HomeNotice from "./HomeNotice";

const HomeNoticeBoard = () => {
  const [allNotice, setAllNotice] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const limit = 6;

  useEffect(() => {
    // setLoading(true)
    const fetchProducts = async () => {
      try {
        let url = `https://school-web-demo-server.vercel.app/api/v1/notice/allNotice?page=${
          page + 1
        }&limit=${limit}`;
        const response = await axios.get(url);
        setAllNotice(response?.data?.data?.result);
        setCount(response?.data?.data?.pageCount);
        setTotal(response?.data?.data?.totalNotice);
        window.scrollTo(0, 0);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [page]);

  return (
    <div className=" bg-blue-800 h-full">
      <div className="container mx-auto p-2 ">
        <HomeNotice
          allNotice={allNotice}
          page={page}
          setPage={setPage}
          count={count}
          total={total}
          loading={loading}
        ></HomeNotice>
      </div>
    </div>
  );
};

export default HomeNoticeBoard;
