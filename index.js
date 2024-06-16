const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const allRolePermission = require("./Routes/Hr-AdminRouter");
const auth = require("./Routes/authRouter");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://nikhil77gautam:QH3FSsvbAbOdDvBL@cluster0.u4nfv2p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("database connected"))
  .catch((err) => console.log("error connecting database", err.message));

app.use("/auth", auth);
app.use(allRolePermission);

app.listen(8000, () => console.log("server is running at 8000"));
