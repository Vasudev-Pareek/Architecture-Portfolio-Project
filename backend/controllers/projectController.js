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

  const { title, category, subcategory, description, ActiveProject, SetCover } = req.body;
  // const imagePath = req.file ? req.file.path : null;


    const rawPath = req.file ? req.file.path : null;
    const imagePath = rawPath ? rawPath.replace(/\\/g, "/") : null;
    const isActive = ActiveProject === "true" || ActiveProject === true;
    const isCover = SetCover === "true" || SetCover === true;

    console.log("ActiveProject:",ActiveProject)
    console.log("SetCover:",SetCover)
    console.log("isActive:",isActive)
    console.log("isCover:",isCover)

    const sql = `
        INSERT INTO projects 
        (title, category, subcategory, image, description, is_active_project, is_set_cover)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        `;

  db.query(
    sql,
    [title, category, subcategory, imagePath, description, isActive, isCover],
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Project added successfully"
      });
    }
  );
};

// Get projects
const getProjects = (req, res) => {

  const { category } = req.query;

  let sql = "SELECT * FROM projects";
  let values = [];

  // if (category) {
  //   sql += " WHERE category = $1";
  //   values.push(category);
  // }
  // console.log("category is here:", category)

  if (category && category !== "all") {
    sql += " WHERE category = $1";
    values.push(category);
  }

  db.query(sql, values, (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result.rows);
  });
};


// Get All Categories
const getCategory = (req, res) => {

  const sql = "SELECT * FROM project_categories ORDER BY id ASC";

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json(result.rows);
  });
};

// Get All Categories
const getSubCategory = (req, res) => {

  const sql = "SELECT * FROM project_subcategories ORDER BY id ASC";

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json(result.rows);
  });
};


// Get all customer Responses
// const getcustomerResponses = (req, res) => {

//   const sql = "SELECT * FROM customer_responses ORDER BY id ASC";

//   db.query(sql, (err, result) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ error: "Database error" });
//     }

//     res.json(result.rows);
//   });
// };

// Get all customer Responses
const getcustomerResponses = (req, res) => {

  const sql = "SELECT * FROM customer_responses ORDER BY id ASC";

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }

    const rows = result.rows;

    const today = new Date();
    const todayStr = today.toISOString().split("T")[0];

    // Future deadlines
    const futureDeadlines = rows.filter(r => {
      return new Date(r.deadline) > today;
    }).length;

    // New today
    const newToday = rows.filter(r => {
      const createdDate = new Date(r.created_datetime).toISOString().split("T")[0];
      return createdDate === todayStr;
    }).length;

    res.json({
      stats: {
        total: rows.length,
        future_deadlines: futureDeadlines,
        new_today: newToday
      },
      data: rows
    });

  });
};

// Add Category
const addCategory = (req, res) => {
  console.log("API HIT");

  const { category, categoryIcon } = req.body;

  if (!category || !categoryIcon) {
    return res.status(400).json({ error: "Category name and icon are required" });
  }

  const created_datetime = new Date();

  const sql = `
    INSERT INTO project_categories 
    (category_name, category_icon, created_datetime)
    VALUES ($1, $2, $3)
  `;

  db.query(sql, [category, categoryIcon, created_datetime], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json({
      message: "Category added successfully"
    });
  });
};

// Add SubCategory
const addSubCategory = (req, res) => {
  console.log("API HIT");

  const { categoryid, subcategory } = req.body;

  if (!categoryid || !subcategory) {
    return res.status(400).json({ error: "Category name and icon are required" });
  }

  const created_datetime = new Date();

  const sql = `
    INSERT INTO project_subcategories 
    (parent_category_id, subcategory_name, created_datetime)
    VALUES ($1, $2, $3)
  `;

  db.query(sql, [categoryid, subcategory, created_datetime], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json({
      message: "Category added successfully"
    });
  });
};


// Add customer Responses
const addcustomerResponses = (req, res) => {
  console.log("API HIT");

  const { FullName, EmailAddress, Deadline, MobileNumber, Subject, description } = req.body;

  if (!FullName || !EmailAddress) {
    return res.status(400).json({ error: "Full Name and Email Address are required" });
  }

  const created_datetime = new Date();
  const today = new Date();

  const submitted_date = String(today.getDate()).padStart(2, '0') + "-" +
                        String(today.getMonth() + 1).padStart(2, '0') + "-" +
                        today.getFullYear();

  const short_name = FullName
    .trim()
    .split(/\s+/)
    .map(word => word[0])
    .join("")
    .toUpperCase();

  const sql = `
    INSERT INTO customer_responses
    (full_name, email_address, subject_project_type, submitted_date, deadline, mobile_number, description, short_name, created_datetime)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
  `;

  db.query(
    sql,
    [FullName, EmailAddress, Subject, submitted_date, Deadline, MobileNumber, description, short_name, created_datetime],
    (err, result) => {
      if (err) {
        console.error("DB ERROR:", err);
        return res.status(500).json({ error: "Database error" });
      }

      res.json({
        message: "Customer response submitted successfully"
      });
    }
  );
};


module.exports = {
  addProject,
  getProjects,
  getCategory,
  addCategory,
  getSubCategory,
  addSubCategory,
  addcustomerResponses,
  getcustomerResponses,
  upload
};