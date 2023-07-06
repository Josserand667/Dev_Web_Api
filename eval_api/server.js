const express = require('express')

const PORT = process.env.PORT || '3001';
const app = express();


//app.use('/test', (req, res, next) => {
//    console.log('2eme middlware');
//    res.send("<h1> c'est cool ça fonctionne pas </h1>");
//})

app.use('/resocmieux', (req, res, next) => {
    console.log('3eme middlware');
    res.send('<h1> Rick Rolled </h1> <hr> <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
})

app.use('/', (req, res, next) => {
    console.log('1er middleware')
    res.send("<h1>Bienvenu jeune âme; bienvenue dans le monde des douzes</h1> <hr> <a href='http://localhost:3001/resocmieux'>ne pas appuyer</a>");
})

app.listen(PORT, () =>
    console.log(`server started on port ${PORT}`)
)


