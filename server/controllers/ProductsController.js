const {
  Product
} = require('../models');

const ProductsController = {
  async index(req, res) {
    const products = await Product.find().populate('category').populate('brand');
    res.send(products);
  },
  async store(req, res) {
    const newProduct = new Product(req.body);
    newProduct.save();
    res.send(newProduct);
  },
  async show(req, res) {
    const product = await Product.findById(req.params.id).populate('category').populate('brand');
    res.send(product);
  },
  async update(req, res) {
    await Product.findByIdAndUpdate(req.params.id, req.body, function(err, product) {
      res.send(product);
    });
  },
  async remove(req, res) {
    const product = await Product.findById(req.params.id);
    product.remove();
    res.send(204);
  }
};

module.exports = ProductsController;
