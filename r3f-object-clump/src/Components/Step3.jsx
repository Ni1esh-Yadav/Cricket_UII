import React from 'react';
import './Step3.css'; // Import the CSS for Step3

const Step3 = ({ nextStep, prevStep, handleChange, formData }) => {
  return (
    <div className="step3-form-container flex items-center justify-center min-h-screen absolute inset-0 z-30">
      <form className="step3-form bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">Step 3: Player Role</h2>
        <label className="block mb-2">Role:</label>
        <select
          value={formData.role}
          onChange={handleChange('role')}
          className="w-full p-2 border rounded mb-4"
        >
          <option value="batsman">Batsman</option>
          <option value="bowler">Bowler</option>
          <option value="all-rounder">All-rounder</option>
        </select>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Back
          </button>
          <button
            type="button"
            onClick={nextStep}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step3;
