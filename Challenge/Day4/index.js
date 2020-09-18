import express from 'express';

const app = express();

const handleHome = (req, res) => {
  res.send('Home');
};

const handleAboutUs = (req, res) => {
  res.send('About Us');
};

const handleContact = (req, res) => {
  res.send('Contact');
};

const handleProtected = (req, res) => {
  res.send('Protected');
};

const middlewareForConsole = (req, res, next) => {
  console.log("I'm a middleware");
  next();
};

const middlewareForProtect = (req, res, next) => {
  res.redirect('/');
};

app.use(middlewareForConsole);

app.get('/', handleHome);

app.get('/about-us', handleAboutUs);

app.get('/contact', handleContact);

app.get('/protect', middlewareForProtect, handleProtected);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
