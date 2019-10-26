// call express router
const router = require("express").Router();

// declare route for all users
router.get("/users", (req, res)=>{
    res.json({
        "success": true,
        "users": [
            {"name":"Caro Kagwi"},
            {"name":"Kim Gambino"},
            {"name":"Tess Nyamb"}
        ]
    })
});

module.exports = router;