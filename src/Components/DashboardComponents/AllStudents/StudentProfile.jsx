import React from "react";
import { FaFemale, FaMale } from "react-icons/fa";
const StudentProfile = ({ student }) => {
  const {
    _id,
    studentsName,
    studentId,
    fatherName,
    classRoll,
    section,
    gender,
    religion,
    phone,
    nameOfClass,
    shift,
    bloodGroup,
    status,
    address,
  } = student;
  return (
    <dialog id={`my_modal_${_id}`} className="modal  fixed">
      <div className="modal-box w-11/12 max-w-5xl ">
        <div className="flex justify-end">
          <form method="dialog">
            <button className="btn font-bold text-2xl text-red-600">X</button>
          </form>
        </div>
        <div className="grid grid-cols-12  ">
          <div className="col-span-12 md:col-span-3 lg:col-span-2 flex items-center flex-col">
            <div className="">
              <span className="w-24">Id</span>
              <span>: {studentId || "N/A"}</span>
            </div>
            <hr className="md:hidden my-2" />
            <div className="rounded border-2 p-2 mt-3">
              {gender === "male" ? (
                <div className="text-8xl ">
                  <FaMale></FaMale>
                </div>
              ) : (
                <div className="text-8xl">
                  <FaFemale></FaFemale>
                </div>
              )}
            </div>
          </div>
          <div className="pb-8 col-span-12  md:col-span-9 lg:col-span-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2 my-2 ">
              <div className="flex items-center">
                <span className="w-24">Name</span>

                <span>: {studentsName || "N/A"}</span>
              </div>
              <hr className="md:hidden my-2" />
              <div className="flex items-center">
                <span className="w-24">father Name</span>
                <span>: {fatherName || "N/A"}</span>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 my-2 ">
              <div className="flex items-center">
                <span className="w-24">Class</span>
                <span>: {nameOfClass || "N/A"}</span>
              </div>
              <hr className="md:hidden my-2" />
              <div className="flex items-center">
                <span className="w-24">Section</span>
                <span>: {section || "N/A"}</span>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 my-2 ">
              <div className="flex items-center">
                <span className="w-24">Roll</span>
                <span>: {classRoll || "N/A"}</span>
              </div>
              <hr className="md:hidden my-2" />
              <div className="flex items-center">
                <span className="w-24">Sift</span>
                <span>: {shift || "N/A"}</span>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 my-2 ">
              <div className="flex items-center">
                <span className="w-24">Gender</span>
                <span>: {gender || "N/A"}</span>
              </div>
              <hr className="md:hidden my-2" />
              <div className="flex items-center">
                <span className="w-24">Religion</span>
                <span>: {religion || "N/A"}</span>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 my-2 ">
              <div className="flex items-center">
                <span className="w-24">Phone </span>
                <span>: {phone || "N/A"}</span>
              </div>
              <hr className="md:hidden my-2" />
              <div className="flex items-center">
                <span className="w-24">Blood Group</span>
                <span>: {bloodGroup || "N/A"}</span>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 my-2 ">
              <div className="flex items-center">
                <span className="w-24">Address</span>
                <span>: {address || "N/A"}</span>
              </div>
              <hr className="md:hidden my-2" />
              <div className="flex items-center">
                <span className="w-24">Status</span>
                <span>: {status || "N/A"}</span>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default StudentProfile;
