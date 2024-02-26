const Category = require('./model');

exports.createCategory = req => {
    const name = req.body.name;
    const description = req.body.description;
    const createdAt = new Date().toISOString();
    const category = new Category({
        name: name,
        description: description,
        createdAt: createdAt,
        updatedAt: createdAt 
        //function saves both dates to the same thing at creation
        //independent edit function could be added
    });
    category
        .save()
        .then(() => {
          console.log('Created Category');
        })
        .catch(err => {
          console.log(err);
        });
};