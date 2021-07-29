const path = require("path");
const { article, comment } = require("../models");

class commentController {
  async createcomment(req, res) {
    try {
      let created = {
        nickname: req.body.nickname,
        comment: req.body.comment,
      };
      let data = await comment.create(created);
      return res.status(200).json({
        message: "success",
        data,
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error Catch",
        error: e.message,
      });
    }
  }
  async findcomment(req, res) {
    try {
        console.log("HERE!!")
      let commentData = await comment.findOne({ _id: req.params.id });
      if (!commentData) {
        return res.status(404).json({
          message: "comment not found",
        });
      }
      return res.status(200).json({
        message: "Success",
        commentData,
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error findcomment",
        error: e.message,
      });
    }
  }
  async getAllcomment(req, res) {
    try {
      let errors = [];

      let commentData = await comment.find();
      return res.status(200).json({
        message: "sucess",
        commentData,
      });


    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error find",
        error: e.message,
      });
    }
  }
  async updatecomment(req, res) {
    try {
      let commentData = await comment.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      return res.status(200).json({
        message: "success",
        commentData,
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }
  async deletecomment(req, res) {
    try {
      let deleted = await comment.deleteOne({ _id: req.params.id });
      if (deleted.deletedCount === 0) {
        return res.status(404).json({
          message: "Data Not Found",
        });
      }
      return res.status(200).json({
        message: "success",
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }
}
module.exports = new commentController();
