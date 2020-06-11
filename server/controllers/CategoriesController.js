const {
  Category,
  Product
} = require('../models');

const CategoriesController = {
  async index(req, res) {
    const categories = await Category.find();
    res.send(categories);
  },
  async store(req, res) {
    const newCategory = new Category(req.body);
    newCategory.save();
    res.send(newCategory);
  },
  async show(req, res) {
    const category = await Category.findById(req.params.id);
    res.send(category);
  },
  async update(req, res) {
    await Category.findByIdAndUpdate(req.params.id, req.body, function(err, category) {
      res.send(category);
    });
  },
  async remove(req, res) {
    const category = await Category.findById(req.params.id);
    category.remove();
    res.send(204);
  },
  async products(req, res) {
    const products = await Product.find({
      category: req.params.category_id
    }).populate('category').populate('brand');
    res.send(products);
  }
};

module.exports = CategoriesController;