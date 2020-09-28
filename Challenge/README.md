##

# middleware has 3 arguments == req, res, next.

next function calls the next middleware (it does not send the user to the next page, just pass them to the another middlewares)

# Routes are also middlewares

Difference between 'routes' and 'middlewares' is that A route is just a middleware that does not call "next" but uses "res" to therminate the connection.

# MVC is just a pattern

##

# Assignment 10

# Difference between req.param ("/user/:id") & req.query (/user?id=123)

req.param is a value which is fixed. so we can get fixed constant
However, req.query is fluiable so we can check it by '?' and do if(aaa) else if (bbb)..

Ex. /filter?movie=123
/filter?music=123

then we can set our controller like this

if(query == movie) {

} else if (query == music) {

} .. ok?

# Difference between method="post" and mothod="get"

method="get" sends the data of the form on the url, however method="post" sends it hidden from the user.

# mixin

Mixins are useful when i want to reuse some HTML block that has 'same structure' but 'different data'

# MongoDB is not a SQL Database

> MySQL == SQL
> MongoDB == NoSQL
> Reference: https://siyoon210.tistory.com/130

# Mongo vs Mongoose

> Mongo: a database
> Mongoose: is how we talk to the database using JS

# dotenv

> 환경변수: 특정 process를 위한 key-value 형태의 변수 // process.env.NODE_ENV
> To hide URL of DB (to be able to hide strings from the version control systems)

# What does MongoDB stores?

= JSON Documents. (not a Text)

# What is the "ObjectId" type for?

> To tell Mongoose that here we are gonna save an ID of a different Model.

# Difference between 'Date.now' & 'Date.now()'

> Date.now() executes the function immediately, but Date.now waits for the function to be called.
