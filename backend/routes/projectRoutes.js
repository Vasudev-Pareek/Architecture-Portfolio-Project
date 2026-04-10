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

module.exports = router;