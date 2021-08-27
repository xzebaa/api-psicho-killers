const express = require("express");
const app = express();

const { sendEmail } = require("./../services/email");

app.get("/health", async (req, resp) => {
  console.log("se llamo a health");
  const info = {
    "node-version": process.version,
    memory: process.memoryUsage(),
    pid: process.pid,
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
    appName: process.env.name,
    appVersion: process.env.npm_package_version,
    hostname: process.env.HOSTNAME
  };

  await sendEmail();
  return resp.json({
    ok: true,
    info
  });
});

module.exports = app;
