const { Router } = require("express")
const multer = require("multer")

const uploadConfig = require("../configs/upload")
const DishesController = require("../controllers/DishesController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const dishesRoutes = Router()
const upload = multer(uploadConfig.MULTER)
const checkIfUserIsAdmin = require("../middlewares/checkIfUserIsAdmin")

const dishesController = new DishesController()

dishesRoutes.use(ensureAuthenticated)

dishesRoutes.post("/", checkIfUserIsAdmin, upload.single("image"), dishesController.create)
dishesRoutes.get("/", dishesController.index)
dishesRoutes.get("/:id", dishesController.show)
dishesRoutes.delete("/:id", checkIfUserIsAdmin, dishesController.delete)
dishesRoutes.patch("/:id", checkIfUserIsAdmin, upload.single("image"), dishesController.update)

module.exports = dishesRoutes
