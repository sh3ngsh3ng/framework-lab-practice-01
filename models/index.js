const bookshelf = require('../bookshelf')

const Practice = bookshelf.model('Practice', {
    tableName: 'practice'
})

module.exports = {Practice}