const db = require("../models/db");
const multer = require("multer");
const fs = require("fs");

// Storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {

    const category = req.body.category;
    const dir = `uploads/${category}`;

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    cb(null, dir);
  },

  filename: function (req, file, cb) {
    const filename = Date.now() + "-" + file.originalname;
    cb(null, filename);
  }
});

const upload = multer({ storage });

// Add project
const addProject = (req, res) => {

console.log("API HIT");

  const { title, category, subcategory, description } = req.body;
  // const imagePath = req.file ? req.file.path : null;


    const rawPath = req.file ? req.file.path : null;
    const imagePath = rawPath ? rawPath.replace(/\\/g, "/") : null;

    console.log("rawPath:", rawPath);
    console.log("imagePath:", imagePath);
    
    console.log("title:",title)
    console.log("category:",category)
    console.log("subcategory:",subcategory)
    console.log("description:",description)
    //   const imagePath = req.file.path;
    console.log("imagePath:",imagePath)


    const sql = `
        INSERT INTO projects 
        (title, category, subcategory, image, description)
        VALUES ($1, $2, $3, $4, $5)
        `;

    //   const sql = `
    //   INSERT INTO projects 
    //   (title, category, subcategory, image, description)
    //   VALUES (?, ?, ?, ?, ?)
    //   `;

  db.query(
    sql,
    [title, category, subcategory, imagePath, description],
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Project added successfully"
      });
    }
  );
};


// Get all projects OR by category
const getProjects = (req, res) => {
  const { category } = req.query;

  let sql = "SELECT * FROM projects";
  let values = [];

  if (category && category !== "all") {
    sql += " WHERE category = $1";
    values.push(category);
  }

  db.query(sql, values, (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result.rows);
  });
};



module.exports = {
  addProject,
  getProjects,
  upload
};