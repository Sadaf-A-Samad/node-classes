const fs = require('fs')

// fs.writeFile('myfile.txt', 'this is my file by fs module', function (err) { })

// const writeSync = fs.writeFileSync('myfile.txt', 'this is Syncronous write method.')

// fs.appendFile('myfile2.txt', 'this is my file. please update.\n', function (err) { })

// fs.readFile('./myfile.txt', function (err, data) {
//     if (data) console.log(data)
// })

// const c = fs.readFileSync('./myfile.txt')

// fs.unlink('./myfile.txt', function (err) { })
fs.stat('./myfile.txt', function (err, data) {
    if (data) console.log(data)
    else console.log('no file exist')
})

// console.log(c)