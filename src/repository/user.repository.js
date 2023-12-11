const {TableUser, ObjectId} = require("../../db");

async function createUserDB(user){
    await TableUser.create(user);
    const data = await TableUser.find();
    return data;
}
//в mongo _id: ObjectId
async function deleteUserDB(_id){
    await TableUser.deleteOne({_id: new ObjectId(_id)});
    const data = await TableUser.find();
    return data;
}

module.exports = {createUserDB, deleteUserDB}