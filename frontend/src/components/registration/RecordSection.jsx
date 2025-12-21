"use client"

import { useState, useEffect, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import bg8 from "../../assets/asdagffalhaalhjshgd.png"; 
import axios from "axios";

import EditStudentModal from "./EditStudentModal"; 

export default function RecordsSection() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedIds, setSelectedIds] = useState(new Set()) 
  const [students, setStudents] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [studentToEdit, setStudentToEdit] = useState(null)


const API_URL = 'http://localhost:5000/user/';

const loadStudents = useCallback(async () => {
    setIsLoading(true);
    try { 
        const response = await axios.get(API_URL);
        setStudents(response.data.map(s => ({ ...s, studentId: String(s.studentId) })));
    } catch (error) {
        console.error("Error fetching students from server:", error);
        setStudents([]);
    } finally {
        setIsLoading(false);
    }
}, [API_URL])
useEffect(() => {
    loadStudents();
}, [loadStudents]);

  const filteredStudents = students.filter((student) =>
    Object.values(student).some((value) => value && value.toString().toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const toggleSelect = (studentId) => {
    const newSelected = new Set(selectedIds)
    const idKey = String(studentId) 
    
    newSelected.has(idKey) ? newSelected.delete(idKey) : newSelected.add(idKey)
    
    setSelectedIds(newSelected)
  }

  const toggleSelectAll = () => {
    const allFilteredIds = filteredStudents.map((s) => String(s.studentId));

    if (filteredStudents.length > 0 && selectedIds.size === filteredStudents.length) {
      setSelectedIds(new Set())
    } else {
      setSelectedIds(new Set(allFilteredIds))
    }
  }

  const handleEdit = () => {
    if (selectedIds.size === 0) {
      alert("Select a student to edit.")
      return
    }
    if (selectedIds.size > 1) {
      alert("Please select only ONE student to edit.")
      return
    }
    
    const idToEdit = Array.from(selectedIds)[0]
    const student = students.find((s) => String(s.studentId) === idToEdit)

    if (student) {
      setStudentToEdit(student)
      setIsEditModalOpen(true)
    } else {
      alert("Student data not found.")
    }
  }

//Edited and Updated data reflects on records
  const handleSaveEdit = async (updatedStudentData) => {
    try {
        const studentId = updatedStudentData.studentId;
        const response = await axios.put(`${API_URL}update/${studentId}`, updatedStudentData);
        if (response.status === 200) {
            setStudents((prevStudents) =>
                prevStudents.map((s) =>
                    String(s.studentId) === String(studentId) ? response.data.student : s
                )
            );
            alert("Student record updated successfully!");
        } else {
            alert(`Update failed: ${response.data.message || 'Unknown error'}`);
        }
    } catch (error) {
        console.error("Error updating student:", error);
        alert(`Failed to update student: ${error.response?.data?.message || 'Server error'}`);
    }
    setSelectedIds(new Set()); 
};
//Edited and Updated data reflects on records

//Delete function on both webiste and database
  const handleDelete = async() => {
   if (selectedIds.size === 0) return alert("Select students to delete");
    
    const studentCount = selectedIds.size;
    if (!window.confirm(`Are you sure you want to delete ${studentCount} student(s)?`)) return;
    const idsToDelete = Array.from(selectedIds);
    let successfulDeletes = 0;
    const deletePromises = idsToDelete.map(id => 
        axios.delete(`${API_URL}${id}`) 
             .then(response => {
                 if (response.status === 200) {
                     successfulDeletes++;
                     return true;
                 }
                 console.warn(`Failed to delete student ID ${id}: ${response.data.message}`);
                 return false;
             })
             .catch(error => {
                 console.error(`Error deleting student ID ${id}:`, error);
                 return false;
             })
    );
    await Promise.all(deletePromises);
    if (successfulDeletes > 0) {
        alert(`Successfully deleted ${successfulDeletes} out of ${studentCount} selected student(s).`);
        await loadStudents();
    } else {
         alert("No students were deleted. Check console for errors or ensure the IDs exist.");
    }    
    setSelectedIds(new Set()); 
};
//Delete function on both website and database

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      <header className="bg-[#640000] text-white px-4 py-3 flex items-center gap-3">
        <img src={bg8} alt="Montclair" className="size-16 -m-5" />
        <span className="text-1xl font-alike leading-tight">
          Montclair <br /> Academy
        </span>
      </header>

      <main className="flex flex-col flex-1 px-6 py-8 w-full min-h-[calc(100vh-96px)]">
        
        <div className="mb-4 flex justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search for Students"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow flex-1 overflow-y-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#640000] text-white">
                <th className="px-4 py-3 w-12">
                  <input
                    type="checkbox"
                    checked={
                      filteredStudents.length > 0 &&
                      selectedIds.size === filteredStudents.length
                    }
                    onChange={toggleSelectAll}
                    className="w-4 h-4 cursor-pointer"
                  />
                </th>
                <th className="px-4 py-3 text-left font-alike whitespace-nowrap">Student ID</th>
                <th className="px-4 py-3 text-left font-alike whitespace-nowrap">First</th>
                <th className="px-4 py-3 text-left font-alike whitespace-nowrap">Last</th>
                <th className="px-4 py-3 text-left font-alike whitespace-nowrap">M.I</th>
                <th className="px-4 py-3 text-left font-alike whitespace-nowrap">Gender</th>
                <th className="px-4 py-3 text-left font-alike whitespace-nowrap">DOB</th>
                <th className="px-4 py-3 text-left font-alike whitespace-nowrap">Hometown</th>
                <th className="px-4 py-3 text-left font-alike whitespace-nowrap">Contact</th>
                <th className="px-4 py-3 text-left font-alike whitespace-nowrap">Email</th>
                <th className="px-4 py-3 text-left font-alike whitespace-nowrap">Department</th>
                <th className="px-4 py-3 text-left font-alike whitespace-nowrap">Enrollment Date</th>
                <th className="px-4 py-3 text-left font-alike whitespace-nowrap">Year Level</th>
                <th className="px-4 py-3 text-left font-alike whitespace-nowrap">GWA</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="14" className="px-4 py-8 text-center text-gray-500">
                    Loading students...
                  </td>
                </tr>
              ) : filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan="14" className="px-4 py-8 text-center text-gray-500">
                    No students found. Complete registration to see records.
                  </td>
                </tr>
              ) : (
                filteredStudents.map((student) => (
                  <tr
                    key={student.studentId}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="px-4 py-4">
                      <input
                        type="checkbox"
                        checked={selectedIds.has(String(student.studentId))}
                        onChange={() => toggleSelect(String(student.studentId))}
                        className="w-4 h-4 cursor-pointer"
                      />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">{student.studentId}</td>
                    <td className="px-4 py-4 whitespace-nowrap">{student.firstName}</td>
                    <td className="px-4 py-4 whitespace-nowrap">{student.lastName}</td>
                    <td className="px-4 py-4 whitespace-nowrap">{student.middleInitial}</td>
                    <td className="px-4 py-4 whitespace-nowrap">{student.gender}</td>
                    <td className="px-4 py-4 whitespace-nowrap">{student.birthdate}</td> 
                    <td className="px-4 py-4 whitespace-nowrap">{student.hometown}</td>
                    <td className="px-4 py-4 whitespace-nowrap">{student.contactNo}</td>
                    <td className="px-4 py-4">{student.email}</td>
                    <td className="px-4 py-4 whitespace-nowrap">{student.department}</td>
                    <td className="px-4 py-4 whitespace-nowrap">{student.enrollmentDate}</td>
                    <td className="px-4 py-4 whitespace-nowrap">{student.yearLevel}</td>
                    <td className="px-4 py-4 whitespace-nowrap">{student.gwa}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-between items-center gap-4 pt-4 sticky bottom-0 bg-gray-50 p-4">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-[#640000] text-white rounded-lg hover:bg-red-800 font-medium transition font-alike"
          >
            Back
          </button>

          <div className="flex gap-4">
            <button
              onClick={handleEdit}
              className="px-6 py-2 bg-[#640000] text-white rounded-lg hover:bg-red-800 font-medium transition font-alike"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="px-6 py-2 bg-[#640000] text-white rounded-lg hover:bg-red-800 font-medium transition font-alike"
            >
              Delete
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-[#640000] text-white py-4 px-6">
        <div className="mx-auto flex justify-between items-center text-sm font-alike">
          <p>Montclair Academy © 2025</p>
          <a href="#" className="hover:text-red-100">
            Privacy Policy
          </a>
        </div>
      </footer>

      {isEditModalOpen && (
        <EditStudentModal
          student={studentToEdit}
          onSave={handleSaveEdit}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}
    </div>
  )
}