const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("uploads"));

mongoose.connect("mongodb://127.0.0.1:27017/TestCRUD");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true); // Accept file
  } else {
    cb(new Error("Please upload a valid image (JPG/PNG)."), false); // Reject file
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   const user = await UserModel.findOne({ email });
//   if (!user) {
//     return res.status(400).json({ message: "Invalid email or password" });
//   }

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) {
//     return res.status(400).json({ message: "Invalid email or password" });
//   }

//   res.json({ message: "Login successful", user });
// });

app.post("/createUser", upload.single("image"), async (req, res) => {
  try {
    const existingUser = await UserModel.findOne({ email: req.body.email });

    if (existingUser) {
      // Email already exists, return an error response
      return res.status(400).json({ message: "Email already exists" });
    }

    // Convert courses from string back to array
    const coursesArray = JSON.parse(req.body.courses);

    const newUser = new UserModel({
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      designation: req.body.designation,
      gender: req.body.gender,
      courses: coursesArray,
      image: req.file ? req.file.filename : null,
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/employeeList", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete(id)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.find({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.put("/updateUser/:id", upload.single("image"), async (req, res) => {
  try {
    const id = req.params.id;
    const coursesArray = JSON.parse(req.body.courses);

    const updatedData = {
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      designation: req.body.designation,
      gender: req.body.gender,
      courses: coursesArray,
    };

    if (req.file) {
      updatedData.image = req.file.filename;
    }

    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: id },
      updatedData,
      { new: true }
    );

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(3001, () => {
  console.log("Server is running");
});
