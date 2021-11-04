const express = require('express')
const router = express.Router()

const {Practice} = require("../models")

router.get('/', async (req,res) => {
    let products = await Practice.collection().fetch()
    res.render ('products/index', {
        'products': products.toJSON()
    })
})

module.exports = router