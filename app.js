const dotenv = require("dotenv");
const express = require("express");
dotenv.config({ path: "./config.env" });

app = express();
port = process.env.PORT || 3000;

const connectDB = require("./db/connect");

// routers
const userRouter = require("./routes/users");
const jobRouter = require("./routes/jobs");
const companyRouter = require("./routes/company");

app.use(express.json());

// routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/jobs", jobRouter);
app.use("/api/v1/companies", companyRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
