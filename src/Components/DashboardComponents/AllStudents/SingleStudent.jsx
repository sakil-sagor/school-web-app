import React from 'react';
import { AiFillEye } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import StudentProfile from './StudentProfile';
const SingleStudent = ({ student, index }) => {
    const { studentId, studentsName, section, nameOfClass, _id, } = student;
    console.log(student)
    return (
        <tr key={student._id} className={index % 2 === 0 ? "bg-[#f2f2f2]" : ""}>
            <td className="px-4 py-2">{studentId}</td>
            <td className="px-4 py-2 text-blue-700 font-semibold">{studentsName} </td>
            <td className="px-4 py-2 text-blue-700">{nameOfClass}-{section}</td>
            <td className="md:px-4 py-2  flex">
                <div onClick={() => document.getElementById(`my_modal_${_id}`).showModal()} className="cursor-pointer inline bg-green-700 text-white px-2 py-1 rounded hover:bg-green-800 text-sm mr-1"><AiFillEye className=""></AiFillEye> <span>Profile</span></div>

                <div className="cursor-pointer inline bg-green-700 text-white px-2 py-1 rounded hover:bg-green-800 text-sm mr-1 ">
                    <NavLink to={`/dashboard/students/${_id}`} ><AiFillEye className=" "></AiFillEye> <span>Details</span> </NavLink>
                </div>

            </td>
            <StudentProfile student={student}></StudentProfile>
        </tr>
    );
};

export default SingleStudent;