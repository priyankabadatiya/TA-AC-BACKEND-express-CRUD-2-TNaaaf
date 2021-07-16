var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');

router.get('/:id/edit', (req, res, next) => {
  console.log('Comment page');
  var id = req.params.id;
  Comment.findById(id, (err, comment) => {
    if (err) next(err);
    res.render('updateComment', { comment });
  });
});

router.post('/:id', (req, res, next) => {
  var id = req.params.id;
  Comment.findByIdAndUpdate(id, req.body, (err, updatedComment) => {
    if (err) next(err);
    res.redirect('/articles/' + updatedComment.articleId);
  });
});

router.get('/:id/delete', (req, res, next) => {
  var id = req.params.id;
  Comment.findByIdAndDelete(id, (err, comment) => {
    if (err) next(err);
    res.redirect('/articles/' + comment.articleId);
  });
});



module.exports = router;

