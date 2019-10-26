const router = require("express").Router();

//  init home route for testing
router.get('/',(req,res)=>{
    res.json({
        "success": true,
        "home": "Connected to mini-netflix backend successfully!!!"
    });
});
router.get("/about", (req,res)=>{
    res.json({
        "success": true,
        "about": {
            "version":"1.0.0",
            "message":"This is the about page for the Mini-netflix app"
        }
    });
});

module.exports = router;