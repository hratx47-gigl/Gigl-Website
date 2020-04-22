const { UserClient, UserPerformer, Gig } = require("../database");
const bcrypt = require("bcrypt");
const saltRounds = 10;

async function postClientLogin(req, res) {
  //email, passwprd
  const email = req.body.email;
  const password = req.body.password;
  const user = await UserClient.findOne({ email: email }).exec();
  if (!user) {
    res.json({
      successful: false,
      error: "Invalid email/password combination",
    });
  }
  const doesMatch = await bcrypt.compare(password, user.passwordHash);
  if (doesMatch) {
    req.session.userClient = user;
    res.json({ successful: true });
  } else {
    res.json({
      successful: false,
      error: "Invalid email/password combination",
    });
  }
}

async function postClientSignup(req, res) {
  //email, username, password
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const existingUser = await UserClient.findOne({ email: email });
  if (existingUser) {
    res.json({ successful: false, error: "User already exists" });
    return;
  }
  const passwordHash = await bcrypt.hash(password, saltRounds);
  const newUser = new UserClient({
    username: username,
    email: email,
    passwordHash: passwordHash,
  });
  await newUser.save();

  req.session.userClient = newUser;
  res.json({ successful: true });
}

function postClientSignout(req, res) {
  req.session.userClient = undefined;
  res.json({ successful: true });
}

async function postPerformerLogin(req, res) {
  //email, passwprd
  const email = req.body.email;
  const password = req.body.password;
  const user = await UserPerformer.findOne({ email: email }).exec();
  if (!user) {
    res.json({
      successful: false,
      error: "Invalid email/password combination",
    });
  }
  const doesMatch = await bcrypt.compare(password, user.passwordHash);
  if (doesMatch) {
    req.session.userPerformer = user;
    res.json({ successful: true });
  } else {
    res.json({
      successful: false,
      error: "Invalid email/password combination",
    });
  }
}

async function postPerformerSignup(req, res) {
  //email, username, password
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const existingUser = await UserPerformer.findOne({ email: email });
  if (existingUser) {
    res.json({ successful: false, error: "User already exists" });
    return;
  }
  const passwordHash = await bcrypt.hash(password, saltRounds);
  const newUser = new UserPerformer({
    username: username,
    email: email,
    passwordHash: passwordHash,
  });
  await newUser.save();
  req.session.userPerformer = newUser;
  res.json({ successful: true });
}

function postPerformerSignout(req, res) {
  req.session.userPerformer = undefined;
  res.json({ successful: true });
}

module.exports = {
  postClientLogin,
  postClientSignup,
  postPerformerLogin,
  postPerformerSignup,
};
