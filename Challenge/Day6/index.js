import express from 'express';
import path from 'path';

import globalRouter from './routers/globalRouter';

// import homeMiddleware from "./middleware/homeMiddleware";
// import loginMiddleware from "./middleware/loginMiddleware";
// import photosMiddleware from "./middleware/photosMiddleware";
// import profileMiddelware from "./middleware/profileMiddleware";
import { localsMiddleware } from './middlewares';

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// app.use("/", homeMiddleware, globalRouter);
// app.use("/login", loginMiddleware, globalRouter);
// app.use("/photos", photosMiddleware, globalRouter);
// app.use("/profile", profileMiddelware, globalRouter);
app.use(localsMiddleware);

app.use('/', globalRouter);
// app.use("/login", globalRouter);
// app.use("/photos", globalRouter);
// app.use("/profile", globalRouter);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
