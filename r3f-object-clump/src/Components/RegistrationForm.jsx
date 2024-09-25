import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Summary from './Summary';

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    team: '',
    role: '',
  });

  // Proceed to next step
  const nextStep = () => setStep(step + 1);

  // Go back to previous step
  const prevStep = () => setStep(step - 1);

  // Handle field change
  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  switch (step) {
    case 1:
      return (
        <Step1 nextStep={nextStep} handleChange={handleChange} formData={formData} />
      );
    case 2:
      return (
        <Step2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />
      );
    case 3:
      return (
        <Step3 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />
      );
    case 4:
      return <Summary formData={formData} prevStep={prevStep} />;
    default:
      return null;
  }
};

export default RegistrationForm;
