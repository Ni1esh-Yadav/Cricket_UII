import React from 'react';
import './Step1.css'; // Import the CSS for Step1

const Step1 = ({ nextStep, handleChange, formData }) => {
  return (
    <div className="step1-form-container flex items-center justify-center min-h-screen absolute inset-0 ">
      <form className="step1-form bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">Step 1: Personal Information</h2>
        <label className="block mb-2">Name:</label>
        <input
          type="text"
          value={formData.name}
          onChange={handleChange('name')}
          className="w-full p-2 border rounded mb-4"
        />
        <label className="block mb-2">Age:</label>
        <input
          type="number"
          value={formData.age}
          onChange={handleChange('age')}
          className="w-full p-2 border rounded mb-4"
        />
        <button
          type="button"
          onClick={nextStep}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Step1;
