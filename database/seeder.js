require('./index');
const mongoose = require('mongoose');
const {
  Category,
  Product,
  Brand
} = require('../server/models');

async function seedCategories() {
  console.log('Seeding categories to ' + mongoose.connection.name + '...');

  const categories = [{
      name: 'T-Shirt'
    },
    {
      name: 'Hoody'
    },
    {
      name: 'Shorts'
    },
  ];

  for (category of categories) {
    var newCategory = new Category(category);
    await newCategory.save();
  }

  const a = await Category.find();
  console.log('categories: ', a);
}

async function seedBrands() {
  console.log('Seeding brands to ' + mongoose.connection.name + '...');

  const brands = [{
      name: 'Adidas'
    },
    {
      name: 'Calvin Klein'
    },
    {
      name: 'Tommy Hilfiger'
    },
  ];

  for (brand of brands) {
    var newBrand = new Brand(brand);
    await newBrand.save();
  }

  const a = await Category.find();
  console.log('categories: ', a);
}

async function seedProducts() {
  console.log('Seeding products to ' + mongoose.connection.name + '...');

  const tshirt = await Category.findOne({
    name: 'T-Shirt'
  });
  const hoody = await Category.findOne({
    name: 'Hoody'
  });
  const shorts = await Category.findOne({
    name: 'Shorts'
  });

  const adidas = await Brand.findOne({
    name: 'Adidas'
  });
  const ck = await Brand.findOne({
    name: 'Calvin Klein'
  });
  const tommyh = await Brand.findOne({
    name: 'Tommy Hilfiger'
  });

  const products = [{
      name: 'Weiß',
      price: 17.5,
      category: tshirt._id,
      brand: adidas._id
    },
    {
      name: 'Blau',
      price: 17.5,
      category: tshirt._id,
      brand: ck._id
    },
    {
      name: 'Schwarz',
      price: 17.5,
      category: tshirt._id,
      brand: tommyh._id
    },
    {
      name: 'Adidas Classics grün',
      price: 37.5,
      category: hoody._id,
      brand: adidas._id
    },
    {
      name: 'Classic Blau',
      price: 89.9,
      category: hoody._id,
      brand: ck._id
    },
    {
      name: 'TH Jeans grau',
      price: 99.5,
      category: hoody._id,
      brand: tommyh._id
    },
    {
      name: 'Bermudas',
      price: 37.5,
      category: shorts._id,
      brand: adidas._id
    },
    {
      name: 'Chinos',
      price: 19.9,
      category: shorts._id,
      brand: ck._id
    },
    {
      name: 'Sports Wear',
      price: 24.9,
      category: shorts._id,
      brand: tommyh._id
    },
  ];

  for (product of products) {
    var newProduct = new Product(product);
    await newProduct.save();
  }

  const a = await Product.find();
  console.log('products: ', a);
}

seedCategories();
seedBrands();
seedProducts();