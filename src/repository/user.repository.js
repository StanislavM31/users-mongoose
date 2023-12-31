const { TableUser, ObjectId } = require("../../db");

async function createUserDB(user) {
  await TableUser.create(user);
  const data = await TableUser.find();
  return data;
}
//в mongo _id: ObjectId
async function deleteUserDB(_id) {
  await TableUser.deleteOne({ _id: new ObjectId(_id) });
  const data = await TableUser.find();
  return data;
}

async function getAllUsersDB() {
  const data = await TableUser.find();
  return data;
}
async function getUserByIdDB(_id){
  const data = await TableUser.findOne({ _id: new ObjectId(_id)});
  return data
}

async function updateUserDB(_id, user) {
  await TableUser.updateOne({ _id: new ObjectId(_id)}, { $set: user });
  const data = await TableUser.find({ _id: new ObjectId(_id)});
  return data;
}

module.exports = { createUserDB, deleteUserDB, getAllUsersDB, updateUserDB, getUserByIdDB };
