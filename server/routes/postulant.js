const express = require("express");
const PostulanService = require("../services/postulant");

const app = express();

app.post("/postulant", async (req, resp) => {
  try {
    const { body } = req;

    const newPostulant = await PostulanService.create(body);

    return resp.json({
      ok: true,
      count: newPostulant
    });
  } catch (error) {
    console.log(error);
    return resp.status(400).json({
      ok: false,
      error: {
        message: error.message
      }
    });
  }
});

module.exports = app;
