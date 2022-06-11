//회원정보(user) Schema
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nickName: {
        type: String,
        unique: true,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    }
});

UserSchema.virtual("userId").get(function () {
    return this._id.toHexString();
  });
  UserSchema.set("toJSON", {
    virtuals: true,
  });


module.exports = mongoose.model('User', UserSchema);