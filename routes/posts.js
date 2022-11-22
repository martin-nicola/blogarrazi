var express = require('express');
var router = express.Router();
let postsCtrl = require('../controllers/posts')

/* GET home page. */
router.get('/', postsCtrl.index);
router.get('/new', postsCtrl.new)
router.get('/:id', postsCtrl.show)
router.post('/', postsCtrl.create)
router.delete('/:id', postsCtrl.delete)
router.get('/:id/edit', postsCtrl.edit)
router.put('/:id', postsCtrl.update)

module.exports = router;