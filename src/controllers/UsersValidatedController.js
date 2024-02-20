const AppError = require("../utils/AppError")
const sqliteConnection = require("../database/sqlite")

class UsersValidatedController {
  async index(request, response) {
    const { user } = request
    const database = await sqliteConnection()
    const checkUserExists = await database.get(
      "SELECT * FROM users WHERE id = (?)",
      [user.id]
    )
    if (checkUserExists === 0) {
      throw new AppError("Unauthorized", 401)
    }

    return response.status(200).json()
  }
}
module.exports = UsersValidatedController
