const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 3
        },
        password: {
            type: String,
            required: true,
            unique: false,
            trim: true,
            minlength: 3
        },
        password2: {
            type: String,
            required: true,
            unique: false,
            trim: true,
            minlength: 3
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 3
        }
    },
    {
        timestamps: true
    }
);
/*
userSchema.pre("save", function(next) {
    // check if new or password hasn't been set
  if (this.isNew() || this.isModified("password")) {
    const document = this;
    bcrypt.has(document.password, saltRounds, function(err, hashedPassword) {
      if (err) {
        next(err);
      } else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});
*/
    const User = mongoose.model("User", userSchema);

    module.exports = User;
