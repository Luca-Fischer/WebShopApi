const {
    Size,
    Stock
} = require('../models');

const StockController = {
    async index(req, res) {
        const stock = await Stock.find({
            product: req.params.product_id
        })
            .populate('product')
            .populate('size')
            .populate({
                path: 'product',
                populate: {
                    path: 'category',
                    model: 'Category'
                }
            })
            .populate({
                path: 'product',
                populate: {
                    path: 'brand',
                    model: 'Brand'
                }
            });
        res.send(stock);
    },
    async store(req, res) {
        const newSize = new Size(req.body);
        newSize.save();
        res.send(newSize);
    },
    async show(req, res) {
        const product = await Size.findById(req.params.id)
            .populate('product')
            .populate('size')
            .populate({
                path: 'product',
                populate: {
                    path: 'category',
                    model: 'Category'
                }
            })
            .populate({
                path: 'product',
                populate: {
                    path: 'brand',
                    model: 'Brand'
                }
            });
        res.send(product);
    },
    async update(req, res) {
        await Size.findByIdAndUpdate(req.params.id, req.body, function (err, product) {
            res.send(product);
        });
    },
    async remove(req, res) {
        const product = await Size.findById(req.params.id);
        product.remove();
        res.send(204);
    }
};

module.exports = StockController;
