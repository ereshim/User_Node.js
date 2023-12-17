const express = require("express");
const { getRepository } = require("typeorm");
const User = require("../entities/User");

const router = express.Router();
const userRepository = getRepository(User);

router.get("/", async (req, res) => {
  const users = await userRepository.find();
  res.json(users);
});

router.post("/", async (req, res) => {
  const { name, email } = req.body;
  const user = userRepository.create({ name, email });
  await userRepository.save(user);
  res.json(user);
});

router.get("/:id", async (req, res) => {
  const user = await userRepository.findOne(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

router.put("/:id", async (req, res) => {
  const { name, email } = req.body;
  await userRepository.update(req.params.id, { name, email });
  const updatedUser = await userRepository.findOne(req.params.id);
  res.json(updatedUser);
});

router.delete("/:id", async (req, res) => {
  await userRepository.delete(req.params.id);
  res.json({ message: "User deleted" });
});

module.exports = router;
