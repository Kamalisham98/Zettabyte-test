const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");



router.get("/", articleController.getAllArticle);
router.post("/", articleController.createArticle);
router.get("/:id", articleController.findArticle);
router.put("/:id", articleController.updatearticle);
router.delete("/:id", articleController.deletearticle);





module.exports = router;
