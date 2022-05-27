require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const FileStore = require('session-file-store')(session);

const { PORT, COOKIE_SECRET, COOKIE_NAME } = process.env;
const authRouter = require('./src/routes/auth.router');
const usersRouter = require('./src/routes/users.router');

const app = express();

// SERVER'S SETTINGS
app.set('cookieName', COOKIE_NAME);

// APP'S MIDDLEWARES
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(express.json());
app.use(
  session({
    name: app.get('cookieName'),
    secret: COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new FileStore(),
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1e3 * 86400, // COOKIE'S LIFETIME — 1 DAY
    },
  }),
);

// APP'S ROUTES
app.use('/user', authRouter);
app.use('/users', usersRouter);

app.listen(3001, () => {
  console.log('Сервер запущен на порте', PORT);
});