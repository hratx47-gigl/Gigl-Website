function isAuthClient(req, res, next) {
    const path = req.baseUrl + req.path;
    console.log("path ", path)
    if (req.session.userClient === undefined) {
        if (path === "/client/login/" || path === "/client/signup/" || path === "/login/" || path === "/signup/" || path === "/api/client/login" || path === "/api/client/signup") {
            next();
            return;
        }else {
            res.redirect('/client/login');
            return;
        }
    }else {
        if (path === "/client/login/" || path === "/client/signup/") {
            res.redirect('/client');
            return;
        }
    }
    next();
}

function isAuthPerformer(req, res, next) {
    const path = req.baseUrl + req.path;
    if (req.session.userPerformer === undefined) {
        if (path === "/performer/login/" || path === "/performer/signup/" || path === "/login/" || path === "/signup/" || path === "/api/performer/login" || path === "/api/performer/signup") {
            next();
            return;
        }else {
            res.redirect('/performer/login');
            return;
        }
    }else {
        if (path === "/performer/login/" || path === "/performer/signup/") {
            res.redirect('/performer');
            return;
        }
    }
    next();
}

module.exports = {isAuthClient, isAuthPerformer};