"use client"
import tao from "../../assets/tao.png"
import { toast } from "react-hot-toast"

const InputField = ({ label, id, value, onChange, type = "text", required, className = "" }) => (
  <div className={`flex flex-col ${className}`}>
    <label htmlFor={id} className="text-sm font-serif mb-1 text-[#900000] font-semibold">
      {label} {required && <span className="text-red-600">*</span>}
    </label>
    <input
      type={type}
      id={id}
      required={required}
      value={value}
      onChange={(e) => onChange(id, e.target.value)}
      className="p-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#900000] focus:border-[#900000] transition-colors"
    />
  </div>
)

const AcadInfoSection = ({ onBack, onFinish, values, updateField }) => {
  const handleFinish = (e) => {
    e.preventDefault()

    // Validate required fields
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
          <InputField
            label="Department"
            id="department"
            required
            value={values.department}
            onChange={updateField}
            className="mb-4"
          />

          <InputField
            label="Enrollment Date"
            id="enrollmentDate"
            type="text"
            required
            value={values.enrollmentDate}
            onChange={updateField}
            className="mb-4"
          />

          <div className="flex gap-4 mb-4">
            <InputField
              label="Year Level"
              id="yearLevel"
              required
              value={values.yearLevel}
              onChange={updateField}
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
