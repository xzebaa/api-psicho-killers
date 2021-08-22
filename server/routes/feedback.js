const express = require("express");
const FeedbackServices = require("../services/feedback");

const app = express();

app.post("/feedback", async (req, resp) => {
  try {
    const { body } = req;
    const newFeedback = await FeedbackServices.create(body);

    return resp.json({
      ok: true,
      count: newFeedback
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
