function isAuthClient(req, res, next) {
    const path = req.path;
    if (path === "/" || path === "/client/login" || path === "/client/signup") {
        next();
    }
    if (req.session.userClient === undefined) {
        res.redirect('/client/login');
        return;
    }
    next();
}

function isAuthPerformer(req, res, next) {
    const path = req.path;
    if (path === "/" || path === "/performer/login" || path === "/performer/signup") {
        next();
    }
    if (req.session.userPerformer === undefined) {
        res.redirect('/performer/login');
        return;
    }
    next();
}

module.exports = {isAuthClient, isAuthPerformer};