const crypto = require("crypto");

function hashPassword(password, salt) {
  const hash = crypto.createHash("sha256");

  hash.update(password + salt);

  const hashedPassword = hash.digest("hex");

  return hashedPassword;
}

function generateSalt(length = 16) {
  return crypto.randomBytes(length).toString("hex");
}

module.exports = {
  hashPassword,
  generateSalt,
};

