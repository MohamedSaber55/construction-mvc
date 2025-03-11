import Construction from "../models/Construction.js";

// عرض البيانات
export const getAllData = async (req, res) => {
    const data = await Construction.find();
    res.render("index", { data });
};

// إضافة بيانات جديدة
export const addData = async (req, res) => {
    const { place, redBricks, solidBricks, receivedAmount, receivedDate } = req.body;
    const totalBricks = Number(redBricks) + Number(solidBricks);

    await Construction.create({ place, redBricks, solidBricks, totalBricks, receivedAmount, receivedDate });
    res.redirect("/");
};

// عرض صفحة التعديل
export const getEditPage = async (req, res) => {
    try {
        const construction = await Construction.findById(req.params.id);
        res.render("edit", { construction });
    } catch (error) {
        res.status(500).send("خطأ في جلب البيانات");
    }
};

// تحديث بيانات السجل
export const updateConstruction = async (req, res) => {
    try {
        await Construction.findByIdAndUpdate(req.params.id, req.body);
        res.redirect("/");
    } catch (error) {
        res.status(500).send("خطأ في التحديث");
    }
};

// حذف السجل
export const deleteConstruction = async (req, res) => {
    try {
        await Construction.findByIdAndDelete(req.params.id);
        res.redirect("/");
    } catch (error) {
        res.status(500).send("خطأ في الحذف");
    }
};
