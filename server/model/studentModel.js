const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    middleInitial: {
        type: String,
    },
    studentId: {
        type: String,
        unique: true,
    },
    gender: {
        type: String,
    },
    birthdate: {
        type: String,
    },
    hometown: {
        type: String,
    },
    contactNo: {
        type: Number,
    },
    email: {
        type: String,
        unique: true,
    },
    department: {
        type: String,
    },
    enrollmentDate: {
        type: String,
    },
    yearLevel: {
        type: Number,
    },
    gwa: {
        type: Number,
    },
});

module.exports = mongoose.model("Student", studentSchema);