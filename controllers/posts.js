let Post = require('../models/post')

function index(req, res, next) {
  let posts = Post.getAll()
  res.render('posts/index', { posts });
}

function show(req, res) {
  let post = Post.getOne(req.params.id)
  res.render('posts/show', { post })
}

function newPost(req, res) {
  res.render('posts/new')
}

function create(req, res) {
  req.body.id = Math.floor(Math.random() * 100000000)
  Post.addPost(req.body)
  res.redirect('/posts')
}

function deletePost(req, res) {
  Post.deletePost(req.params.id)
  res.redirect('/posts')
}

function editPost(req, res) {
  let post = Post.getOne(req.params.id)
  res.render('posts/edit', { post })
}

function updatePost(req, res) {
  Post.updatePost(req.params.id, req.body)
  res.redirect(`/posts/${req.params.id}`)
}

module.exports = {
  index,
  show,
  new: newPost,
  create,
  delete: deletePost,
  edit: editPost,
  update: updatePost
}