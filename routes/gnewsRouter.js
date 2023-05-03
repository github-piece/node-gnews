const router = require("express").Router();

const gnewsController = require("../controllers/gnewsController");

router.get("/healthz", gnewsController.healthz);

module.exports = router;
