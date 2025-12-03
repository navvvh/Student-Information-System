"use client"
import tao from "../../assets/tao.png"

const InputField = ({ label, id, value, onChange, type = "text", required, className = "", placeholder = "", pattern, step }) => (
  <div className={`flex flex-col ${className}`}>
    <label htmlFor={id} className="text-sm font-serif mb-1 text-[#900000] font-semibold">
      {label} {required && <span className="text-red-600">*</span>}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      required={required}
      value={value}
      onChange={(e) => onChange(id, e.target.value)}
      className="p-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#900000] focus:border-[#900000] transition-colors"
      placeholder={placeholder}
      pattern={pattern}
      step={step}
    />
  </div>
)

const SelectField = ({ label, id, value, onChange, required, className = "", options = [] }) => (
  <div className={`flex flex-col ${className}`}>
    <label htmlFor={id} className="text-sm font-serif mb-1 text-[#900000] font-semibold">
      {label} {required && <span className="text-red-600">*</span>}
    </label>
    <select
      id={id}
      name={id}
      required={required}
      value={value}
      onChange={(e) => onChange(id, e.target.value)}
      className="p-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#900000] focus:border-[#900000] transition-colors bg-white appearance-none"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value} disabled={option.disabled}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
)

const PersonalSection = ({ onNext, onBack, updateField, values }) => {
  const genderOptions = [
    { label: "Select your gender", value: "", disabled: true },
    { label: "Female", value: "Female" },
    { label: "Male", value: "Male" },
  ];

  return (
    <div className="flex justify-center mx-auto my-8 max-w-5xl p-0 bg-white shadow-xl rounded-lg overflow-hidden min-h-[520px]">
      <div
        className="w-[38%] p-4 flex flex-col justify-between items-center text-white"
        style={{
          backgroundImage: `url(${tao})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "#900000",
        }}
      ></div>

      <div className="w-[62%] p-10 bg-white flex flex-col">
        <h2 className="text-2xl font-serif font-light mb-8 text-gray-800 border-b pb-2">Enter your details</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            onNext()
          }}
          className="flex flex-col h-full"
        >
          <div className="flex gap-4 mb-4">
            <InputField
              label="First Name"
              id="firstName"
              required={true}
              value={values.firstName}
              onChange={updateField}
              className="flex-1"
            />
            <InputField
              label="Last Name"
              id="lastName"
              required={true}
              value={values.lastName}
              onChange={updateField}
              className="flex-1"
            />
            <InputField
              label="Middle Initial"
              id="middleInitial"
              required={false}
              value={values.middleInitial}
              onChange={updateField}
              className="w-1/4"
            />
          </div>

          <InputField
            label="Student ID"
            id="studentId"
            type="text"
            placeholder="e.g., 2023-100371"
            pattern="[0-9]{4}-[0-9]{6}"
            required={true}
            value={values.studentId}
            onChange={updateField}
            className="mb-4"
          />
          <SelectField
            label="Gender"
            id="gender"
            required={true}
            value={values.gender}
            onChange={updateField}
            options={genderOptions}
            className="mb-4"
          />
          <InputField
            label="Birthdate"
            id="birthdate"
            type="date"
            required={true}
            value={values.birthdate}
            onChange={updateField}
            className="mb-4"
          />

          <InputField
            label="Hometown"
            id="hometown"
            required={true}
            value={values.hometown}
            onChange={updateField}
            className="mb-12"
          />

          <div className="flex justify-between gap-4 mt-auto">
            <button
              type="button"
              onClick={onBack}
              className="px-8 py-2 bg-[#640000] text-white rounded-md shadow-lg hover:bg-red-800 transition-colors font-alike"
            >
              Back
            </button>
            <button
              type="submit"
              className="px-8 py-2 bg-[#640000] text-white rounded-md shadow-lg hover:bg-red-800 transition-colors font-alike"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export { InputField, SelectField }; 
export default PersonalSection;