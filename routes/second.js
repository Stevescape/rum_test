import express from "express"
var router = express.Router();

router.get("/", (req, res) => {
    res.render("second", {title: "Second"});
});

export default router;
