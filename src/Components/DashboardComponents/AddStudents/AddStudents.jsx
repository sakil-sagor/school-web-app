import React, { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import blue from "../../../assets/blue.gif";

const AddStudents = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [imageFile, setImageFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    const initialState = {

        studentsName: "",
        fatherName: "",
        gender: "",
        phone: '',
        classRoll: '',
        religion: "",
        shift: '',
        bloodGroup: "",
        nameOfClass: "",
        section: '',
        address: "",

    }

    const reducer = (state, action) => {
        switch (action.type) {

            case "INPUT":

                return {
                    ...state,
                    [action.payload.name]: action.payload.value,
                }
            case 'RESET':
                return initialState;

            default:
                return state

        }
    }


    const [state, dispatch] = useReducer(reducer, initialState)



    // const year = currentDate

    console.log(new Date().getFullYear() % 100)

    const addStudentsData = async (e) => {
        e.preventDefault()
        setLoading(true)





        try {
            const response = await fetch('http://localhost:5000/api/v1/student/registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(state),
            });
            if (response.ok) {
                toast.success("success");
                dispatch({ type: 'RESET' });
                setLoading(false)
            } else {

                toast.error('Registration failed');
                setLoading(false)
            }
        } catch (error) {
            toast.error('Error submitting form:', error);
            setLoading(false)
        }

    }
    return (
        <div className='bg-blue-50 min-h-screen'>
            <div className='full-width-all pt-4  pb-24 '>
                <div className='w-full md:2/4 lg:w-2/4 m-auto pt-12'>
                    <div className='bg-blue-50 '>
                        <div className=' '>
                            <div className=" border shadow-md shadow-blue-300 px-2 py-6 md:p-8 text-center rounded-md">
                                <h2 className='text-2xl font-bold text-blue-700'>Add Student Details</h2>
                            </div>
                            <div className=' mt-4 '>

                                <form className=" border shadow-xl shadow-blue-300 px-2 py-6 md:p-8 rounded-md" onSubmit={addStudentsData}>
                                    <div className='flex flex-col w-full'>
                                        <label className=' text-gray-600 font-semibold block ' htmlFor='studentsName'>
                                            Student Name
                                        </label>
                                        <input
                                            required
                                            className='py-1 px-2 rounded-md border border-gray-300'
                                            type='text'
                                            name='studentsName'
                                            id='studentsName'
                                            value={state.studentsName}
                                            onChange={(e) => dispatch({
                                                type: 'INPUT',
                                                payload: { name: e.target.name, value: e.target.value }
                                            })}

                                        />
                                    </div>

                                    <div className='flex flex-col w-full mt-2'>
                                        <label className=' text-gray-600 font-semibold block ' htmlFor='fatherName'>
                                            Father Name
                                        </label>
                                        <input
                                            className='py-1 px-2  rounded-md border border-gray-300'
                                            type='text'
                                            name='fatherName'
                                            id='fatherName'
                                            value={state.fatherName}
                                            required
                                            onChange={(e) => dispatch({
                                                type: 'INPUT',
                                                payload: { name: e.target.name, value: e.target.value }
                                            })}

                                        />
                                    </div>
                                    <div className='flex space-x-4 justify-between mt-2'>
                                        <div className='w-1/2'>
                                            <label className=' text-gray-600 font-semibold block ' htmlFor='classRoll'>
                                                Class Roll
                                            </label>
                                            <input
                                                required
                                                className='w-full  px-2 py-1 rounded-md border border-gray-300'
                                                type='number'
                                                name='classRoll'
                                                value={state.classRoll}
                                                id='classRoll'
                                                onChange={(e) => dispatch({
                                                    type: 'INPUT',
                                                    payload: { name: e.target.name, value: e.target.value }
                                                })}
                                            />
                                        </div>
                                        <div className='w-1/2'>
                                            <label className=' text-gray-600 font-semibold block  ' htmlFor='phone'>
                                                Phone
                                            </label>
                                            <input
                                                required
                                                className='w-full  px-2 py-1 rounded-md border border-gray-300'
                                                type='number'
                                                name='phone'
                                                value={state.phone}
                                                id='phone'
                                                onChange={(e) => dispatch({
                                                    type: 'INPUT',
                                                    payload: { name: e.target.name, value: e.target.value }
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <div className='flex space-x-4 justify-between mt-2'>
                                        <div className='w-1/2'>
                                            <label className=' text-gray-600 font-semibold block ' for='gender'>
                                                Gender
                                            </label>
                                            <select
                                                className='block px-2 py-1 rounded-md w-full border border-gray-300 text-center'
                                                name='gender'
                                                id='gender'
                                                value={state.gender}
                                                required
                                                onChange={(e) => dispatch({
                                                    type: 'INPUT',
                                                    payload: { name: e.target.name, value: e.target.value }
                                                })}
                                            >
                                                <option className='' value='' disabled selected>--Gender--</option>
                                                <option value='male'>Male </option>
                                                <option value='female'>Female</option>
                                                <option value='others'>Others</option>

                                            </select>
                                        </div>
                                        <div className='w-1/2'>
                                            <label className=' text-gray-600 font-semibold block  ' for='religion'>
                                                Religion
                                            </label>
                                            <select
                                                className='block px-2 py-1 rounded-md w-full border border-gray-300 text-center'
                                                name='religion'
                                                id='religion'
                                                value={state.religion}
                                                required
                                                onChange={(e) => dispatch({
                                                    type: 'INPUT',
                                                    payload: { name: e.target.name, value: e.target.value }
                                                })}
                                            >
                                                <option className='' value='' disabled selected>--Religion Type--</option>
                                                <option value='islam'>Islam </option>
                                                <option value='hindu'>Hindu</option>
                                                <option value='buddha'>Buddha</option>
                                                <option value='christianity'>Christianity</option>
                                                <option value='others'>Others</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className='flex justify-between    mt-2 space-x-4'>
                                        <div className='w-1/2'>
                                            <label className=' text-gray-600 font-semibold block ' for='shift'>
                                                Shift
                                            </label>
                                            <select
                                                className='block px-2 py-1 rounded-md w-full border border-gray-300 text-center'
                                                name='shift'
                                                id='shift'
                                                value={state.shift}
                                                required
                                                onChange={(e) => dispatch({
                                                    type: 'INPUT',
                                                    payload: { name: e.target.name, value: e.target.value }
                                                })}
                                            >
                                                <option className='' value='' disabled selected>--Select Shift--</option>
                                                <option value='morning'>Morning </option>
                                                <option value='day'>Day</option>

                                            </select>
                                        </div>
                                        <div className='w-1/2'>
                                            <label className=' text-gray-600 font-semibold block  ' for='bloodGroup'>
                                                Blood Group
                                            </label>
                                            <select
                                                className='block px-2 py-1 rounded-md w-full border border-gray-300 text-center'
                                                name='bloodGroup'
                                                id='bloodGroup'
                                                value={state.bloodGroup}
                                                required
                                                onChange={(e) => dispatch({
                                                    type: 'INPUT',
                                                    payload: { name: e.target.name, value: e.target.value }
                                                })}
                                            >
                                                <option className='' value='' disabled selected>--Blood Group--</option>
                                                <option value='A+'>A+ </option>
                                                <option value='B+'>B+</option>
                                                <option value='AB+'>AB+</option>
                                                <option value='O+'>O+</option>
                                                <option value='A-'>A-</option>
                                                <option value='B-'>B-</option>
                                                <option value='O-'>AB-</option>
                                                <option value='O-'>O-</option>
                                                <option value='N/A'>N/A</option>
                                            </select>
                                        </div>


                                    </div>




                                    <div className='flex space-x-4 justify-between mt-2'>
                                        <div className='w-1/2'>
                                            <label className=' text-gray-600 font-semibold block  ' for='nameOfClass'>
                                                Class
                                            </label>
                                            <select
                                                className='block px-2 py-1 rounded-md w-full border border-gray-300 text-center'
                                                name='nameOfClass'
                                                value={state.nameOfClass}
                                                id='nameOfClass'
                                                required
                                                onChange={(e) => dispatch({
                                                    type: 'INPUT',
                                                    payload: { name: e.target.name, value: e.target.value }
                                                })}
                                            >
                                                <option className='' value='' disabled selected>--Select Class--</option>
                                                <option value='six'>Six </option>
                                                <option value='seven'>Seven </option>
                                                <option value='eight'>Eight</option>
                                                <option value='nine'>Nine</option>
                                                <option value='ten'>Ten</option>

                                            </select>
                                        </div>
                                        <div className='w-1/2'>
                                            <label className=' text-gray-600 font-semibold block  ' for='section'>
                                                Section
                                            </label>
                                            <select
                                                className='block px-2 py-1 rounded-md w-full border border-gray-300 text-center'
                                                name='section'
                                                value={state.section}
                                                id='section'
                                                required
                                                onChange={(e) => dispatch({
                                                    type: 'INPUT',
                                                    payload: { name: e.target.name, value: e.target.value }
                                                })}
                                            >
                                                <option className='' value='' disabled selected>--Select Section--</option>
                                                <option value='six'>Padma </option>
                                                <option value='seven'>Meghna </option>
                                                <option value='eight'>Jamuna</option>
                                                <option value='nine'>Brahmaputra</option>


                                            </select>
                                        </div>
                                    </div>

                                    <div className='flex flex-col w-full mt-2'>
                                        <label className=' text-gray-600 font-semibold block ' for='address'>
                                            Address
                                        </label>
                                        <textarea
                                            required
                                            className='py-1 rounded-md  px-2  border border-gray-300'
                                            name='address'
                                            id='address'
                                            value={state.address}
                                            cols='30'
                                            rows='2'
                                            onChange={(e) => dispatch({
                                                type: 'INPUT',
                                                payload: { name: e.target.name, value: e.target.value }
                                            })}
                                        ></textarea>
                                    </div>

                                    <div className=' mt-8 '>


                                        <div className='flex items-center justify-center h-10  bg-indigo-500 hover:bg-indigo-700 duration-300	 rounded'>
                                            <button className=' '>
                                                <img className={`w-8 text-center  mx-auto ${!loading && "hidden"}`} src={blue} alt="" />
                                            </button>
                                            <button className={`w-full h-full text-xl text-white py-18 ${loading && "hidden"}`}>
                                                <span  >Register</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div >
                        <ToastContainer
                            position="top-right"
                            autoClose={2000}
                            theme="light"
                        />
                    </div >
                </div>
            </div>
        </div>
    );
};

export default AddStudents;