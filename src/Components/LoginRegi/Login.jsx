import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AdminContext } from '../../contexts/AdminProvider';

const Login = () => {
    const { loading, setLoading, setDonor, setUserPhone } = useContext(AdminContext)
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"
    const data = {
        contactNumber: phone,
        password: password,

    }
    const handleLogin = (event) => {
        event.preventDefault();
        console.log(data)
        fetch('https://bloodserver.lifezet.com/api/v1/donor/login', {
            method: "POST",
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {

                if (result.status === "success") {
                    // const accessToken = result.data.token;
                    // const data = result.data.other;
                    localStorage.setItem("accessToken", result.data.token)
                    localStorage.setItem("data", JSON.stringify(result.data.other))
                    console.log(data)
                    // setDonor(result.data.other)
                    setLoading(false)
                    navigate(from, { replace: true })
                    // navigate('/dashboard')
                }
                if (result.error) {
                    // swal({
                    //     title: "Fail!",
                    //     text: data.error,
                    //     icon: "error",
                    // });
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

        </div>
    );
};

export default Login;