

const expresss = require('express')
const app = expresss()
const port = 3000

app.get('/', function(req, res) {
    res.send('Hello World')
})

app.get('*', function(req, res) {
    res.send('Hello World')
})


app.get('/test', function(req, res) {
  res.json({result: "Success"})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})




module.exports = app;
