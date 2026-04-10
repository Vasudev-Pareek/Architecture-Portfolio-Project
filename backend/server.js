 const path = require("path");

const express = require("express");
const cors = require("cors");
// const path = require("path");

const projectRoutes = require("./routes/projectRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/projects", projectRoutes);

// const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});