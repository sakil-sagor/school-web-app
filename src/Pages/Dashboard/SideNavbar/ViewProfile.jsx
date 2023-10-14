

import profileImage from "../../../assets/pro1.png";
import { AdminState } from "../../../contexts/AdminProvider";

const ViewProfile = () => {
    const { admin } = AdminState()

    return (
        <div className="pb-24 pt-4">

            <div className=" mx-auto px-2 lg:pl-16">
                <div >
                    <h1 className="text-indigo-900 font-semibold text-2xl mb-6 ml-4">Admin Profile</h1>
                </div>
                <hr />

                <div className="my-6 ">
                    <img className="w-16 rounded-full block mx-auto" src={profileImage} alt="" />
                    <p className="   mt-4"><span className='font-bold '>  Name : </span> {admin.adminName}</p>
                </div>

            </div>

        </div>
    );
};

export default ViewProfile; 