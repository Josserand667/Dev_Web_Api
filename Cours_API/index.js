const express = require('express')

const app = express();

app.use((req, res, next) => {
    req.user = 'Thibaut'
    console.log('Je suis un middleware')
    next()
})

app.use((httpRequest,httpResponse, next) => {
    console.log('je suis dans un autre middleware', httpRequest.user)
    
    httpResponse.send('<h1>Hello from another world</h1>')
})

app.listen(3000);