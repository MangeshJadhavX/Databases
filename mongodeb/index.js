const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://mangeshjadhavmj:2j3k7rtkYQVrBzqh@cluster0.3g9rztk.mongodb.net/userappnew"
);

const User = mongoose.model("User", {
  name: String,
  email: String,
  Password: String,
});

const user = new User({
  name: "Mangesh Jadhav",
  email: "mangeshjadhav@gmail.com",
  Password: "1234543",
});

user.save();
