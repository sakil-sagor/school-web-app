import axios from "axios";
import { useEffect, useState } from "react";

const useSearchBox = () => {
  const [allStudent, setAllStudent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://school-web-demo-server.vercel.app/api/v1/student/all"
        );

        setAllStudent(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return { allStudent, loading, error };
};
export default useSearchBox;
