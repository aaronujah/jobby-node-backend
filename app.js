const dotenv = require("dotenv");
const express = require("express");
dotenv.config({ path: "./config.env" });

app = express();
port = process.env.PORT || 3000;

// routers
const userRouter = require("./routes/users");
const jobRouter = require("./routes/jobs");
const companyRouter = require("./routes/company");

// routes
app.use("api/v1/users", userRouter);
app.use("api/v1/jobs", jobRouter);
app.use("api/v1/companies", companyRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
