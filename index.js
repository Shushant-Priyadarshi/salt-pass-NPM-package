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

function verifyPassword(password, hashedPassword, salt) {
  const hashedInputPassword = hashPassword(password, salt);

  return hashedInputPassword === hashedPassword;
}



module.exports = {
  hashPassword,
  generateSalt,
  verifyPassword
};
