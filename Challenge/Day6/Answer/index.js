import express from 'express';
import path from 'path';
import appRouter from './appRouter';
import { localMiddlewares } from './middlewares';

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Add your magic here!
app.use(localMiddlewares);
app.use('/', appRouter);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
