import { useRef } from "react";
import ReactToPrint from "react-to-print";

const AdmitCardPrint = ({ studentResult }) => {
  const componentRef = useRef();
  return (
    <div className="py-4">
      <div className=" border shadow-md p-4 w-[800px]  " ref={componentRef}>
        <div className="border p-4 border-black">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Piplakandi Girls high school</h2>

            <p className="font-semibold">Admit Card</p>
          </div>
          <hr />
          <div>
            <div className="grid grid-cols-2 justify-between mt-4">
              <p>
                Name: <span> {studentResult?.studentsName}</span>
              </p>
              <p>STD Id: {studentResult?.studentId}</p>
            </div>
            <div className="grid grid-cols-3 mt-8">
              <p>Class: {studentResult?.nameOfClass}</p>
              <p>Roll: {studentResult?.classRoll}</p>
              <p>Section: {studentResult?.section}</p>
            </div>
            <div className=" grid grid-cols-2 text-center mt-16">
              <div>
                <p className="inline-block border-t-2 border-black px-4 ">
                  Class Teacher
                </p>
              </div>
              <div>
                <p className="inline-block border-t-2 border-black px-4 ">
                  Head Teacher
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReactToPrint
        trigger={() => {
          return (
            <button className="py-2 px-5 rounded mx-auto block font-bold border shadow-md mt-3">
              Print
            </button>
          );
        }}
        content={() => componentRef.current}
      />
    </div>
  );
};

export default AdmitCardPrint;

{
  /* <style type="text/css" media="print">{"\
  @page {\ size: landscape;\ }\
"}</style> */
}
