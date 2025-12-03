
"use client"

import { useState, useEffect } from "react"
import { formatDateToInput, formatDateToDisplay } from "../../utils/dateUtils"
import { DEPARTMENTS } from "../../utils/Constants"

const EditStudentModal = ({ student, onSave, onClose }) => {
  const [formData, setFormData] = useState(() => {
    return student ? {
      ...student,
      birthdate: formatDateToInput(student.birthdate),
      enrollmentDate: formatDateToInput(student.enrollmentDate),
    } : {};
  });

  useEffect(() => {
    if (student) {
      setFormData({
        ...student,
        birthdate: formatDateToInput(student.birthdate),
        enrollmentDate: formatDateToInput(student.enrollmentDate),
      });
    }
  }, [student]);

  if (!student) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const dataToSave = {
      ...formData,
      birthdate: formatDateToDisplay(formData.birthdate),
      enrollmentDate: formatDateToDisplay(formData.enrollmentDate),
    };

    if (!dataToSave.studentId || !dataToSave.firstName || !dataToSave.lastName) {
      alert("Please fill out all required fields.");
      return;
    }
    onSave(dataToSave); 
    onClose();
  };

  const inputClass =
    "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-900 bg-white text-gray-800 font-alike";
  const labelClass = "block text-sm font-semibold text-gray-700 font-alike";
  const modalHeaderClass = "text-xl font-bold mb-4 text-[#640000] font-alike";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl p-8 relative transform transition-all duration-300 ease-in-out">
        <h2 className={modalHeaderClass}>
          Update Student Details
        </h2>
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-light leading-none"
        >
          &times;
        </button>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          
          <div>
            <label className={labelClass}>Student ID</label>
            <input
              type="text"
              name="studentId"
              value={formData.studentId || ""}
              className={`${inputClass} bg-gray-100 cursor-not-allowed`}
              readOnly
            />
          </div>
          <div>
            <label className={labelClass}>Enrollment Date</label>
            <input
              type="date"
              name="enrollmentDate"
              value={formData.enrollmentDate || ""}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Department</label>
            <select
              name="department"
              value={formData.department || DEPARTMENTS[0]}
              onChange={handleChange}
              className={inputClass}
            >
              {DEPARTMENTS.map(dept => (
                <option key={dept} value={dept} disabled={dept === DEPARTMENTS[0]}>
                  {dept}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>Year Level</label>
            <input
              type="text"
              name="yearLevel"
              value={formData.yearLevel || ""}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName || ""}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>GWA</label>
            <input
              type="text"
              name="gwa"
              value={formData.gwa || ""}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Middle Initial</label>
            <input
              type="text"
              name="middleInitial"
              value={formData.middleInitial || ""}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Date of Birth</label>
            <input
              type="date"
              name="birthdate"
              value={formData.birthdate || ""}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName || ""}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Gender</label>
            <select
              name="gender"
              value={formData.gender || ""}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Contact No</label>
            <input
              type="text"
              name="contactNo"
              value={formData.contactNo || ""}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Hometown</label>
            <input
              type="text"
              name="hometown"
              value={formData.hometown || ""}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div className="col-span-2">
            <label className={labelClass}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div className="col-span-2 flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 font-alike transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-[#640000] text-white rounded-lg hover:bg-red-800 font-alike font-medium transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditStudentModal;