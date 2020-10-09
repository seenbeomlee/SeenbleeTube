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

# Webpack

> Webpack is a module bundler
> 'Webpack' is the package we use in a file & 'Webpack-Cli' is package we use in the console
> by default, when we call it, webpack looks for webpack.config.js
> In webpack, "entry" is a path to the root file of our app & "output" is a path to the directory where all the transformed assets should go.
> In webpack, "modules" object allows us to specify different transformations for different file formats.
> We can teach our webpack how to transform the files by Using 'loaders'.

# Webpack - Rules

> In the 'rules' array inside of the "modules" object, We can write all the transform instructions for webpack
> How many rules that loaders can have? > Min 1. Max Infinite.

# Loaders are used from last to first

## Passport.js

> it is an authentication middleware (not a library, not a framework either)
> passport stores the sessions in the Cookies
> Cookies are sent to the server at every request
> if we don't use a CookieStore, then the cookies will not be persistent (when user refresh his broswer, user will be logged out)

# Serialize

> is a function where we can decide what info the cookie will have

# De-Serialize

> a function where we turn the cookie into an user object
> After deserialize, passport puts "user object" in "req.user" an then gives us

## Passport.js > Serialize vs Deserialize

# passport.serializeUser & passport.deserializeUser

> 전통적인 로그인 로직을 구현해 보았다면, 유저가 입력한 정보가 담긴 request 객체에 유저 정보를 조회하여 DB에 저장된 유저 정보와 일치하게 되면 세션이나 토큰 등의 인증을 발급하는 것을 알 수 있다. 그렇게 발급된 세션이나 토큰을 이용해 이후에 로그인 정보가 필요한 기능을 쓰게되면 계속 세션에 접근해서 유저정보를 조회한다.
> passport.serializeUser 는 그러한 일들 중 세션 발급에 관한 일을 한다. passport.serializeUser 는 로그인 성공 초기에 한 번 실행. 정확히는, Passport의 전략이 실행되고 전략 객체에서 Done의 두 번째 인자가 false가 아닐 때 (유저의 정보가 들어왔을 때) 실행되며 그 유저의 정보를 받는다. 여기에서는 세션에 어떠한 정보를 담아서 발급할 것인지 정하는 부분이다. 그것이 DB상의 pk로 되어있는 아이디든 유저네임이든 passport.serializeUser 에서 done의 2번째 인자로 넘겨주면 된다.
> passport.deserializeUser 의 경우에는 페이지를 넘나들거나 할 때 인증을 위해 세션(에 담겨진 정보)를 어떻게 조회할 것인지 호출이 된다. 정확하게 이야기를 하면 passport.session() 이 실행되어 세션에 접근할 때마다 작동되는 함수라고 할 수 있다. 여기에서 첫번째 매개변수로 id를 받는 것을 인터넷에서 예제로 많이 볼 수 있다. 이 id는 passport.serializeUser 에서 done의 2번째 인자로 넘겨주었던 정보라고 생각하면 쉽다. 세션으로 넘겨주었던 정보를 첫번째 인자로 받아 DB에서 조회하거나 하면 된다.
