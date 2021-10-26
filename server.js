const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const userRoutes = require("./routes/user.routes");
const app = express();

const corsOptions = "http://localhost:3000";

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`on port ${process.env.PORT}`);
});
