const express = require("express");
const {
  getRequests,
  createRequest,
  getRequestById,
  UpdateRequest,
  DeleteRequest,
} = require("../controllers/requestController");

const router = express.Router();

// API Routes
router.route("/").get(getRequests);
router.route("/create").post(createRequest);
router
  .route("/:id")
  .get(getRequestById)
  .put(UpdateRequest)
  .delete(DeleteRequest);

module.exports = router;
