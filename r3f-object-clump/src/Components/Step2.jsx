import React from 'react';
import './Step2.css'; // Import the CSS for Step2

const Step2 = ({ nextStep, prevStep, handleChange, formData }) => {
  return (
    <div className="step2-form-container flex items-center justify-center min-h-screen absolute inset-0 z-30">
      <form className="step2-form bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">Step 2: Team Information</h2>
        <label className="block mb-2">Team:</label>
        <input
          type="text"
          value={formData.team}
          onChange={handleChange('team')}
          className="w-full p-2 border rounded mb-4"
        />
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

export default Step2;
