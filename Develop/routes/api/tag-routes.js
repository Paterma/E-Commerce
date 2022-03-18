const router = require('express').Router();
const res = require('express/lib/response');
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    attributes:['id', 'tag_name'],
    include: [{
      model: Product, 
      attributes: ['id', 'product_name', 'price', 'stock', 'catergory_id']
    }]
  }) .then(tagData =>res.json(tagData))
})
router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    }, attributes: ['id', 'tag_name'], 
    include: [{
      model: Product, 
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }]
  })
}) .then(tagData => {
  if (!tagData){
    res.status(404).json({message: 'There was no tag found with this id'})
    return;
  } res.json(tagData)

});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  }) .then(tagData => res.json(tagData))
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  }) .then(tagData => {
    if (!tagData[0]) {
      res.status(404).json({Message: 'No tag found'})
      return;
    } res.json(tagData)
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }) .then(tagData => {
    if (!tagData) {
      res.status(404).json({Message: 'No tag found'})
      return;
    } res.json(tagData)
  })
});

module.exports = router;
