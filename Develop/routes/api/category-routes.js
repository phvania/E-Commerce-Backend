const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Productsrouter.get('/',  (req, res) => {
  try {
    const CategoryData =  Category.findAll();
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Productsrouter.get('/:id', async (req, res) => {
  try {
    const categoryData =  Category.findByPk(req.params.id, {
      // JOIN with product, using the productTag through table
      include: [{ model: Product, through: ProductTag, as: 'tag_product' }] //need to ask
    });

    if (!CategoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.post('/', (req, res) => {
  // create a new category  router.post('/', (req, res) => {
  try {
    const categoryData =  Category.create(req.body);  // need to change here
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});




router.put('/:id', (req, res) => {
  // update a category by its `id` valuerouter.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {
    const categoryData = Category.update(req.body);  // need to change here
    res.status(200).json(categoryData);
    } catch (err) {
      res.status(400).json(err);
    }
    
    });



//router.delete('/:id', (req, res) => {
  // delete a category by its `id` value// DELETE a tag
router.delete('/:id', (req, res) => {
  try {
    const categoryData =  Category.destroy({
      where: { id: req.params.id }
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;




module.exports = router;