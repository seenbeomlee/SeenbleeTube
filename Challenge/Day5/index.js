import express from 'express';
import apiDocRouter from './routers/apiDocRouter';
import apiV1Router from './routers/apiV1Router';
import apiV2Router from './routers/apiV2Router';
import coursesRouter from './routers/coursesRouter';
import globalRouter from './routers/globalRouter';

const app = express();

app.use('/api', apiDocRouter);
app.use('/api/v1', apiV1Router);
app.use('/api/v2', apiV2Router);
app.use('/courses', coursesRouter);
app.use('/', globalRouter);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
