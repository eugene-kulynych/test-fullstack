require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");

const connectDB = async () => {
  console.log(process.env.MONGO_INITDB_ROOT_PASSWORD);
  try {
    const conn = await mongoose.connect(
      `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@db:27017/${process.env.MONGO_INITDB_DATABASE}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Виходимо з процесу у випадку помилки
  }
};

module.exports = connectDB;
