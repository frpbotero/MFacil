import express from "express"
import controller from "./user.controller"

const router = express.Router()

router.get("/",controller.findAll)
router.get("/:id",controller.findById)
router.post("/",controller.create)
router.put("/:id",controller.updateById)
router.delete("/:id",controller.deleteByID)

export = router