const path = require("path");
const { article, comment } = require("../models");

class ArticleController {
  async createArticle(req, res) {
    try {
      let created = {
        title: req.body.title,
        writer: req.body.writer,
        article: req.body.article,
        reference: req.body.reference,
      };
      let data = await article.create(created);
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
  async findArticle(req, res) {
    try {
        console.log("HERE!!")
      let articleData = await article.findOne({ _id: req.params.id });
      if (!articleData) {
        return res.status(404).json({
          message: "Article not found",
        });
      }
      return res.status(200).json({
        message: "Success",
        articleData,
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error findarticle",
        error: e.message,
      });
    }
  }
  async getAllArticle(req, res) {
    try {
      let errors = [];

      let articleData = await article.find();
      return res.status(200).json({
        message: "sucess",
        articleData,
      });


    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error find",
        error: e.message,
      });
    }
  }
  async updatearticle(req, res) {
    try {
      let articleData = await article.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      return res.status(200).json({
        message: "success",
        articleData,
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }
  async deletearticle(req, res) {
    try {
      let deleted = await article.deleteOne({ _id: req.params.id });
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
module.exports = new ArticleController();
