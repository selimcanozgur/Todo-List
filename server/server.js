import app from "./app.js";
import mongoose from "mongoose";

const port = process.env.PORT || 3000;
const db_uri = process.env.DB_URI.replace(
  "<db_password>",
  process.env.DB_PASSWORD
);

mongoose
  .connect(db_uri)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening to port: ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
