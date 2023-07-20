const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connected");
};

module.exports = connectDB;

//  useCreateIndex: true,   useFindAndModify:true

// new :     findOneAndUpdate: true,    createCollection:true,
