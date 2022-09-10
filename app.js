const express = require("express");
app = express;
port = process.env.PORT;

app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});
