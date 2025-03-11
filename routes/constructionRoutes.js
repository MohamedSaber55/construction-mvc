import { Router } from "express";
const router = Router();
import { getAllData, addData, getEditPage, updateConstruction, deleteConstruction } from "./../controller/constructionController.js";

// عرض البيانات
router.get("/", getAllData);

// عرض نموذج إضافة البيانات
router.get("/add", (req, res) => {
    res.render("add"); // Ensure you have an "add.ejs" or "add.html" template
});

// ✅ إضافة بيانات جديدة (Handling Form Submission)
router.post("/add", addData);

// عرض صفحة التعديل
router.get("/edit/:id", getEditPage);

// تحديث البيانات
router.post("/update/:id", updateConstruction);

// حذف البيانات
router.post("/delete/:id", deleteConstruction);


export default router;
