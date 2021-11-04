const knex = require('knex')({
    client: "mysql",
    connection: {
        user: 'foo',
        password: 'bar',
        database: 'practice'
    }
})

const bookshelf = require('bookshelf')(knex)

module.exports = bookshelf