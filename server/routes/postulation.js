const express = require("express");
const PostulationService = require("../services/postulation");

const app = express();

app.post("/postulation", async (req, resp) => {
  try {
    const { body } = req;
    const newPostulation = await PostulationService.create(body);

    return resp.json({
      ok: true,
      count: newPostulation
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
