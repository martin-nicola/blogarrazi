let posts = [
  {
    id: 1, 
    category: 'entertainment', 
    img: 'https://akns-images.eonline.com/eol_images/Entire_Site/202258/rs_1200x1200-220608120945-Kim-Kardashian-Pete-Davidson.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top', 
    headline: 'Kim Kardashian Hates Pete Davidson',
    content: 'In news today and on the most recent episode of Keeping up with the Kardashians, Kim tells all about her love affair with Pete.',
    caption: 'Kim Kardashian and Pete Davidson at the Met Gala'
  },
  {
    id: 2,
    category: 'entertainment',
    img: 'https://people.com/thmb/IOarzyEIc_HZnlbiXjc6aCAP-v0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/love-is-blind-season-3-20210601_83-471ef1e1206c49b0b27a4be5c070a325.jpg',
    headline: 'More on the Cuties Story from Love is Blind Season 3',
    content: 'The ending of the reunion episode of Love is Blind left the audience in a very polarized state, forced to choose sides between Cole Barnett and Zanab Jaffreys.',
    caption: 'Cole and Zanab on their vacation to Malibu'
  },
  {
    id: 3,
    category: 'sports',
    img: 'https://i.cbc.ca/1.6652993.1668566431!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/maple-leafs-penguins-hockey.jpg',
    headline: 'Streaking Leafs Close in on Playoffs',
    content: 'With a win over Nashville, the Toronto Maple Leafs close in on the 2022 Playoffs. Are the Leafs poised for another first-round exit?',
    caption: 'Jordie Benn and John Tavares embrace after their game-clinching goal on Saturday'
  }
]

function getAll() {
  return posts
}

function getOne(id) {
  return posts.find(post => post.id == parseInt(id)) // return post matching my id
}

function addPost(post) {
  posts.push(post)
}

function deletePost(id) {
  posts = posts.filter(post => post.id !== parseInt(id))
}

function updatePost(id, body) {
  let idx = posts.findIndex(post => post.id == parseInt(id))
  posts[idx].caption = body.caption
  posts[idx].category = body.category
  posts[idx].headline = body.headline
  posts[idx].img = body.img
}

module.exports = {
  getAll,
  getOne,
  addPost,
  deletePost,
  updatePost
}