import { createContext, useContext, useEffect, useState } from "react";
export const AdminContext = createContext();

const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState(null)
    const [loading, setLoading] = useState(true)
    const [reload, setReload] = useState(1)
    useEffect(() => {
        let adminInfo = JSON.parse(localStorage.getItem("info"));


        if (adminInfo?.adminPhone) {

            fetch(`http://localhost:5000/api/v1/admin/${adminInfo?.adminPhone}`,
                {
                    headers: {
                        authorization: `bearer ${localStorage.getItem("accessToken")}`,
                    }
                }
            )
                .then(res => res.json())
                .then(result => {

                    setAdmin(result.data)
                    setLoading(false)

                })
        }


    }, [loading]);

    const logout = () => {
        setLoading(true)
        localStorage.removeItem("info");
        localStorage.removeItem("accessToken");
        setAdmin(null)
    }
    const authInfo = {
        admin, setAdmin, logout, loading, setLoading, reload, setReload
    }
    return (
        <AdminContext.Provider value={authInfo}>
            {children}
        </AdminContext.Provider>
    );
}
export const AdminState = () => {
    return useContext(AdminContext);
};

export default AdminProvider;