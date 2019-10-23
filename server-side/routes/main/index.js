const router = require("express").Router();

//  init home route for testing
router.get('/',(req,res)=>{
    res.json({
        "success": true,
        "home": "Connected to mini-netflix backend successfully!!!"
    });
});

module.exports = router;