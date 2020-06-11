const {
  Brand,
  Product
} = require('../models');

const BrandsController = {
  async index(req, res) {
    const brands = await Brand.find();
    res.send(brands);
  },
  async store(req, res) {
    const brand = new Brand(req.body);
    brand.save();
    res.send(brand);
  },
  async show(req, res) {
    const brand = await Brand.findById(req.params.id);
    res.send(brand);
  },
  async update(req, res) {
    await Brand.findByIdAndUpdate(req.params.id, req.body, function(err, category) {
      res.send(category);
    });
  },
  async remove(req, res) {
    const brand = await Brand.findById(req.params.id);
    brand.remove();
    res.send(204);
  },
  async products(req, res) {
    const products = await Product.find({
      brand: req.params.brand_id
    }).populate('category').populate('brand');
    res.send(products);
  }
};

module.exports = BrandsController;