const express = require("express");
const VacantService = require("../services/vacant");

const app = express();

app.post("/vacant", async (req, resp) => {
  try {
    const { body } = req;
    const newVacant = await VacantService.create(body);

    return resp.json({
      ok: true,
      count: newVacant
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
