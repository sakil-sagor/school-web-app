import { AiFillDatabase } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";
import SingleTeacher from "./SingleTeacher";



const Teachers = () => {
    const teachers = useLoaderData();

    return (
        <div className="min-h-[80vh] bg-blue-50">
            <div className="container mx-auto px-2">
                <br />
                <div className="w-full max-w-screen-lg mx-auto bg-white  mt-8">
                    <div className="overflow-x-auto sm:px-1 md:p-8">
                        <div className="py-6">
                            <h2 className="text-green-600 font-semibold text-2xl "><AiFillDatabase className="inline mb-1"></AiFillDatabase> Techers list</h2>
                            <div className="flex items-center justify-between mt-4 px-2">
                                <p>Total Result: <span>{""}</span></p>
                                <div>
                                    <label htmlFor="">Search </label>
                                    <input className="border border-gray-400 p-1 bg-blue-50 rounded" type="text" />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="text-left">
                                    <th className="px-4 py-2">ID</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Subject</th>
                                    <th className="px-4 py-2">View Profile</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    teachers.map((teacher, index) => <SingleTeacher key={teacher.id} index={index} teacher={teacher}></SingleTeacher>)
                                }
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Teachers;