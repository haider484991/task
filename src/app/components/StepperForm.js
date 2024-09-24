'use client';
import { useState } from "react";

const StepperForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    budget: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBudgetSelect = (budget) => {
    setFormData({ ...formData, budget });
    setStep(2); // Automatically move to step 2 when budget is selected
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setStep(3); // Move to submission screen
  };

  const handleBackClick = () => {
    setStep(step - 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200">
        <div
          className={`h-full bg-green-500 transition-all duration-300`}
          style={{ width: step === 1 ? '33%' : step === 2 ? '66%' : '100%' }}
        />
      </div>

      {/* Top Navigation */}
      <div className="w-full flex justify-between items-center py-4 px-8 bg-white border-b">
        {step > 1 && (
          <button
            className="text-gray-600 text-lg font-semibold"
            onClick={handleBackClick}
          >
            Go Back
          </button>
        )}
        <span className="text-gray-600 font-semibold">
          Step {step} of 3
        </span>
        {step < 3 && (
          <button
            className="text-gray-600 text-lg font-semibold"
            onClick={() => setStep(1)} // For now, this is just an example
          >
            Exit
          </button>
        )}
      </div>

      {/* Form Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-lg p-8">
          {/* Step 1: Budget Selection */}
          {step === 1 && (
            <div className="text-center">
              <h2
                className="text-lg font-semibold text-gray-700 mb-2"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "28px",
                  fontWeight: "600",
                  lineHeight: "39px",
                  textAlign: "center",
                }}
              >
                Step #1
              </h2>
              <p
                className="text-xl font-semibold text-gray-900 mb-6"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "28px",
                  fontWeight: "600",
                  lineHeight: "39px",
                  textAlign: "center",
                }}
              >
                What is your monthly digital marketing budget?
              </p>

              {/* Budget Options */}
              <div className="space-y-4">
                {[
                  "< $1,000/mo",
                  "$1,000 - $2,000",
                  "$2,000 - $5,000",
                  "$5,000 - $10,000",
                  "$10,000 - $25,000",
                  "$25,000+",
                ].map((budget) => (
                  <div
                    key={budget}
                    className={`border-2 ${
                      formData.budget === budget
                        ? "border-green-500 bg-green-100"
                        : "border-gray-300"
                    } rounded-lg p-4 cursor-pointer hover:border-green-500 text-center`}
                    style={{
                        hover:"green-500",
                      fontFamily: "Lato",
                      fontSize: "20px",
                      fontWeight: "500",
                      lineHeight: "28px",
                      textAlign: "center",
                      width: "480px",
                      height: "76px",
                      padding: "24px 0",
                      gap: "16px",
                      borderRadius: "8px 0 0 0",
                      border: "1px solid #E5E7EB",
                    }}
                    onClick={() => handleBudgetSelect(budget)}
                  >
                    {budget}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Contact Details */}
          {step === 2 && (
            <div className="text-center" style={{ width: '520px', height: '624px', gap: '48px' }}>
              <h2
                className="text-lg font-semibold text-gray-700 mb-2"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "28px",
                  fontWeight: "600",
                  lineHeight: "39px",
                  textAlign: "center",
                }}
              >
                Step #2
              </h2>
              <p
                className="text-xl font-semibold text-gray-900 mb-6"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "28px",
                  fontWeight: "600",
                  lineHeight: "39px",
                  textAlign: "center",
                }}
              >
                Please provide your contact details
              </p>

              <form onSubmit={handleSubmit} style={{ width: '520px', height: '294px', gap: '16px' }}>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    {/* Name  */}
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="border-2 border-gray-300 p-4 w-full rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                     
                      style={{ fontFamily: "Montserrat" }}
                      required
                    />
                    
                  </div>
                  {/* double field for phone number */}
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                     className="border-2 border-gray-300 p-4  w-1/2 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    style={{ fontFamily: "Montserrat" }}
                    required
                  />
                  <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="border-2 border-gray-300 p-4 w-1/2 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      style={{ fontFamily: "Montserrat" }}
                      required
                    />
                  {/* Additional message field */}
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Additional message (optional)"
                    className="border-2 border-gray-300 p-4 w-full rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    style={{ fontFamily: "Montserrat" }}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-green-500 text-white py-3 px-10  mt-6 mx-auto hover:bg-green-600 transition duration-300 text-lg"
                  style={{ fontFamily: "Montserrat" }}
                >
                  Send Request
                </button>
              </form>
            </div>
          )}

          {/* Step 3: Submission Confirmation */}
          {step === 3 && (
            <div className="text-center">
              <h2 className="text-lg font-semibold text-gray-700 mb-2" style={{ fontFamily: "Montserrat" }}>
                Request Submitted
              </h2>
              <p className="text-xl font-semibold text-gray-900 mb-6" style={{ fontFamily: "Montserrat" }}>
                Your request has been submitted. Thank you!
              </p>
              <button
                className="bg-green-500 text-white py-3 px-4 rounded-lg mt-6 w-full hover:bg-green-600 transition duration-300 text-lg"
                style={{ fontFamily: "Montserrat" }}
                onClick={() => setStep(1)}
              >
                Return Home
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepperForm;
