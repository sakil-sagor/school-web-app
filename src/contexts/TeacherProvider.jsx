import { createContext, useContext, useEffect, useState } from "react";
export const TeacherContext = createContext();

const TeacherProvider = ({ children }) => {
    const [teacher, setTeacher] = useState(null)
    const [loading, setLoading] = useState(true)
    const [reload, setReload] = useState(1)
    useEffect(() => {
        let teacherInfo = JSON.parse(localStorage.getItem("data"));


        if (teacherInfo?.teacherPhone) {

            fetch(`https://school-ms.iitpark.com/api/v1/teacher/${teacherInfo?.teacherPhone}`,
                {
                    headers: {
                        authorization: `bearer ${localStorage.getItem("accessToken")}`,
                    }
                }
            )
                .then(res => res.json())
                .then(result => {
                    setTeacher(result.data)
                    setLoading(false)

                })
        }


    }, [loading]);

    const logout = () => {
        setLoading(true)
        localStorage.removeItem("data");
        localStorage.removeItem("accessToken");
        setTeacher(null)
    }
    const authInfo = {
        teacher, setTeacher, logout, loading, setLoading, reload, setReload
    }
    return (
        <TeacherContext.Provider value={authInfo}>
            {children}
        </TeacherContext.Provider>
    );
}
export const TeacherState = () => {
    return useContext(TeacherContext);
};

export default TeacherProvider;