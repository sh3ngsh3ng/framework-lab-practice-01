const express = require("express")
const router = express.Router() // create a new express Router (object)

// add a new route to the express router
router.get("/", (req,res) => {
    res.send("welcome!")
})

module.exports = router // export the router out