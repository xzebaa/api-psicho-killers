const express = require("express");
const ChallengerServices = require("../services/challenger");

const app = express();

app.post("/challenger", async (req, resp) => {
  try {
    const { body } = req;
    const newChallenger = await ChallengerServices.create(body);

    return resp.json({
      ok: true,
      count: newChallenger
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
