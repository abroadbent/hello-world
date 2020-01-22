const readline = require('readline')
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

read.question('What is your name? ', name => {
    console.log(`Hi, ${name}!`)
    read.close();
})