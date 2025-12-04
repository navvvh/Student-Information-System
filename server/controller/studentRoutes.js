const express = require("express");
const router = express.Router();
const Student = require("../model/studentModel");

//Get all students
router.get("/", (request, response) => {
    Student.find().then(Student => {
        response.status(200).json(Student)
    }).catch(error => {
        response.status(400).json(
            'Error' + error
        );
    });
});

//Register students
router.post("/register", async (request, response) => {
    const student = new Student(request.body);

    try{
        await student.save();
        response.status(201).send({
            message: "Student added successfully",
            status: true,
        });
    } catch (error){
        console.error(error); 
        let message = "Unable to add Student";
        if (error.code === 11000) {
           
             message = "Registration failed: Student ID or Email already exists. Please use unique values.";
        } else if (error.name === 'ValidationError') {
           
             message = "Validation failed: Please ensure all required fields are filled correctly.";
        }
        response.status(400).send({ 
            message: message,
            status: false,
        });
    }
});

//Update students info by id
router.put("/update/:studentId", (request, response) => {
    Student.findOneAndUpdate(
        { studentId: request.params.studentId},
        request.body,
        { new: true}
   )
    .then(student => {
        if (!student) {
            return response.status(404).json({ message: 'Student not found.' });
        }
        response.status(200).json({
            message: 'Student updated successfully',
            student: student 
        });
    })
    .catch(error => {
        console.error(error);
        response.status(500).json({
            message: 'Error updating student',
            error: error.message
        });
    });
});

//delete student info by id
router.delete('/:studentId', (request, response) => {
   Student.findOneAndDelete({ studentId: request.params.studentId }) 
    .then((student) => { 
        if (!student) {
             return response.status(404).send({
                message: 'No student found with that ID',
                success: false
            });
        }
        response.status(200).send ({ 
            message: 'Student deleted successfully',
            success: true
        });
    }).catch((error) => {
        console.log(error);
        response.status(500).send({
            message: "Internal server error during deletion",
            success: false,
            error: error.message 
        });
    })
})
module.exports = router;

