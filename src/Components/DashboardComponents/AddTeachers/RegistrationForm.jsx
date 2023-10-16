import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const uploadImageToImgBB = async (imageFile) => {
    const apiKey = '82ec2763f04d19d197f1451e6935abfe';
    const formData = new FormData();
    formData.append('image', imageFile);

    try {
      console.log(formData)
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
  console.log(imageUrl)
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Other registration form submission logic

    const imageUrl = await uploadImageToImgBB(imageFile);

    console.log(imageUrl)
    // Use imageUrl in your registration logic or store it in your database
  };

  return (
    <div className='p-24'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
