import { createContext, useContext, useEffect, useState } from "react";
export const TeacherContext = createContext();

const TeacherProvider = ({ children }) => {
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(1);
  // useEffect(() => {
  //   let teacherInfo = JSON.parse(localStorage.getItem("data"));

  //   if (teacherInfo?.teacherPhone) {
  //     fetch(
  //       `https://school-web-demo-server.vercel.app/api/v1/teacher/${teacherInfo?.teacherPhone}`,
  //       {
  //         headers: {
  //           authorization: `bearer ${localStorage.getItem("accessToken")}`,
  //         },
  //       }
  //     )
  //       .then((res) => res.json())
  //       .then((result) => {
  //         setTeacher(result.data);
  //         setLoading(false);
  //       });
  //   }

  // }, [loading]);

  useEffect(() => {
    const fetchTeacherInfo = async () => {
      let teacherInfo = JSON.parse(localStorage.getItem("data"));

      if (teacherInfo?.teacherPhone) {
        try {
          const response = await fetch(
            `https://school-web-demo-server.vercel.app/api/v1/teacher/${teacherInfo?.teacherPhone}`,
            {
              headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
              },
            }
          );

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const result = await response.json();
          setTeacher(result?.data);
        } catch (error) {
          console.error("Failed to fetch teacher info:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchTeacherInfo();
  }, [loading]);

  const logout = () => {
    setLoading(true);
    localStorage.removeItem("data");
    localStorage.removeItem("accessToken");
    setTeacher(null);
  };
  const authInfo = {
    teacher,
    setTeacher,
    logout,
    loading,
    setLoading,
    reload,
    setReload,
  };
  return (
    <TeacherContext.Provider value={authInfo}>
      {children}
    </TeacherContext.Provider>
  );
};
export const TeacherState = () => {
  return useContext(TeacherContext);
};

export default TeacherProvider;
