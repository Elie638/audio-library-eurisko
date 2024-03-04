const Category = require('./model');

exports.createCategory = async req => {
    const name = req.name;
    const description = req.description;
    const category = new Category({
        name: name,
        description: description,
    });
    await category.save()
    console.log('Created Category');
    return category;
};

exports.findCategory = async ID => {
  return await Category.findById(ID);
}