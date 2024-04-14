import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import blue from "../../../assets/blue.gif";

const AddTeachers = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const initialState = {
    teacherName: "",
    fatherName: "",
    teacherPhone: "",
    teacherId: "",
    gender: "",
    religion: "",
    degree: "",
    bloodGroup: "",
    department: "",
    joining: "",
    email: "",
    facebook: "",
    address: "",
    title: "",
    image: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INPUT":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case "RESET":
        return initialState;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // const handleInputChange = (e) => {
  //     setFormData({
  //         ...formData,
  //         [e.target.name]: e.target.value,
  //     });
  // };

  // const handleImageUpload = (e) => {
  //     const file = e.target.files[0];
  //     setImageFile(file);
  // };

  const uploadImageToImgBB = async (imageFile) => {
    const apiKey = "82ec2763f04d19d197f1451e6935abfe";
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const response = await fetch(
        "https://api.imgbb.com/1/upload?key=" + apiKey,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (data.status === 200) {
        const imageUrl = data.data.url;
        setImageUrl(imageUrl);
        return imageUrl;
      } else {
        console.error("Image upload failed");
        return null;
      }
    } catch (error) {
      console.error("Error uploading image: ", error);
      return null;
    }
  };

  const paymentSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const imageUrl = await uploadImageToImgBB(imageFile);
    state.image = imageUrl;
    console.log(state);
    try {
      const response = await fetch(
        "https://school-web-demo-server.vercel.app/api/v1/teacher/registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(state),
        }
      );

      if (response.ok) {
        toast.success("success");
        dispatch({ type: "RESET" });

        setLoading(false);
        setImageFile("");
      } else {
        // Handle error response, e.g., display an error message, log the error, etc.
        toast.error("Registration failed");
        setLoading(false);
      }
    } catch (error) {
      // Handle network or other errors
      toast.error("Error submitting form:", error);
      setLoading(false);
    }
  };

  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="full-width-all pt-4  pb-24 ">
        <div className="w-full md:2/4 lg:w-2/4 m-auto pt-12">
          <div className="bg-blue-50 ">
            <div className=" ">
              <div className=" border shadow-md shadow-blue-300 px-2 py-6 md:p-8 text-center rounded-md">
                <h2 className="text-2xl font-bold text-blue-700">
                  Add Teacher Detials
                </h2>
              </div>
              <div className=" mt-4 ">
                <form
                  className=" border shadow-xl shadow-blue-300 px-2 py-6 md:p-8 rounded-md"
                  onSubmit={paymentSubmit}
                >
                  <div className="flex flex-col w-full">
                    <label
                      className=" text-gray-600 font-semibold block "
                      htmlFor="teacherName"
                    >
                      Teacher Name
                    </label>
                    <input
                      required
                      className="py-1 px-2 rounded-md border border-gray-300"
                      type="text"
                      name="teacherName"
                      id="teacherName"
                      value={state.teacherName}
                      onChange={(e) =>
                        dispatch({
                          type: "INPUT",
                          payload: {
                            name: e.target.name,
                            value: e.target.value,
                          },
                        })
                      }
                    />
                  </div>

                  <div className="flex flex-col w-full mt-2">
                    <label
                      className=" text-gray-600 font-semibold block "
                      htmlFor="fatherName"
                    >
                      Father Name
                    </label>
                    <input
                      className="py-1 px-2  rounded-md border border-gray-300"
                      type="text"
                      name="fatherName"
                      id="fatherName"
                      value={state.fatherName}
                      required
                      onChange={(e) =>
                        dispatch({
                          type: "INPUT",
                          payload: {
                            name: e.target.name,
                            value: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                  <div className="flex space-x-4 justify-between mt-2">
                    <div className="w-1/2">
                      <label
                        className=" text-gray-600 font-semibold block "
                        htmlFor="teacherId"
                      >
                        Teacher Id
                      </label>
                      <input
                        required
                        className="w-full  px-2 py-1 rounded-md border border-gray-300"
                        type="number"
                        name="teacherId"
                        value={state.teacherId}
                        id="teacherId"
                        onChange={(e) =>
                          dispatch({
                            type: "INPUT",
                            payload: {
                              name: e.target.name,
                              value: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="w-1/2">
                      <label
                        className=" text-gray-600 font-semibold block  "
                        htmlFor="teacherPhone"
                      >
                        Phone
                      </label>
                      <input
                        required
                        className="w-full  px-2 py-1 rounded-md border border-gray-300"
                        type="number"
                        name="teacherPhone"
                        value={state.teacherPhone}
                        id="teacherPhone"
                        onChange={(e) =>
                          dispatch({
                            type: "INPUT",
                            payload: {
                              name: e.target.name,
                              value: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="flex space-x-4 justify-between mt-2">
                    <div className="w-1/2">
                      <label
                        className=" text-gray-600 font-semibold block "
                        for="gender"
                      >
                        Gender
                      </label>
                      <select
                        className="block px-2 py-1 rounded-md w-full border border-gray-300 text-center"
                        name="gender"
                        id="gender"
                        value={state.gender}
                        required
                        onChange={(e) =>
                          dispatch({
                            type: "INPUT",
                            payload: {
                              name: e.target.name,
                              value: e.target.value,
                            },
                          })
                        }
                      >
                        <option className="" value="" disabled selected>
                          --Gender--
                        </option>
                        <option value="male">Male </option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                      </select>
                    </div>
                    <div className="w-1/2">
                      <label
                        className=" text-gray-600 font-semibold block  "
                        for="religion"
                      >
                        Religion
                      </label>
                      <select
                        className="block px-2 py-1 rounded-md w-full border border-gray-300 text-center"
                        name="religion"
                        id="religion"
                        value={state.religion}
                        required
                        onChange={(e) =>
                          dispatch({
                            type: "INPUT",
                            payload: {
                              name: e.target.name,
                              value: e.target.value,
                            },
                          })
                        }
                      >
                        <option className="" value="" disabled selected>
                          --Religion Type--
                        </option>
                        <option value="islam">Islam </option>
                        <option value="hindu">Hindu</option>
                        <option value="buddha">Buddha</option>
                        <option value="christianity">Christianity</option>
                        <option value="others">Others</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-between    mt-2 space-x-4">
                    <div className="w-1/2">
                      <label
                        className=" text-gray-600 font-semibold block "
                        for="degree"
                      >
                        Degree
                      </label>
                      <input
                        required
                        className="py-1 px-2 rounded-md w-full border border-gray-300"
                        type="text"
                        name="degree"
                        value={state.degree}
                        id="degree"
                        onChange={(e) =>
                          dispatch({
                            type: "INPUT",
                            payload: {
                              name: e.target.name,
                              value: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="w-1/2">
                      <label
                        className=" text-gray-600 font-semibold block  "
                        for="bloodGroup"
                      >
                        Blood Group
                      </label>
                      <select
                        className="block px-2 py-1 rounded-md w-full border border-gray-300 text-center"
                        name="bloodGroup"
                        id="bloodGroup"
                        value={state.bloodGroup}
                        required
                        onChange={(e) =>
                          dispatch({
                            type: "INPUT",
                            payload: {
                              name: e.target.name,
                              value: e.target.value,
                            },
                          })
                        }
                      >
                        <option className="" value="" disabled selected>
                          --Blood Group--
                        </option>
                        <option value="A+">A+ </option>
                        <option value="B+">B+</option>
                        <option value="AB+">AB+</option>
                        <option value="O+">O+</option>
                        <option value="A-">A-</option>
                        <option value="B-">B-</option>
                        <option value="O-">AB-</option>
                        <option value="O-">O-</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-between   mt-2 space-x-4 ">
                    <div className="w-1/2">
                      <label
                        className=" text-gray-600 font-semibold block  "
                        for="department"
                      >
                        Department
                      </label>
                      <input
                        required
                        className="py-1 px-2 rounded-md w-full border border-gray-300"
                        type="text"
                        name="department"
                        value={state.department}
                        id="department"
                        onChange={(e) =>
                          dispatch({
                            type: "INPUT",
                            payload: {
                              name: e.target.name,
                              value: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="w-1/2">
                      <label
                        className=" text-gray-600 font-semibold block"
                        for="joining"
                      >
                        Joining
                      </label>
                      <input
                        required
                        className="py-1 px-2 rounded-md w-full border border-gray-300"
                        type="date"
                        name="joining"
                        value={state.joining}
                        id="joining"
                        onChange={(e) =>
                          dispatch({
                            type: "INPUT",
                            payload: {
                              name: e.target.name,
                              value: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="flex justify-between mt-2 space-x-4 ">
                    <div className="w-1/2">
                      <label
                        className=" text-gray-600 font-semibold block "
                        for="email"
                      >
                        Email
                      </label>
                      <input
                        required
                        className="py-1 px-2 rounded-md w-full border border-gray-300"
                        type="email"
                        name="email"
                        value={state.email}
                        id="email"
                        onChange={(e) =>
                          dispatch({
                            type: "INPUT",
                            payload: {
                              name: e.target.name,
                              value: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="w-1/2">
                      <label
                        className=" text-gray-600 font-semibold block "
                        for="facebook"
                      >
                        Facebook
                      </label>
                      <input
                        required
                        className="py-1 px-2 rounded-md w-full border border-gray-300"
                        type="text"
                        name="facebook"
                        value={state.facebook}
                        id="facebook"
                        onChange={(e) =>
                          dispatch({
                            type: "INPUT",
                            payload: {
                              name: e.target.name,
                              value: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="flex space-x-4 justify-between mt-2">
                    <div className="w-1/2">
                      <label
                        className=" text-gray-600 font-semibold block  "
                        for="image"
                      >
                        Image
                      </label>
                      <input
                        type="file"
                        required
                        accept="image/*"
                        id="image"
                        onChange={(e) => setImageFile(e.target.files[0])}
                      />
                    </div>
                    <div className="w-1/2">
                      <label
                        className=" text-gray-600 font-semibold block  "
                        for="title"
                      >
                        Title
                      </label>
                      <select
                        className="block px-2 py-1 rounded-md w-full border border-gray-300 text-center"
                        name="title"
                        value={state.title}
                        id="title"
                        required
                        onChange={(e) =>
                          dispatch({
                            type: "INPUT",
                            payload: {
                              name: e.target.name,
                              value: e.target.value,
                            },
                          })
                        }
                      >
                        <option className="" value="" disabled selected>
                          --Title Type--
                        </option>
                        <option value="Headmaster">Headmaster </option>
                        <option value="Headmistress">Headmistress </option>
                        <option value="Asst. Headmaster">
                          Asst. Headmaster
                        </option>
                        <option value="Asst. Headmistress">
                          Asst. Headmistress
                        </option>
                        <option value="Asst. Teacher">Asst. Teacher</option>
                        <option value="Office Asst.">Office Asst.</option>
                        <option value="Office Asst.">Office Asst.</option>
                        <option value="MLSS">MLSS</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col w-full mt-2">
                    <label
                      className=" text-gray-600 font-semibold block "
                      for="address"
                    >
                      Address
                    </label>
                    <textarea
                      required
                      className="py-1 rounded-md  px-2  border border-gray-300"
                      name="address"
                      id="address"
                      value={state.address}
                      cols="30"
                      rows="2"
                      onChange={(e) =>
                        dispatch({
                          type: "INPUT",
                          payload: {
                            name: e.target.name,
                            value: e.target.value,
                          },
                        })
                      }
                    ></textarea>
                  </div>
                  <div className=" mt-8 ">
                    <button
                      className={` px-4 py-2  m-auto block bg-indigo-500 hover:bg-indigo-700 duration-200 rounded-md font-semibold text-white text-lg disabled:bg-gray-500 `}
                      type="submit"
                    >
                      {loading ? (
                        <img className="w-8 mx-16" src={blue} alt="" />
                      ) : (
                        <span className="w-10 mx-12 py-12">Register</span>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <ToastContainer
              position="top-right"
              autoClose={2000}
              theme="light"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeachers;
