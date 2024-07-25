const mongoose = require('mongoose');

const create_faculty_schema = new mongoose.Schema ({
    name:   {
        type: String,
        required: true
    },
    email:  {
        type: String,
        required: true
    },
    designation:    {
        type: String,
        required: true
    },
    password:   {
        type: String,
        required: true
    },
});

const create_faculty_details = mongoose.model('Create_faculty_details', create_faculty_schema);
module.exports = create_faculty_details;