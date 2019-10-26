// express router
const router = require("express").Router();

router.get("/movies", (req,res)=>{
    res.json({
        "success": true,
        "movies":[
            {
                "title":"sample movie 1"
            },
            {
                "title":"sample movie 2"
            },
            {
                "title":"sample movie 3"
            },
            {
                "title":"sample movie 4"
            },
            {
                "title":"sample movie 5"
            }

        ]
    });
});

module.exports = router;