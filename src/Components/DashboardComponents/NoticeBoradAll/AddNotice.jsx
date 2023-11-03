import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import blue from '../../../assets/blue.gif';

const AddNotice = () => {
    const [title, setTitle] = useState('');
    // const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false)
    const [imageFile, setImageFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    const handleInputChange = (e) => {
        setTitle(e.target.value);
    };

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };


    const uploadImageToImgBB = async (imageFile) => {
        const apiKey = '82ec2763f04d19d197f1451e6935abfe';
        const formData = new FormData();
        formData.append('image', imageFile);

        try {
            const response = await fetch('https://api.imgbb.com/1/upload?key=' + apiKey, {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            if (data.status === 200) {
                const imageUrl = data.data.url;
                setImageUrl(imageUrl);
                return imageUrl;
            } else {
                console.error('Image upload failed');
                return null;
            }
        } catch (error) {
            console.error('Error uploading image: ', error);
            return null;
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const imageUrl = await uploadImageToImgBB(imageFile);

        // const formData = new FormData();
        // formData.append('title', title);
        // formData.append('image', imageUrl);
        console.log({ title, imageUrl });

        try {
            const response = await fetch('https://school-ms.iitpark.com/api/v1/notice/allNotice', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, imageUrl }),
            });

            if (response.ok) {
                toast.success("success");
                setImageFile(null)
                setTitle('')
                setLoading(false)
            } else {
                console.error('Error adding notice');
                toast.error('Error submitting form');
                setLoading(false)
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Error submitting form:', error);
            setLoading(false)
        }
    };
    return (
        <div className='bg-blue-50 min-h-screen'>
            <div className='full-width-all pt-4  pb-24 '>
                <div className='w-full md:w-3/4 lg:w-2/4 m-auto pt-12'>
                    <div className='bg-blue-50 '>
                        <div className=' '>
                            <div className=" border shadow-md shadow-blue-300 px-2 py-6 md:p-8 text-center rounded-md">
                                <h2 className='text-2xl font-bold text-blue-700'>Add Notice</h2>
                            </div>
                            <div className=' mt-4 '>

                                <form className=" border shadow-xl shadow-blue-300 px-2 py-6 md:p-8 rounded-md" onSubmit={handleFormSubmit}>
                                    <div className='flex flex-col w-full'>
                                        <label className=' text-gray-600 font-semibold block mb-2'>
                                            Notice Title
                                        </label>
                                        <input
                                            required
                                            className='py-1 px-2 rounded-md border border-gray-300'
                                            type="text"
                                            placeholder=" Notice Title"
                                            value={title}
                                            onChange={handleInputChange}



                                        />
                                    </div>
                                    <div className='flex flex-col w-full mt-4'>
                                        <label className=' text-gray-600 font-semibold block mb-2 '>
                                            Add File
                                        </label>
                                        <input className='py-1 px-2 rounded-md border border-gray-300' type="file" value={imageFile} onChange={handleImageChange} />
                                    </div>



                                    <div className=' mt-8 '>


                                        <div className='flex items-center justify-center h-10  bg-indigo-500 hover:bg-indigo-700 duration-300	 rounded'>
                                            <button className=' '>
                                                <img className={`w-8 text-center  mx-auto ${!loading && "hidden"}`} src={blue} alt="" />
                                            </button>
                                            <button className={`w-full h-full text-xl text-white py-18 ${loading && "hidden"}`}>
                                                <span  >Add Notice</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                theme="light"
            />
        </div>

    );
};

export default AddNotice;