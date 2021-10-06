const Request = require("../models/requestModel");

const asyncHandler = require("express-async-handler");

//@description     Get all requests
//@route           GET /api/requests

const getRequests = asyncHandler(async (req, res) => {
  const requests = await Request.find();
  res.json(requests);
});

//@description     Create single Request
//@route           GET /api/requests/create
//@access          Private
const createRequest = asyncHandler(async (req, res) => {
  const {
    request_text,
    department_names,
    request_due_date,
    expiration_date,
    requester,
  } = req.body;
  if (
    !request_text ||
    !department_names ||
    !request_due_date ||
    !expiration_date ||
    !requester
  ) {
    res.status(400);
    throw new Error("Please complete all fields!");
  } else {
    const request = new Request({
      request_text,
      department_names,
      request_due_date,
      expiration_date,
      requester,
    });
    const createdRequest = await request.save();

    res.status(201).json(createdRequest);
  }
});

//@description     Fetch single Request
//@route           GET /api/requests/:id
//@access          Public
const getRequestById = asyncHandler(async (req, res) => {
  const request = await Request.findById(req.params.id);

  if (request) {
    res.json(request);
  } else {
    res.status(404).json({ message: "Request not found" });
  }
});

//@description     Delete single Request
//@route           GET /api/requests/:id
//@access          Private
const DeleteRequest = asyncHandler(async (req, res) => {
  const request = await Request.findById(req.params.id);

  //   if (request.user.toString() !== req.user._id.toString()) {
  //     res.status(401);
  //     throw new Error("You can't perform this action");
  //   }

  if (request) {
    await request.remove();
    res.json({ message: "Request deleted!" });
  } else {
    res.status(404);
    throw new Error("Request not Found");
  }
});

// @desc    Update a request
// @route   PUT /api/requests/:id
// @access  Private
const UpdateRequest = asyncHandler(async (req, res) => {
  const {
    request_text,
    department_names,
    request_due_date,
    expiration_date,
    requester,
  } = req.body;

  const request = await Request.findById(req.params.id);

  //   if (request.user.toString() !== req.user._id.toString()) {
  //     res.status(401);
  //     throw new Error("You can't perform this action");
  //   }

  if (request) {
    request.request_text = request_text;
    request.department_names = department_names;
    request.request_due_date = request_due_date;
    request.expiration_date = expiration_date;
    requester.requester = requester;

    const updatedRequest = await request.save();
    res.json(updatedRequest);
  } else {
    res.status(404);
    throw new Error("Request not found");
  }
});

module.exports = {
  getRequests,
  createRequest,
  getRequestById,
  UpdateRequest,
  DeleteRequest,
};
