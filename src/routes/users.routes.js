const { Router } = require("express")

const usersRoutes = Router()

usersRoutes.post("/users", (request, response) => {
  const { name, email, password } = request.query

  response.json({name, email, password})
})

module.exports = usersRoutes