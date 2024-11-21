import React, { useState } from "react";
// import axios from "axios";

const FormComponent = () => {
  
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        dob:"",
        contact:"",
        address:""
      });

//       const [hobbies, setHobbies] = useState([""]);

// const addHobby = () => setHobbies([...hobbies, ""]);
// const handleHobbyChange = (index, value) => {
//   const newHobbies = [...hobbies];
//   newHobbies[index] = value;
//   setHobbies(newHobbies);
// };

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const handleSubmit =  (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.password || !formData.dob || !formData.contact || !formData.address) {
            alert("All fields are required!");
            return;
          }
          if (!formData.email.includes("@")) {
            alert("Please enter a valid email!");
            return;
          }
        alert("Form Data Submitted:", formData);
      };
  
  
  
  
  
  
  
    return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input type="text" name="name" value={formData.name}
          onChange={handleChange} className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input type="email" name="email"  value={formData.email}
          onChange={handleChange} className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Password:</label>
        <input type="password" name="password"  value={formData.password}
          onChange={handleChange} className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">date-of-birth:</label>
        <input type="date" name="dob" value={formData.dob}
          onChange={handleChange} className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">contact:</label>
        <input type="number" name="contact"  value={formData.contact}
          onChange={handleChange} className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">address:</label>
        <input type="textarea" name="address"  value={formData.address}
          onChange={handleChange} className="form-control" />
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;

// {/* {hobbies.map((hobby, index) => (
//   <div key={index}>
//     <input
//       type="text"
//       value={hobby}
//       onChange={(e) => handleHobbyChange(index, e.target.value)}
//     />
//   </div>
  
// ))}
// <button type="button" onClick={addHobby}>Add Hobby</button> */}
