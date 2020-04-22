function isAuthClient(req, res, next) {
  const path = req.path;
  console.log(req.session);
  if (
    path === "/" ||
    path === "/client/login" ||
    path === "/client/signup" ||
    path === "/login" ||
    path === "/signup"
  ) {
    next();
    return;
  }
  if (req.session.userClient === undefined) {
    res.redirect("/client/login");
    return;
  } else {
    if (path === "/client/login" || path === "/client/signup") {
      res.redirect("/client");
      return;
    }
  }
  next();
}

function isAuthPerformer(req, res, next) {
  const path = req.path;

  if (
    path === "/" ||
    path === "/performer/login" ||
    path === "/performer/signup" ||
    path === "/login" ||
    path === "/signup"
  ) {
    next();
    return;
  }
  if (req.session.userPerformer === undefined) {
    res.redirect("/performer/login");
    return;
  }
  next();
}

module.exports = { isAuthClient, isAuthPerformer };
