const router = require("express").Router();

const gnewsController = require("../controllers/gnewsController");

router.get("/healthz", gnewsController.healthz);
router.post("/search", gnewsController.search);

module.exports = router;
