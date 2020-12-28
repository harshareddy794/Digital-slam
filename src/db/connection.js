import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose.connect(
      process.env.DB_URL,
      {
        useFindAndModify: false,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database Connected");
  } catch (error) {
    console.log("Database Connectivity Error", error);
    throw new Error(error);
  }
};

export default {
  connection,
};
