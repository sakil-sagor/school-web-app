import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { DonorContext } from '../../contexts/DonorProvider';




const SignUp = ({ loginArea }) => {
    const { setDonor, setLoading } = useContext(DonorContext)
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [district, setDistrict] = useState('');
    const [thana, setThana] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const donor = {
        name: name,
        contactNumber: phone,
        bloodGroup: bloodGroup,
        address: {
            district: district,
            thana: thana
        },
        password: password,
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true)
        if (phone.length !== 11) {
            swal({
                title: "Incorrect phone number",
                icon: "error",
            });
            return;
        }
        fetch(' https://bloodserver.lifezet.com/api/v1/donor/registration', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(donor)

        })
            .then(res => res.json())
            .then(result => {
                if (result.status === "success") {
                    localStorage.setItem("accessToken", result.data.token)
                    localStorage.setItem("data", JSON.stringify(result.data.other))
                    setLoading(false)
                    swal({
                        title: "Successfully Completed the Registration",
                        icon: "success",
                    });
                    navigate('/')
                }
                if (result.error) {
                    swal({
                        title: "Fail!",
                        text: result.error,
                        icon: "error",
                    });
                    setLoading(false)
                }
            })


    };
    return (
        <div className=" bg-blue-50">
            <div className=''>

                <form className='md:flex justify-center' onSubmit={handleSubmit}>
                    <div className='md:w-96 px-4  py-8 border-2 rounded-md bg-white shadow-2xl shadow-blue-300'>

                        <div className='mb-2 '>
                            <span className=' text-gray-600 font-semibold block mb-2 '>  Name</span>
                            <input placeholder=' Name' required className="p-2 w-full  bg-white border border-gray-400 rounded-md" type="text" name="fatherName" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='mb-2 '>
                            <span className=' text-gray-600 font-semibold block mb-2 '>   Phone </span>
                            <input placeholder=' Phone' type="number" required className="p-2 w-full  bg-white border border-gray-400 rounded-md" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className='mb-2 '>
                            <span className=' text-gray-600 font-semibold block mb-2 '> Blood Group </span>
                            <select required className="p-2 w-full  bg-white border text-gray-600 border-gray-400 rounded-md" name="bloodGroup" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} >
                                <option value="" className='text-red-500' disabled selected> Your blood group </option>
                                <option> A+</option>
                                <option> B+</option>
                                <option> AB+</option>
                                <option> O+</option>
                                <option> A-</option>
                                <option> B-</option>
                                <option> AB-</option>
                                <option> O-</option>
                            </select>
                        </div>
                        <div className='mb-2 '>
                            <span className=' text-gray-600 font-semibold block mb-2 '>   Address </span>
                            <div className='flex   '>
                                <div className="  w-1/2 mr-2">
                                    <select required className="p-2 w-full  bg-white border text-gray-600 border-gray-400 rounded-md" name="district" value={district} onChange={(e) => setDistrict(e.target.value)} >
                                        <option className='' value="" disabled selected>Your district</option>
                                        <option> kishoreganj</option>
                                        <option> mymensingh</option>
                                    </select>
                                </div>
                                <div className=" w-1/2 ml-4" value={thana} onChange={(e) => setThana(e.target.value)}>
                                    <div className="">
                                        <select required className="p-2 w-full  bg-white border text-gray-600 border-gray-400 rounded-md" name="thana"   >
                                            <option className='' value="" disabled selected>Your thana </option>
                                            {district === "" && (
                                                <>
                                                </>
                                            )}
                                            {district === "kishoreganj" && (
                                                <>
                                                    <option> Austagram</option>
                                                    <option> Bajitpur</option>
                                                    <option> Bhairab</option>
                                                    <option> Hossainpur</option>
                                                    <option> Itna</option>
                                                    <option> Karimganj</option>
                                                    <option> kishoreganj-Sadar</option>
                                                    <option> Kuliarchar</option>
                                                    <option> Mitha-Moin</option>
                                                    <option> Pakundia</option>
                                                    <option> Nikli</option>
                                                    <option> Tarail</option>
                                                </>
                                            )}
                                            {district === "mymensingh" && (
                                                <>
                                                    <option> mymensingh-Sadar</option>
                                                    <option> nandial</option>
                                                </>
                                            )}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mb-2 '>
                            <span className=' text-gray-600 font-semibold block mb-2 '>   Password </span>
                            <input placeholder='Password' type="password" required className="p-2 w-full  bg-white border border-gray-400 rounded-md" value={password} onChange={(e) => setPassword(e.target.value)} />

                        </div>
                        <br />
                        <div className='block m-auto  text-center'>

                            <button className='p-2 w-full  bg-blue-700 text-white uppercase text-sm rounded-md hover:bg-blue-800' type="submit">Submit </button>

                        </div>
                        <div>
                            <p className=' py-2 mt-2'>Alreday have an account, Please <button onClick={loginArea} className='text-blue-900 py-2 text-lg font-bold' to="/login">Log In</button></p>
                        </div>
                    </div>


                </form >
            </div>
        </div>
    );
};

export default SignUp;





// import React, { useState } from 'react';

// const SignUp = () => {

//     const [formData, setFormData] = useState({
//         name: '',
//         fatherName: '',
//         phone: '',
//         bloodGroup: '',
//         address: {
//             district: '', thana: ''
//         },
//         district: '',
//         thana: '',
//         lastDonateDate: '',
//         totalDonate: '',
//         adminRole: '',
//         interest: true,
//     });

//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         const childreen = [];

//         setFormData({ ...formData, [name]: value, [childreen.name]: value });
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Handle form submission here
//         console.log(formData);
//         // Reset form data after submission
//         setFormData({
//             name: '',
//             fatherName: '',
//             phone: '',
//             email: '',
//             nid: '',
//             bloodGroup: '',
//             district: '',
//             thana: '',
//         });
//     };
//     return (
//         <div className='full-width-all bg--500'>
//             <form onSubmit={handleSubmit}>
//                 <div className='flex flex-col w-3/4 block m-auto'>
//                     <div className='flex items-center'>
//                         <span className='w-2/12'>  NAME : </span>
//                         <input placeholder='Name' required className="py-2 px-4 w-3/4 text-lg bg-gray-300  rounded-md " type="text" name="name" value={formData.name} onChange={handleInputChange} />
//                     </div>
//                     <br />
//                     <div className='flex items-center'>

//                         <span className='w-2/12'> Father Name :</span>
//                         <input placeholder='Father Name' required className="py-2 px-4 w-3/4 text-lg bg-gray-300  rounded-md " type="text" name="fatherName" value={formData.fatherName} onChange={handleInputChange} />

//                     </div>
//                     <br />
//                     <div className='flex items-center'>
//                         <span className='w-2/12'>Phone :</span>
//                         <input placeholder='Phone' required className="py-2 px-4 w-3/4 text-lg bg-gray-300  rounded-md " type="number" name="phone" value={formData.phone} onChange={handleInputChange} />
//                     </div>
//                     <br />
//                     <div className='flex items-center'>
//                         <span className='w-2/12'>Email :</span>
//                         <input placeholder='Phone' required className="py-2 px-4 w-3/4 text-lg bg-gray-300  rounded-md " type="email" name="email" value={formData.email} onChange={handleInputChange} />
//                     </div>
//                     <br />
//                     <div className='flex items-center'>
//                         <span className='w-2/12'>  NID : </span>
//                         <input placeholder='NID' required className="py-2 px-4 w-3/4  text-lg bg-gray-300  rounded-md " type="number" name="nid" value={formData.nid} onChange={handleInputChange} />
//                     </div>
//                     <br />
//                     <div className='flex items-center'>
//                         <span className='w-2/12'>Blood Group :</span>
//                         <select required className=" py-2 px-4 w-3/4 text-lg bg-gray-300  rounded-md " name="bloodGroup" value={formData.bloodGroup} onChange={handleInputChange} >
//                             <option value="" disabled selected>Blood Group </option>
//                             <option> A+</option>
//                             <option> B+</option>
//                             <option> O+</option>
//                             <option> AB+</option>
//                             <option> A-</option>
//                             <option> B-</option>
//                             <option> O-</option>
//                             <option> AB-</option>

//                         </select>
//                     </div>
//                     <br />
//                     <div className='flex items-center'>
//                         <span className='w-2/12'>  District : </span>
//                         <input placeholder='District' required className="py-2 px-4 w-3/4 text-lg bg-gray-300  rounded-md " type="text" name="district" value={formData.district} onChange={handleInputChange} />
//                     </div>
//                     <br />
//                     <div className='flex items-center'>
//                         <span className='w-2/12'>  Thana : </span>
//                         <input placeholder='Thana' required className="py-2 px-4 w-3/4 text-lg bg-gray-300  rounded-md " type="text" name="thana" value={formData.thana} onChange={handleInputChange} />
//                     </div>
//                     <br />
//                     <div className='block m-auto'>
//                         <button type="submit" className='px-4 text-white rounded bg-green-700 p-2 uppercase hover:bg-green-900'>Submit</button>
//                     </div>
//                 </div>
//             </form>
//             <form action="">
//                 <div>
//                     <input type="text" />
//                 </div>
//                 <div>
//                     <input type="text" />
//                 </div>
//                 <div>
//                     <input type="text" />
//                 </div>
//                 <div>
//                     <input type="text" />
//                 </div>
//                 <div>
//                     <input type="text" />
//                 </div>
//                 <div>
//                     <input type="text" />
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default SignUp;