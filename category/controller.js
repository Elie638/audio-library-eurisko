const categoryService = require('./service');

exports.create = async req => {
    const category = {};
    if(!req.body.name || !req.body.description) {
        const error = new Error("Required parameter missing");
        error.statusCode = 422;
        throw error;
    }
    category.name = req.body.name;
    category.description = req.body.description;
    try { 
        const resultCategory = await categoryService.createCategory(category);
        res.status(200).JSON({ message: "Category created", category })
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
}