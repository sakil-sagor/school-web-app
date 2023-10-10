import React, { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import blue from "../../assets/blue.gif";

const AddTeachers = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const initialState = {

        teacherName: "N/A",
        fatherName: "",
        teacherPhone: 0,
        address: "",


    }

    const reducer = (state, action) => {
        switch (action.type) {

            case "INPUT":

                return {
                    ...state,
                    [action.payload.name]: action.payload.value,

                }

            case "PAYMENT":

                return {
                    ...state,
                    payment: {
                        ...state.payment, [action.payload.name]: action.payload.value,
                    }
                }
            case "TOGOL":
                return {
                    ...state,
                    discount: !state.discount,
                }
            default:
                return state

        }
    }


    const [state, dispatch] = useReducer(reducer, initialState)



    const paymentSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        console.log(state)
        setLoading(false)

    }
    return (
        <div className='bg-blue-50 min-h-screen'>
            <div className='full-width-all pt-4 md:pt-8 pb-24 '>
                <div className='w-full md:2/4 lg:w-2/4 m-auto pt-12'>
                    <div className='bg-blue-50 '>
                        <div className=' '>
                            <div className=" border shadow-md shadow-blue-300 px-2 py-6 md:p-8 text-center rounded-md">
                                <h2 className='text-2xl font-bold text-blue-700'>Add Teacher Detials</h2>
                            </div>
                            <div className=' mt-4 '>

                                <form className=" border shadow-xl shadow-blue-300 px-2 py-6 md:p-8 rounded-md" onSubmit={paymentSubmit}>
                                    <div className='flex flex-col w-full'>
                                        <label className=' text-gray-600 font-semibold block mb-1' htmlFor='studentName'>
                                            Teacher Name
                                        </label>
                                        <input
                                            required
                                            className='py-1 px-2 rounded-md border border-gray-300'
                                            type='text'
                                            name='teacherName'
                                            id='teacherName'
                                            onBlur={(e) => dispatch({
                                                type: 'INPUT',
                                                payload: { name: e.target.name, value: e.target.value }
                                            })}

                                        />
                                    </div>
                                    <div className='flex flex-col w-full mt-2'>
                                        <label className=' text-gray-600 font-semibold block mb-1' htmlFor='fatherName'>
                                            Father Name
                                        </label>
                                        <input
                                            className='py-1 px-2  rounded-md border border-gray-300'
                                            type='text'
                                            name='fatherName'
                                            id='fatherName'
                                            required
                                            onBlur={(e) => dispatch({
                                                type: 'INPUT',
                                                payload: { name: e.target.name, value: e.target.value }
                                            })}

                                        />
                                    </div>
                                    <div className='flex space-x-4 justify-between mt-2'>
                                        <div className='w-1/2'>
                                            <label className=' text-gray-600 font-semibold block mb-2 ' htmlFor='studentPhone'>
                                                Phone
                                            </label>
                                            <input
                                                required
                                                className='w-full  px-2 py-1 rounded-md border border-gray-300'
                                                type='number'
                                                name='teacherPhone'
                                                id='teacherPhone'
                                                onBlur={(e) => dispatch({
                                                    type: 'INPUT',
                                                    payload: { name: e.target.name, value: e.target.value }
                                                })}
                                            />
                                        </div>
                                        <div className='w-1/2'>
                                            <label className=' text-gray-600 font-semibold block mb-2 ' for='course'>
                                                Gender
                                            </label>
                                            <select
                                                className='block px-2 py-1 rounded-md w-full border border-gray-300 text-center'
                                                name='gender'
                                                id='gender'
                                                required
                                                onChange={(e) => dispatch({
                                                    type: 'INPUT',
                                                    payload: { name: e.target.name, value: e.target.value }
                                                })}
                                            >
                                                <option className='' value='' disabled selected>--Gender--</option>
                                                <option value='Academic'>Male </option>
                                                <option value='Admission'>Female</option>
                                                <option value='Admission'>Others</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className='flex justify-between    mt-2 space-x-4'>
                                        <div className='w-1/2'>
                                            <label className=' text-gray-600 font-semibold block mb-2 ' for='course'>
                                                Religion
                                            </label>
                                            <select
                                                className='block px-2 py-1 rounded-md w-full border border-gray-300 text-center'
                                                name='religion'
                                                id='religion'
                                                required
                                                onChange={(e) => dispatch({
                                                    type: 'INPUT',
                                                    payload: { name: e.target.name, value: e.target.value }
                                                })}
                                            >
                                                <option className='' value='' disabled selected>--Religion Type--</option>
                                                <option value='Academic'>Islam </option>
                                                <option value='Admission'>Hindu</option>
                                                <option value='Admission'>Buddha</option>
                                                <option value='Admission'>Christianity</option>
                                            </select>
                                        </div>
                                        <div className='w-1/2'>
                                            <label className=' text-gray-600 font-semibold block mb-2 ' for='course'>
                                                Blood Group
                                            </label>
                                            <select
                                                className='block px-2 py-1 rounded-md w-full border border-gray-300 text-center'
                                                name='bloodGroup'
                                                id='bloodGroup'
                                                required
                                                onChange={(e) => dispatch({
                                                    type: 'INPUT',
                                                    payload: { name: e.target.name, value: e.target.value }
                                                })}
                                            >
                                                <option className='' value='' disabled selected>--Blood Group--</option>
                                                <option value='Academic'>A+ </option>
                                                <option value='Admission'>B+</option>
                                                <option value='Admission'>AB+</option>
                                                <option value='Admission'>O+</option>
                                                <option value='Admission'>A-</option>
                                                <option value='Admission'>B-</option>
                                                <option value='Admission'>AB-</option>
                                                <option value='Admission'>O-</option>
                                            </select>
                                        </div>


                                    </div>

                                    <div className='flex justify-between   mt-2 space-x-4 '>
                                        <div className='w-1/2'>
                                            <label className=' text-gray-600 font-semibold block mb-2 ' for='course'>
                                                Joining
                                            </label>
                                            <input
                                                required
                                                className='py-1 px-2 rounded-md w-full border border-gray-300'
                                                type='date'
                                                name='joining'
                                                id='joining'
                                                onBlur={(e) => dispatch({
                                                    type: 'INPUT',
                                                    payload: { name: e.target.name, value: e.target.value }
                                                })}

                                            />
                                        </div>

                                        <div className='w-1/2'>
                                            <label className=' text-gray-600 font-semibold block mb-2 ' for='course'>
                                                Degree
                                            </label>
                                            <input
                                                required
                                                className='py-1 px-2 rounded-md w-full border border-gray-300'
                                                type='text'
                                                name='degree'
                                                id='degree'
                                                onBlur={(e) => dispatch({
                                                    type: 'INPUT',
                                                    payload: { name: e.target.name, value: e.target.value }
                                                })}

                                            />
                                        </div>


                                    </div>

                                    <div className='flex flex-col w-full mt-2'>
                                        <label className=' text-gray-600 font-semibold block mb-1' htmlFor='studentName'>
                                            Department
                                        </label>
                                        <input
                                            required
                                            className='py-1 px-2 rounded-md border border-gray-300'
                                            type='text'
                                            name='department'
                                            id='department'
                                            onBlur={(e) => dispatch({
                                                type: 'INPUT',
                                                payload: { name: e.target.name, value: e.target.value }
                                            })}

                                        />
                                    </div>

                                    <div className='flex justify-between md:m-auto space-x-4 '>
                                        <div className='w-1/2'>
                                            <label className=' text-gray-600 font-semibold block mb-2 ' for='course'>
                                                Email
                                            </label>
                                            <input
                                                required
                                                className='py-1 px-2 rounded-md w-full border border-gray-300'
                                                type='email'
                                                name='email'
                                                id='email'
                                                onBlur={(e) => dispatch({
                                                    type: 'INPUT',
                                                    payload: { name: e.target.name, value: e.target.value }
                                                })}

                                            />
                                        </div>
                                        <div className='w-1/2'>
                                            <label className=' text-gray-600 font-semibold block mb-2 ' for='course'>
                                                Facebook
                                            </label>
                                            <input
                                                required
                                                className='py-1 px-2 rounded-md w-full border border-gray-300'
                                                type='text'
                                                name='facebook'
                                                id='facebook'
                                                onBlur={(e) => dispatch({
                                                    type: 'INPUT',
                                                    payload: { name: e.target.name, value: e.target.value }
                                                })}

                                            />
                                        </div>


                                    </div>

                                    <div className='flex flex-col w-full '>
                                        <label className=' text-gray-600 font-semibold block mb-2 ' for='address'>
                                            Address
                                        </label>
                                        <textarea
                                            required
                                            className='py-1 rounded-md  px-2  border border-gray-300'
                                            name='address'
                                            id='address'
                                            cols='30'
                                            rows='2'
                                            onBlur={(e) => dispatch({
                                                type: 'INPUT',
                                                payload: { name: e.target.name, value: e.target.value }
                                            })}
                                        ></textarea>
                                    </div>
                                    <div className=' mt-8 '>
                                        <button
                                            className={` px-4 py-2  m-auto block bg-indigo-500 hover:bg-indigo-700 duration-200 rounded-md font-semibold text-white text-lg disabled:bg-gray-500 `}
                                            type='submit'
                                        >
                                            {
                                                loading ? <img className='w-8 mx-16' src={blue} alt="" /> : <span className='w-10 mx-12 py-12'>Submit</span>
                                            }
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div >
                    </div >
                </div>
            </div>
        </div>
    );
};

export default AddTeachers;