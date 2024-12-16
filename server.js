const http = require('http');

const server = http.createServer((req, res) => {
    res.write('this is my server')
    res.end(' Response end')
    console.log('Server Requested')
})


// const myFunc = () => { }
server.listen(8000, console.log('Server Started'));


