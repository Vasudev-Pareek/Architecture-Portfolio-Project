const express = require("express");
const router = express.Router();

const {
  addProject,
  getProjects,
  getCategory,
  addCategory,
  addSubCategory,
  getSubCategory,
  addcustomerResponses,
  getcustomerResponses,
  deleteAllData,
  deleteProjectById,
  deleteCategoryById,
  deleteSubCategoryById,
  deleteAllProjects,
  deleteAllSubCategories,
  deleteAllCategories,
  upload
} = require("../controllers/projectController");

router.post("/add", upload.single("image"), addProject);
router.get("/all", getProjects);


router.get("/allCategory", getCategory);
router.post("/addCategory", addCategory);
router.post("/addSubCategory", addSubCategory);
router.post("/addcustomerResponses", addcustomerResponses);
router.get("/getcustomerResponses", getcustomerResponses);
router.get("/allSubCategory", getSubCategory);
// router.get("/allSubCategory", (req, res) => {
//   console.log("SUBCATEGORY API HIT");
//   res.send("working");
// });


// Delete API
// FIRST: specific routes
router.delete("/projects/delete-all", deleteAllProjects);
router.delete("/subcategories/delete-all", deleteAllSubCategories);
router.delete("/categories/delete-all", deleteAllCategories);

// THEN: dynamic routes
router.delete("/projects/:id", deleteProjectById);
router.delete("/categories/:id", deleteCategoryById);
router.delete("/subcategories/:id", deleteSubCategoryById);

// global delete
router.delete("/delete-all", deleteAllData);

module.exports = router;