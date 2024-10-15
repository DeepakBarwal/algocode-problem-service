const express = require("express");

const { PORT } = require("./config/server.config");

const apiRouter = require("./routes");

const errorHandler = require("./utils/errorHandler");
const connectToDB = require("./config/db.config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
  return res.json({ message: "Problem Service is alive" });
});

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server started at PORT: ${PORT}`);
  await connectToDB();
  console.log("Successfully connected to DB");
});
