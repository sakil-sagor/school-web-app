import { useRef } from "react";
import ReactToPrint from "react-to-print";


const AdmitCardPrint = ({ studentResult }) => {
    const componentRef = useRef();
    return (
        <div className="py-4">
            <div className=" border shadow-md p-4 w-[800px]  " ref={componentRef} >
                <div className="border p-4 border-black">
                    <div className="text-center">
                        <h2 >Piplakandi Govt Girls high school</h2>
                        <p>Admit Card</p>
                    </div>
                    <hr />
                    <div>
                        <div className="flex justify-between">
                            <p>Name: {studentResult?.studentsName}</p>
                            <p>STD Id:{studentResult?.studentId}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Class:{studentResult?.nameOfClass}</p>
                            <p>Roll:{studentResult?.classRoll}</p>
                            <p>Section:{studentResult?.section}</p>
                        </div>
                        <div className="flex justify-between mt-16">
                            <div>
                                <hr />
                                <p>Class Teacher</p>
                            </div>
                            <div>
                                <hr />
                                <p>Head Teacher</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <ReactToPrint
                trigger={() => { return <button className="py-2 px-5 rounded mx-auto block font-bold border shadow-md mt-3">Print</button> }}
                content={() => componentRef.current}
            />
        </div>
    );
};

export default AdmitCardPrint;

{/* <style type="text/css" media="print">{"\
  @page {\ size: landscape;\ }\
"}</style> */}