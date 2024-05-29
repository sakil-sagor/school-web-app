import axios from "axios";
import { useEffect, useState } from "react";

const HIghlightNotice = () => {
  const [allNotice, setAllNotice] = useState([]);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    // setLoading(true)
    const fetchProducts = async () => {
      try {
        let url = `https://school-web-demo-server.vercel.app/api/v1/notice/highlightNotice`;
        const response = await axios.get(url);
        setAllNotice(response?.data?.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const result = (arr) => {
    return arr.map((obj) => obj.title).join(" || ");
  };

  return (
    <div className="container mx-auto px-2">
      <div className="border border-blue-500 rounded">
        <div className="flex justify-center">
          <span className="text-white bg-blue-500 p-2">Notice: </span>
          <marquee
            className="p-2 text-green-800 font-semibold"
            behavior="scroll"
            direction="left"
            scrollamount="5"
          >
            <div>
              <p>{result(allNotice)}</p>
            </div>
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default HIghlightNotice;
