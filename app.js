const dotenv = require("dotenv");
const express = require("express");
dotenv.config({ path: "./config.env" });

// extra security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const hpp = require("hpp");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimiter = require("express-rate-limit");

app = express();
port = process.env.PORT || 3000;

const connectDB = require("./db/connect");

// routers
const userRouter = require("./routes/users");
const jobRouter = require("./routes/jobs");
const companyRouter = require("./routes/company");

app.use(
  "/api",
  rateLimiter({
    windowMs: 60 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again in an hour",
  })
);

app.use(helmet());
app.use(cors());
app.use(xss());
app.use(mongoSanitize());
app.use(
  hpp({
    whitelist: [],
  })
);

app.use(express.json({ limit: "10kb" }));

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
