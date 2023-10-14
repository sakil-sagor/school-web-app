import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TeacherState } from '../../contexts/TeacherProvider';

const Login = () => {
    // const { , setDonor, setUserPhone } = useContext(AdminContext)
    const { teacher, loading, setLoading, setTeacher } = TeacherState()
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/dashboard"
    const data = {
        teacherPhone: phone,
        password: password,

    }
    const handleLogin = (event) => {
        event.preventDefault();
        fetch('http://localhost:5000/api/v1/teacher/login', {
            method: "POST",
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {

                if (result.status === "success") {
                    localStorage.setItem("accessToken", result.data.token)
                    localStorage.setItem("data", JSON.stringify(result.data.other))
                    setLoading(false)
                    toast.success("Login successful");
                    navigate(from, { replace: true })

                }
                if (result.error) {

                    toast.error("Login failed");
                }
            })

    }
    return (
        <div className=" bg-blue-50">
            <div className=''>


                <form className='md:flex justify-center md:m-0' onSubmit={handleLogin}>
                    <div className='md:w-96 px-4 py-8  bg-white rounded-md shadow-2xl shadow-blue-300'>
                        <div className='mb-3 '>
                            <span className=' text-gray-600 font-semibold block mb-2 '> Phone </span>
                            <input placeholder=' Your Phone Number ' required className="p-2 w-full  bg-white border border-gray-400 rounded-md " type="number" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>

                        <div className='mb-6 '>
                            <span className=' text-gray-600 font-semibold block mb-2'> Password </span>
                            <input placeholder='Password' type="password" required className="p-2 w-full   bg-white border border-gray-400 rounded-md " value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div className='mb-6'>

                            <button className=' py-2 text-sm w-full text-white cursor-pointer rounded bg-blue-800 uppercase hover:bg-blue-900' type="submit">Login</button>

                        </div>

                    </div>
                </form >
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                theme="light"
            />

        </div>
    );
};

export default Login;