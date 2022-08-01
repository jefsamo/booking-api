import express from "express";
import {
  deleteUser,
  updateUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Hello user, you are logged In");
// });
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello user, you are logged In and you can delete this account");
// });
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello user, you are an Admin");
// });

// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, getUser);

// GET ALL User
router.get("/", verifyAdmin, getUsers);

export default router;
