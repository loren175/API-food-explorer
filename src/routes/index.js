const { Router } = require("express")

const usersRouter = require("./users.routes")
const dishesRouter = require("./dishes.routes")
const sessionsRouter = require("./sessions.routes")

const routes = Router()

routes.use("/users", usersRouter)

routes.use("/dish", dishesRouter)

routes.use("/sessions", sessionsRouter)

module.exports = routes
