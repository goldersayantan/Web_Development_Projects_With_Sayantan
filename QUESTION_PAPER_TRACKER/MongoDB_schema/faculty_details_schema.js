const mongoose = require('mongoose');

const faculty_details_schema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
    },
    phone_number:   {
        type: Number,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    subject:    {
        type: String,
        required: true,
    },
    code:   {
        type: String,
        required: true,
    },
    program:    {
        type: String,
        required: true,
    },
});

const login_faculty_details = mongoose.model('login_faculty_details', faculty_details_schema);
module.exports = login_faculty_details;