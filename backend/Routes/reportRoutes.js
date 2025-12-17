const express = require ('express')
const router = express.Router ();
const { 
    createReport,
  getReports,
  getReportById,
  updateReport,
  deleteReport 
} 
= require ('../Controllers/reportController')
const multer = require ('multer')
const path = require ('path');
const { protect, requireAdmin } = require('../Middlewares/authMidddleware');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "..", "uploads"));
  } ,
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);

  } 
});

const upload = multer({ storage });

router.post ('/create', upload.single("photo"), createReport)
// router.get('/signin', protect, getReports)
//router.get("/:id",protect, getReportById);
//router.put("/update/:id", protect, requireAdmin, upload.single("photo"), updateReport);
router.delete("/delete/:id", protect, requireAdmin, deleteReport);

module.exports = router ;
