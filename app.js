const http = require('http')

const hostname = 'localhost'
const port = 3000

const server = http.createServer((request, response) => {


    response.statusCode = 200
    response.setHeader('Contet-Type', 'text/plain')
    response.end('Bienvenido')
})

server.listen(port, hostname, () => {

    console.log(`Servidor corriendo en http://${hostname}:${port}/`)
})