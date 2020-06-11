const express = require('express'),
	path = require('path'),
	rootPath = path.normalize(__dirname + '/../'),
	router = express.Router(),
	{
		HomeController,
		ProductsController,
		CategoriesController,
		BrandsController
	} = require('./controllers');

module.exports = function(app){	

	router.get('/', HomeController.index);

	router.get('/products', ProductsController.index);
	router.post('/products', ProductsController.store);
	router.get('/products/:id', ProductsController.show);
	router.put('/products/:id', ProductsController.update);
	router.delete('/products/:id', ProductsController.remove);

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

	app.use('/api', router);
};
