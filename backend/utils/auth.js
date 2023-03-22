const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const secret = process.env.JWT_SECRET;

exports.UserDisplayName = (req, res) => {
  if (req.user) {
    return req.user.displayName;
  }
  return "";
};
exports.UserId = (req) => {
  if (req.user) {
    return req.user._id;
  }
  return "";
};

exports.isAuthenticated = async (req, res, next) => {
  const authHeader = req.get("authorization");
  if (!authHeader) {
    return res
      .status(403)
      .json({ success: false, message: "Token is not provided" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const verified = jwt.verify(token, secret);
    const user = await User.findOne({
      _id: verified.id,
      accessCreatedAt: verified.accessCreatedAt,
    });
    if (!user)
      return res
        .status(401)
        .json({ success: false, message: "Token is invalid" });
    res.locals.userId = verified.id; // set id of the user who is authenticated
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Token is invalid" });
  }
  return next();
};

exports.GenerateToken = (user) => {
  const payload = {
    id: user._id,
    displayName: user.displayName,
    userName: user.userName,
    emailAddress: user.emailAddress,
    accessCreatedAt: user.accessCreatedAt,
  };

  const jwtOptions = {
    expiresIn: "30d",
  };

  return jwt.sign(payload, secret, jwtOptions);
};
