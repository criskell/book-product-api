import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost/node-book-app-test";

export default {
  connection: mongoose.connection,

  connect: () => mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }),

  close: () => mongoose.connection.close()
};