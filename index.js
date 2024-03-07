const express = require("express");
const app = express();
require("dotenv").config();
const userRoutes = require("./Routes/UserRoutes");
const sequelize = require("./DataBaseConnection/connection");

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.use("/users", userRoutes);

// async () => {
//   await sequelize.sync();
// };

async function connection() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    // await User.sync({ alter: true })
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
connection();

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("listening to the port " + process.env.PORT);
});
