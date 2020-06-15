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

  const a = await Brand.find();
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
      name: 'Adidas TREFOIL',
      price: 12.5,
      logo: "https://img01.ztat.net/article/AD/12/2O/0C/EK/11/AD122O0CE-K11@4.jpg?imwidth=1800&filter=packshot",
      category: tshirt._id,
      brand: adidas._id
    },
    {
      name: 'Tipping CK Essential',
      price: 9.75,
      logo: "https://img01.ztat.net/article/C1/82/2O/08/JQ/11/C1822O08J-Q11@8.jpg?imwidth=606",
      category: tshirt._id,
      brand: ck._id
    },
    {
      name: 'Straight Logo TEE',
      price: 17.7,
      logo: "https://img01.ztat.net/article/TO/B2/2O/07/SJ/11/TOB22O07S-J11@5.jpg?imwidth=606&filter=packshot",
      category: tshirt._id,
      brand: tommyh._id
    },
    {
      name: 'Core Eleven',
      price: 37.5,
      logo: "https://img01.ztat.net/article/AD/54/2G/0D/KK/11/AD542G0DK-K11@1.1.jpg?imwidth=606&filter=packshot",
      category: hoody._id,
      brand: adidas._id
    },
    {
      name: 'Logo Print Hoodie',
      price: 89.9,
      logo: "https://img01.ztat.net/article/6C/A2/2S/01/YA/11/6CA22S01Y-A11@2.jpg?imwidth=606&filter=packshot",
      category: hoody._id,
      brand: ck._id
    },
    {
      name: 'Tommy Hilfiger Hoodie',
      price: 99.5,
      logo: "https://img01.ztat.net/article/TO/12/2S/07/5M/11/TO122S075-M11@7.jpg?imwidth=606&filter=packshot",
      category: hoody._id,
      brand: tommyh._id
    },
    {
      name: 'Adidas Performance',
      price: 10.5,
      logo: "https://img01.ztat.net/article/AD/58/2H/06/GK/11/AD582H06G-K11@39.1.jpg?imwidth=1800&filter=packshot",
      category: shorts._id,
      brand: adidas._id
    },
    {
      name: 'Calvin Klein Double',
      price: 19.9,
      logo: "https://img01.ztat.net/article/C1/78/2H/01/0A/11/C1782H010-A11@8.jpg?imwidth=1800&filter=packshot",
      category: shorts._id,
      brand: ck._id
    },
    {
      name: 'Tommy Hilfiger Badeshorts',
      price: 24.0,
      logo: "https://img01.ztat.net/article/TO/18/2H/02/YK/11/TO182H02Y-K11@2.jpg?imwidth=606",
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
// Timeout bei Mac -> wegen der asynchronen Funktion
setTimeout(seedProducts, 1000);
