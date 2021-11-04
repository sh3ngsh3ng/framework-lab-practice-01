const express = require("express")
const router = express.Router()

router.get("/", (req,res)=>{
    res.render("posters/index")
})

router.get("/v2", (req,res) => {
    res.render("posters/more-posters")
})

router.get("/v3", (req,res) => {
    res.render("posters/even-more-posters")
})

module.exports = router