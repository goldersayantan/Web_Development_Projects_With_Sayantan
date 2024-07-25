const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const multer = require("multer");
const port = process.env.port || 8080;
const request = require("express");

const mongoose = require("mongoose");
app.set("views", path.join(__dirname, "/views"))

const connectDB = require('../database/MongoDB_connection');
connectDB();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs")
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("welcome")
})

app.get("/faculty_sign_in", (req, res) => {
    res.render("faculty_sign_in")
})

const User = require('../MongoDB_schema/create_faculty_schema');

app.post("/faculty_sign_in", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.render("faculty_sign_in", { error: "Email or password is incorrect" });
        }
        return res.redirect("/faculty_details"); // Redirect to the faculty_details page upon successful authentication
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while signing in.");
    }
});


app.get("/faculty_details", (req, res) => {
    res.render("faculty_details")
})

const login_faculty_details = require("../MongoDB_schema/faculty_details_schema");
app.post("/faculty_details", async (req, res) => {
    try {
        const {name, phone_number, department, subject, code, program} = req.body;
        const FacultyDetails = new login_faculty_details({name,  phone_number, department, subject, code, program})
        const isValidPhoneNumber = /^\d{10}$/;
        if (!isValidPhoneNumber.test(phone_number)){
            return res.send("Please enter valid 10-digit phone numbers for Phone.")
        }
        await FacultyDetails.save()
        res.redirect("/upload_file")
    } catch (error)   {
        console.log(error)
    }
})

app.get("/thank_you", (req, res) => {
    res.render("thank_you")
})

app.post("/thank_you", (req, res) => {
    res.render("thank_you")
})
app.get("/welcome_hod", (req, res) => {
    res.render("welcome_hod")
})

app.post("/welcome_hod", (req, res) => {
    res.render("welcome_hod")
})

app.get("/hod_section_open_log_in", (req, res) => {
    res.render("hod_section_open_log_in")
})

app.post("/hod_section_open_log_in", (req, res) => {
    res.render("welcome_hod")
})

app.get("/create_faculty", (req, res) => {
    res.render("create_faculty")
})

const create_faculty_details = require('../MongoDB_schema/create_faculty_schema')
app.post("/create_faculty", async (req, res) => {
    try {
        const {name, email, designation, password} = req.body;
        const newFaculty = new create_faculty_details({name, email, designation, password})
        await newFaculty.save()
        res.redirect("/create_faculty_success")
    } catch (error) {
        console.log(error);
    }
})

app.get("/create_faculty_success", (req, res) => {
    res.render("create_faculty_success")
})

app.post("/create_faculty_success", (req, res) => {
    res.render("create_faculty_success")
})

app.get("/hod_sign_in", (req, res) => {
    res.render("hod_sign_in")
})

app.post("/hod_sign_in", (req, res) => {
    res.redirect("/hod_panel");
})

const User_details = require('../MongoDB_schema/faculty_details_schema');

app.get("/hod_panel", async (req, res) => {
    try {
        const users = await User_details.find({});
        res.render("hod_panel", { users });
    } catch (error) {
        res.status(500).send("Error fetching from DB");
    }
})

app.use(express.urlencoded({ extended: true }));
// const upload = multer({dest: "QUESTION_PAPERS/"});
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        return callback(null, './QUESTION_PAPER');
    },
    filename: (req, file, callback) => {
        return callback(null, `${Date.now()}--${file.originalname}`);
    }
})
const upload = multer({ storage: storage });

app.get("/upload_file", (req, res) => {
    res.render("upload_file");
});


app.post("/upload_file", upload.single("file"), (req, res) => {
    console.log(req.file)
    console.log(req.body);
    return res.redirect("/thank_you");
})


app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
})
