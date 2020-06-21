const express = require('express'),
    path = require('path'),
    rootPath = path.normalize(__dirname + '/../'),
    router = express.Router(),
    {
        HomeController,
        ProductsController,
        CategoriesController,
        BrandsController,
        StockController
    } = require('./controllers');

module.exports = function (app) {

    router.get('/', HomeController.index);

    router.get('/products', ProductsController.index);
    router.post('/products', ProductsController.store);
    router.get('/products/:id', ProductsController.show);
    router.put('/products/:id', ProductsController.update);
    router.delete('/products/:id', ProductsController.remove);
    router.get('/products/:product_id/stock', StockController.index);
    router.post('/products/:product_id/stock', ProductsController.store);
    router.get('/products/:product_id/stock/:id', ProductsController.show);
    router.put('/products/:product_id/stock/:id', ProductsController.update);
    router.delete('/products/:product_id/stock/:id', ProductsController.remove);

    router.get('/categories', CategoriesController.index);
    router.post('/categories', CategoriesController.store);
    router.get('/categories/:id', CategoriesController.show);
    router.put('/categories/:id', CategoriesController.update);
    router.delete('/categories/:id', CategoriesController.remove);
    router.get('/categories/:category_id/products', CategoriesController.products);

    router.get('/brands', BrandsController.index);
    router.post('/brands', BrandsController.store);
    router.get('/brands/:id', BrandsController.show);
    router.put('/brands/:id', BrandsController.update);
    router.delete('/brands/:id', BrandsController.remove);
    router.get('/brands/:brand_id/products', BrandsController.products);

    // router.post('/orders', OrderController.store);
    //{
    //	user: 1,
    //	stock: 1, // --> product & size
    //	amount: 3
    //}
    // OrderController --> StockModel mit der ID aus JSON vom POST --> amount -= 1

    app.use('/api', router);
};
