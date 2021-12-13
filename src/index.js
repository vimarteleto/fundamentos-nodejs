const express = require('express')

const app = express()

// middleware de json
app.use(express.json())

// definição da porta
app.listen(3333)

app.get('/', (request, response) => {
    return response.json({
        message: "Hello world!",
        program: "Ignite",
        tech: "Node.js"
    })
})

app.get('/courses', (request, response) => {
    // parametros query
    // /courses?page=1&order=asc
    const query = request.query
    console.log(query) // { page: '1', order: 'asc' }
    return response.json(
        ['Curso 1', 'Curso 2', 'Curso 3']
    )
})

app.post('/courses', (request, response) => {
    const body = request.body
    console.log(body)
    return response.json(['Curso 1', 'Curso 2', 'Curso 3', 'Curso 4'])
})

app.patch('/courses/:id', (request, response) => {
    const params = request.params
    const { id } = request.params
    console.log(params) // { id: '1' }
    console.log(id) // 1
    return response.json(['Curso 1', 'Curso 2', 'Curso 3', 'Curso 4'])
})

app.put('/courses/:id', (request, response) => {
    return response.json(['Curso 1', 'Curso 2', 'Curso 3', 'Curso 5'])
})

app.delete('/courses/:id', (request, response) => {
    return response.json(['Curso 1', 'Curso 2', 'Curso 3'])
})