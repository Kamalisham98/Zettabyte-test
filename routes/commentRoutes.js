const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");
// const movieValidator = require("../middlewares/validators/movieValidator");


router.get("/", commentController.getAllcomment);
router.post("/:id", commentController.createcomment);
router.get("/:id", commentController.findcomment);
router.put("/:id", commentController.updatecomment);
router.delete("/:id", commentController.deletecomment);





module.exports = router;
