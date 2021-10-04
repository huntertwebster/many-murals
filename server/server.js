const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const galleryRouter = require('./routes/gallery.router');
const artistRouter = require('./routes/artist.router');
// const adminRouter = require('./routes/admin.router');
const clearanceRouter = require('./routes/clearance.router');
const mapRouter = require('./routes/map.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/gallery', galleryRouter);
app.use('/api/artist', artistRouter);
// app.use('/api/admin', adminRouter);
app.use('/api/clearance', clearanceRouter);
app.use('/api/map', mapRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
