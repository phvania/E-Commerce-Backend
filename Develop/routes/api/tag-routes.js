const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data

router.get('/',  (req, res) => {
  try {
    const TagData =  Tag.findAll();
    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});
//GET a single tag by id
router.get('/:id', async (req, res) => {
  try {
    const TagData = await Tag.findByPk(req.params.id, {
      // JOIN with tagData, using the productTag through table
      include: [{ model: Product, through: ProductTag, as: 'tag_product' }] //need to ask
    });

    if (!TagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
});



//router.post('/', (req, res) => {
  // create a new tag
//});
// CREATE a tag
//router.post('/', async (req, res) => {
  router.post('/', (req, res) => {
  try {
    const TagData =  Tag.create(req.body);  // need to change here
    res.status(200).json(TagData);
  } catch (err) {
    res.status(400).json(err);
  }
});



router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {
const TagData = Tag.update(req.body);  // need to change here
res.status(200).json(TagData);
} catch (err) {
  res.status(400).json(err);
}

});

//router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value

// DELETE a tag
router.delete('/:id', (req, res) => {
  try {
    const TagData =  Tag.destroy({
      where: { id: req.params.id }
    });
    if (!TagData) {
      res.status(404).json({ message: 'No tag with this id!' });
      return;
    }
    res.status(200).json(TagData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
