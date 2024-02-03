const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) return res.status(401).send("Access denied");

  try {
    token = token.split(" ")[1];

    let verifiedUser = jwt.verify(token, process.env.TOKEN_SECRET);

    if (!verifiedUser) res.status(401).send("Unauthorized access");

    req.user = verifiedUser;
    next();
  } catch (error) {
    console.log(error);
    res.status(400).send("Invalid Token");
  }
};

module.exports = protect;
