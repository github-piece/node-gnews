const router = require("express").Router();

const phylloController = require("../controllers/phylloController");

router.get("/healthz", phylloController.healthz);

module.exports = router;
