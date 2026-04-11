 const path = require("path");

const express = require("express");
const cors = require("cors");
// const path = require("path");

const projectRoutes = require("./routes/projectRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

// app.use(cors());
// const cors = require("cors");

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5000",
    "http://localhost:4000",
    "https://architecture-portfolio-project.onrender.com"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // ✅ important


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/projects", projectRoutes);

// const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});