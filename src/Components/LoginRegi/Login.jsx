import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import blue from "../../assets/blue.gif";
import { TeacherContext } from "../../contexts/TeacherProvider";

const Login = () => {
  // const { , setDonor, setUserPhone } = useContext(AdminContext)
  const { teacher, loading, setLoading, setTeacher } =
    useContext(TeacherContext);
  const [phone, setPhone] = useState("");
  const [loginflow, setLoginflow] = useState(false);
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  // const from = location.state?.from?.pathname || "/dashboard";
  const from = "/dashboard" || "/home";
  const data = {
    teacherPhone: phone,
    password: password,
  };
  const handleLogin = (event) => {
    event.preventDefault();
    setLoginflow(true);
    setLoading(true);
    fetch("https://school-web-demo-server.vercel.app/api/v1/teacher/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status === "success") {
          localStorage.setItem("accessToken", result.data.token);
          localStorage.setItem("data", JSON.stringify(result.data.other));

          toast.success("Login successful");
          setLoading(false);

          setTimeout(() => {
            if (teacher?.teacherPhone) {
              navigate(from, { replace: true });
            } else {
              navigate("/", { replace: true });
            }
            setLoginflow(false);
          }, 1000);
        }
        if (result.error) {
          setLoading(false);
          toast.error("Login failed");
        } else if (result.error) {
          setLoading(false);
          toast.error("Login failed");
        }
      });
  };
  return (
    <div className=" bg-blue-50">
      <div className="">
        <form className="md:flex justify-center md:m-0" onSubmit={handleLogin}>
          <div className="md:w-96 px-4 py-8  bg-white rounded-md shadow-2xl shadow-blue-300">
            <div className="mb-3 ">
              <span className=" text-gray-600 font-semibold block mb-2 ">
                Phone
              </span>
              <input
                placeholder=" Your Phone Number "
                required
                className="p-2 w-full  bg-white border border-gray-400 rounded-md "
                type="number"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="mb-3 ">
              <span className=" text-gray-600 font-semibold block mb-2">
                Password
              </span>
              <input
                placeholder="Password"
                type="password"
                required
                className="p-2 w-full   bg-white border border-gray-400 rounded-md "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <br />

            <div className="  ">
              <div className="flex items-center justify-center h-10  bg-indigo-500 rounded">
                <button className=" ">
                  <img
                    className={`w-8 text-center  mx-auto ${
                      !loginflow && "hidden"
                    }`}
                    src={blue}
                    alt=""
                  />
                </button>
                <button
                  className={`w-full h-full  text-white py-18 ${
                    loginflow && "hidden"
                  }`}
                >
                  <span>Login</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={2000} theme="light" />
    </div>
  );
};

export default Login;
