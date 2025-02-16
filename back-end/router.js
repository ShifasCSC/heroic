import { Router } from "express";
import * as rh from "./requestHandler.js"
const router=Router()
router.route("/setuser").post(rh.setUser)
router.route("/getusers").get(rh.getUsers)
router.route("/getuser/:_id").get(rh.getUser)
router.route("/edituser/:_id").put(rh.editUser)
router.route("/deleteuser/:_id").delete(rh.deleteUser)
export default router