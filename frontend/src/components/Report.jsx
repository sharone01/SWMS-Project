import React, { useState } from 'react';

function Report() {
  const [formData, setFormData] = useState({
    wasteType: '',
    description: '',
    photo: '',
    location: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Report submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-lg mx-auto shadow-md bg-white rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Report Waste</h2>

      <label>Waste Type</label><br/>
      <select className="w-full p-2 border rounded mb-3" 
      onChange={(e)=>setFormData({...formData, wasteType: e.target.value})}>
        <option>Select type</option>
        <option>Plastic</option>
        <option>Household</option>
        <option>E-waste</option>
      </select> <br/>

      <label>Description</label><br/>
      <textarea className="border mb-3"
       onChange={(e)=>setFormData({...formData, description: e.target.value})} /><br/>

      <label>Upload Photo</label><br/>
      <input type="file" className="w-full mb-3"
       onChange={(e)=>setFormData({...formData, photo: e.target.files[0]})} /><br/>

      <label>Location</label><br/>
      <input type="text" placeholder="Enter location" className="w-full p-2 border rounded mb-3"
       onChange={(e)=>setFormData({...formData, location: e.target.value})} /><br/><br/>

      <button className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded">
        Submit Report</button>
    </form>
  );
}

export default Report;
