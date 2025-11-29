"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bg8 from "../../assets/asdagffalhaalhjshgd.png";

export default function RecordsSection() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [students, setStudents] = useState([]);

  // Load saved students from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("students") || "[]");
    setStudents(saved);
  }, []);

  // Save students to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const filteredStudents = students.filter((student) =>
    Object.values(student).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const toggleSelect = (id) => {
    const newSelected = new Set(selectedIds);
    newSelected.has(id) ? newSelected.delete(id) : newSelected.add(id);
    setSelectedIds(newSelected);
  };

  const toggleSelectAll = () => {
    if (selectedIds.size === filteredStudents.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(filteredStudents.map((s) => s.id)));
    }
  };

  // Insert a dummy student (frontend testing)
  const handleInsert = () => {
    const newStudent = {
      id: `2023-${Math.floor(Math.random() * 100000)}`,
      firstName: "New",
      lastName: "Student",
      mi: "X",
      gender: "Unknown",
      dob: "01/01/2000",
      hometown: "Unknown",
      contact: "0000000000",
      email: "new@student.com",
      department: "CCIT",
      enrollmentDate: "2023-08-15",
      yearLevel: "1st",
      gwa: "0.00",
    };
    setStudents([...students, newStudent]);
  };

  // Update the first selected student for demonstration
  const handleUpdate = () => {
    if (selectedIds.size === 0) return alert("Select a student to update");
    const idToUpdate = Array.from(selectedIds)[0];
    const updated = students.map((s) =>
      s.id === idToUpdate ? { ...s, firstName: s.firstName + " Updated" } : s
    );
    setStudents(updated);
  };

  // Delete selected students
  const handleDelete = () => {
    if (selectedIds.size === 0) return alert("Select students to delete");
    const updated = students.filter((s) => !selectedIds.has(s.id));
    setStudents(updated);
    setSelectedIds(new Set());
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#640000] text-white px-4 py-3 flex items-center gap-3">
        <img src={bg8} alt="Montclair" className="w-16 h-16 -m-5" />
        <span className="text-1xl font-alike leading-tight">
          Montclair <br /> Academy
        </span>
      </header>

      {/* Main */}
      <main className="flex flex-col flex-1 px-6 py-8 w-full min-h-[calc(100vh-96px)]">
        {/* Search */}
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

        {/* Table */}
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
                <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                  Student ID
                </th>
                <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                  First
                </th>
                <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                  Last
                </th>
                <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                  M.I
                </th>
                <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                  Gender
                </th>
                <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                  DOB
                </th>
                <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                  Hometown
                </th>
                <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                  Contact
                </th>
                <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                  Email
                </th>
                <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                  Department
                </th>
                <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                  Enrollment Date
                </th>
                <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                  Year Level
                </th>
                <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                  GWA
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr
                  key={student.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      checked={selectedIds.has(student.id)}
                      onChange={() => toggleSelect(student.id)}
                      className="w-4 h-4 cursor-pointer"
                    />
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">{student.id}</td>
                  <td className="px-4 py-4 whitespace-nowrap">{student.firstName}</td>
                  <td className="px-4 py-4 whitespace-nowrap">{student.lastName}</td>
                  <td className="px-4 py-4 whitespace-nowrap">{student.mi}</td>
                  <td className="px-4 py-4 whitespace-nowrap">{student.gender}</td>
                  <td className="px-4 py-4 whitespace-nowrap">{student.dob}</td>
                  <td className="px-4 py-4 whitespace-nowrap">{student.hometown}</td>
                  <td className="px-4 py-4 whitespace-nowrap">{student.contact}</td>
                  <td className="px-4 py-4">{student.email}</td>
                  <td className="px-4 py-4 whitespace-nowrap">{student.department}</td>
                  <td className="px-4 py-4 whitespace-nowrap">{student.enrollmentDate}</td>
                  <td className="px-4 py-4 whitespace-nowrap">{student.yearLevel}</td>
                  <td className="px-4 py-4 whitespace-nowrap">{student.gwa}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredStudents.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No students found matching your search.
            </div>
          )}
        </div>

        {/* Buttons at bottom */}
        <div className="mt-4 flex justify-between items-center gap-4 pt-4 sticky bottom-0 bg-gray-50 p-4">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-[#640000] text-white rounded-lg hover:bg-red-800 font-medium transition"
          >
            Back
          </button>

          <div className="flex gap-4">
            <button onClick={handleInsert} className="px-6 py-2 bg-[#640000] text-white rounded-lg hover:bg-red-800 font-medium transition">
              Insert
            </button>
            <button onClick={handleUpdate} className="px-6 py-2 bg-[#640000] text-white rounded-lg hover:bg-red-800 font-medium transition">
              Update
            </button>
            <button onClick={handleDelete} className="px-6 py-2 bg-[#640000] text-white rounded-lg hover:bg-red-800 font-medium transition">
              Delete
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#640000] text-white py-4 px-6">
        <div className="mx-auto flex justify-between items-center text-sm">
          <p>Montclair Academy © 2025</p>
          <a href="#" className="hover:text-red-100">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
}
