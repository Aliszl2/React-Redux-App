const express = require('express')
const cors = require('cors')
const uuid = require('uuid')
 
const app = express()
app.use(express.json())
app.use(cors())
 
var posts = [
 { id: uuid(), title: 'post 1', post: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto' },
 { id: uuid(), title: 'post 2', post: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla' },
 { id: uuid(), title: 'post 3', post: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'},
]
 
app.get('/api/posts', (req, res) => {
 setTimeout(() => {
   res.json(posts)
 }, 1100)
})
 
app.post('/api/posts', (req, res) => {
 if (req.body.title && req.body.post) {
   const newPost = { id: uuid(), ...req.body }
   posts.push(newPost)
   setTimeout(() => {
     res.json(newPost)
   }, 1100)
 } else {
   res.status(500).json({ message: 'There is something wrong with your new post' })
 }
})
 
app.delete('/api/posts/:id', (req, res) => {
 if (req.params.id) {
   setTimeout(() => {
     posts = posts.filter(pst => pst.id !== req.params.id)
     res.json(posts)
   }, 1100)
 } else {
   res.status(500).json({ message: 'You need to pass an id' })
 }
})
 
app.put('/api/posts/:id', (req, res) => {
 if (req.body.title && req.body.post ) {
   if (posts.find(pst => pst.id === req.params.id)) {
     posts = posts.map(pst => {
       if (pst.id === req.params.id) {
         return { id: pst.id, ...req.body }
       }
       return pst
     })
     setTimeout(() => {
       res.json(posts.find(pst => pst.id === req.params.id))
     }, 1100)
   } else {
     res.status(500).json({ message: 'No post with that id' })
   }
 } else {
   res.status(500).json({ message: 'There is something wrong with your updated post' })
 }
})
 
app.get('*', (req, res) => {
 res.status(404).json({ message: 'no such endpoint' })
})

 
app.listen(9000, () => {
  console.log('listening on 9000')
})

