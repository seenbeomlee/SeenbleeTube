##

# middleware has 3 arguments == req, res, next.

next function calls the next middleware (it does not send the user to the next page, just pass them to the another middlewares)

# Routes are also middlewares

Difference between 'routes' and 'middlewares' is that A route is just a middleware that does not call "next" but uses "res" to therminate the connection.

# MVC is just a pattern

##
