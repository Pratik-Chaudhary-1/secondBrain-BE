import mongoose, { model, Schema, SchemaType } from "mongoose";
mongoose.connect(
  "mongodb+srv://pratikchaudhary685:WBQZmsWHOIBM4eq5@cluster0.viihgzo.mongodb.net/brainly"
);

const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
});

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
  title: String,
  link: String,
  tags: [{ type: mongoose.Types.ObjectId, ref: "tag" }],
  userId: { type: mongoose.Types.ObjectId, ref: "user", required: true },
});

const LinkSchema = new Schema({
  hash: String,
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

export const ContentModel = model("Content", ContentSchema);
export const LinkModel = model("Link", LinkSchema);
