import { AiFillEye } from "react-icons/ai";
import TeachersDetails from "./TeachersDetails";
const SingleTeacher = ({ teacher, index }) => {
  const { _id, teacherName, department } = teacher;
  return (
    <tr key={teacher._id} className={index % 2 === 0 ? "bg-[#f2f2f2]" : ""}>
      <td className="px-4 py-2">{"10012001"}</td>
      <td className="px-4 py-2 text-blue-700 font-semibold">{teacherName}</td>
      <td className="px-4 py-2 text-blue-700">{department}</td>
      <td className="md:px-4 py-2">
        <div
          onClick={() => document.getElementById(`my_modal_${_id}`).showModal()}
          className="cursor-pointer inline bg-green-700 text-white px-2 py-1 rounded hover:bg-green-800 text-sm"
        >
          <AiFillEye className="inline mb-1"></AiFillEye> <span>Profile</span>
        </div>
        <TeachersDetails teacher={teacher}></TeachersDetails>
      </td>
    </tr>
  );
};

export default SingleTeacher;
