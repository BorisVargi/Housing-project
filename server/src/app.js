const express = require('express');
// const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const authRouter = require('./routes/authRouter');
const tokensRouter = require('./routes/tokensRouter');
const advertismentsRouter = require('./routes/advertismentsRouter');

const app = express();

app.use(morgan('dev'));
// app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/tokens', tokensRouter);
app.use('/api/cards', advertismentsRouter);

module.exports = app;
