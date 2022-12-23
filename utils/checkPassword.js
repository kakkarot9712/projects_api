const checkPassword = (req, res, next) => {
  const pw = req.query.pwd;
  if (pw === process.env.PASSWORD) {
    return next();
  }
  res.status(401).json({
    status: "fail",
    error: "provided key is invalid, operation terminated",
  });
};

module.exports = checkPassword;
