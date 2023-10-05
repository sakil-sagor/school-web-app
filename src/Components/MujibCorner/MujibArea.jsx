import mujib from "../../assets/Mujib.png";
import mujib2 from "../../assets/Mujib2.png";

const MujibArea = () => {
    return (
        <div className=" flex md:flex-col justify-between gap-6">
            <div className="border  p-2">
                <img className="lg:w-full m-2" src={mujib} alt="" />
            </div>
            <div className="border p-2 ">
                <img className="lg:w-full m-2" src={mujib2} alt="" />
            </div>
        </div>
    );
};

export default MujibArea;