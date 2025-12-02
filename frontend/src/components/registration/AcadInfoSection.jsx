"use client"
import tao from "../../assets/tao.png"
import { toast } from "react-hot-toast"
import { InputField, SelectField } from './PersonalSection'; 

const AcadInfoSection = ({ onBack, onFinish, values, updateField }) => {
    
    const departmentOptions = [
        { label: "Select your Department", value: "", disabled: true }, 
        { label: "College of Architecture", value: "CA" },
        { label: "College of Arts and Sciences", value: "CAS" },
        { label: "College of Business and Accountancy", value: "CBA" },
        { label: "College of Computing and Information Technologies", value: "CCIT" },
        { label: "College of Dentistry", value: "CD" },
        { label: "College of Education, Arts and Sciences (CEAS)", value: "CEAS" },
        { label: "College of Engineering", value: "COE" },
        { label: "College of Law", value: "COL" },
        { label: "College of Nursing", value: "CON" },
        { label: "College of Tourism and Hospitality Management", value: "CTHM" },
    ];

    const yearLevelOptions = [
        { label: "Select your Year Level", value: "", disabled: true }, 
        { label: "1st Year", value: "1" },
        { label: "2nd Year", value: "2" },
        { label: "3rd Year", value: "3" },
        { label: "4th Year", value: "4" },
        { label: "5th Year", value: "5" },
    ];
    
  const handleFinish = (e) => {
    e.preventDefault()

    if (!values.department || !values.enrollmentDate || !values.yearLevel || !values.gwa) {
      toast.error("Please fill in all required fields")
      return
    }

    toast
      .promise(
        new Promise((resolve) => {
          setTimeout(() => {
            resolve()
          }, 800)
        }),
        {
          loading: "Submitting...",
          success: "Registration Complete!",
          error: "Error occurred during submission.",
        },
      )
      .then(() => {
        onFinish()
      })
  }

  return (
    <div className="flex justify-center mx-auto my-8 max-w-5xl p-0 bg-white shadow-xl rounded-lg overflow-hidden min-h-[520px]">
      <div
        className="w-[38%]"
        style={{
          backgroundImage: `url(${tao})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="w-[62%] p-10 bg-white flex flex-col">
        <h2 className="text-2xl font-serif font-light mb-8 text-gray-800 border-b pb-2">
          Enter your academic information
        </h2>

        <form onSubmit={handleFinish} className="flex flex-col h-full">
          
            <SelectField
                label="Department"
                id="department"
                required={true}
                value={values.department}
                onChange={updateField}
                options={departmentOptions}
                className="mb-4"
            />

          <InputField
            label="Enrollment Date"
            id="enrollmentDate"
            type="date"
            required
            value={values.enrollmentDate}
            onChange={updateField}
            className="mb-4"
          />

          <div className="flex gap-4 mb-4">
            <SelectField
                label="Year Level"
                id="yearLevel"
                required={true}
                value={values.yearLevel}
                onChange={updateField}
                options={yearLevelOptions}
                className="flex-1"
            />

            <InputField
              label="GWA"
              id="gwa"
              type="number"
              step="0.01"
              required
              value={values.gwa}
              onChange={updateField}
              className="flex-1"
            />
          </div>

          <div className="flex justify-between gap-4 mt-auto">
            <button
              type="button"
              onClick={onBack}
              className="px-8 py-2 bg-gray-200 text-gray-700 rounded-md shadow-lg hover:bg-gray-300 transition-colors font-semibold"
            >
              Back
            </button>

            <button
              type="submit"
              className="px-8 py-2 bg-[#640000] text-white rounded-md shadow-lg hover:bg-red-800 transition-colors font-semibold"
            >
              Finish
            </button>
          </div>
        </form>
        </div>
      </div>
  )
}

export default AcadInfoSection  