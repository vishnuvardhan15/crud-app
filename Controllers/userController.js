const User = require('../connection');


//Read data
const getUsers = async(req, res) => {
  try {
    res.json(await User.find());
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Err' });
  }
};
const getUserById = async(req, res) => {
  try {
    const id = req.params.id;
    res.json(await User.findById(id));
  } catch (error) {
    res.status(404).json({ error: 'User not found' });
  }
};

//Write data
const postUser = async (req, res) => {
  try{
    const newUser = await User.create(req.body);
    return res.status(201).send({ status: "success", newUser });
  }
  catch(err){
    return res.status(500).send({ status: "failed", message: err.message });
  }
};

//Update data
const updateUserById = async(req, res) => {
  try{
    const id = req.params.id;
    const newUser = await User.findByIdAndUpdate(id,req.body,{ new: true });
    return res.status(200).send({ status: "success", newUser });
  }
  catch(err){
    return res.status(404).send({ status: "failed", message: "User not found" });
  }
};

//Delete data
const deleteUserById = async(req, res) => {
  try{
    const id = req.params.id;
    const newUser = await User.findByIdAndDelete(id);
    return res.status(200).send({ status: "success", newUser });
  }
  catch(err){
    return res.status(404).send({ status: "failed", message: "User not found" });
  }
};

module.exports = {
  getUsers,
  getUserById,
  postUser,
  updateUserById,
  deleteUserById
}