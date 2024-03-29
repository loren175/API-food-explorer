require("express-async-errors")
require("dotenv/config")

const migrationsRun = require("./database/sqlite/migrations")

const AppError = require("./utils/AppError")
const UploadConfig = require("./configs/upload")

const cookieParser = require("cookie-parser")

const cors = require("cors")
const express = require("express")
const routes = require("./routes")

const app = express()

const PORT = process.env.PORT || 3333

app.use(cookieParser())
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      "https://food-explorer-loren175.netlify.app",
    ],
    credentials: true,
  })
)
app.use(express.json())

app.use("/files", express.static(UploadConfig.UPLOADS_FOLDER))

app.use(routes)

migrationsRun()

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    })
  }
  console.error(error)

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  })
})

app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`))
