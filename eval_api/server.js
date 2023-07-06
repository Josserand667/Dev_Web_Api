const express = require('express')

const PORT = process.env.PORT || '3001';
const app = express();


app.use('/', (req, res, next) => {
    res.send("Bienvenu jeune âme; bienvenue dans le monde des douzes");
    next();
})

app.use('/test', (req, res, next) => {
    console.log('2eme middlware');
    res.send("c'est cool ça fonctionne");
})

app.listen(PORT, () =>
    console.log(`server started on port ${PORT}`)
)


