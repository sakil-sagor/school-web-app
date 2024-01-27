import { useEffect, useState } from "react";

const useAllStaff = () => {
  const [allstaff, setSllstaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://school-web-demo-server.vercel.app/api/v1/teacher/all"
        ); // Replace with the actual route URL
        const jsonData = await response.json();
        setSllstaff(jsonData.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return [allstaff, loading, error];
};
export default useAllStaff;
