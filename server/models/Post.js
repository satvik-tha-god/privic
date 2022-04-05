//Posts model
const { model, Schema } = require("mongoose");

const postSchema = new Schema({
  body: {
    type: String,
    required: [true, "Please add body to post"]
  },
  username: {
    type: String,
    required: [true, "Username not found"]
  },
  createdAt: String,
  comments: [
    {
      body: String,
      username: String,
      createdAt: String,
    },
  ],
  likes: [
    {
      username: String,
      createdAt: String,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = model("Post", postSchema);
