const {createUserDB, deleteUserDB, getAllUsersDB, updateUserDB} = require('../repository/user.repository');

async function createUser(user){
    const data = await createUserDB(user);
    return data;
}
async function deleteUser(_id){
    const data = await deleteUserDB(_id);
    return data;
}
async function getAllUsers(){
    const data = getAllUsersDB();
    return data;
}
async function updateUser(_id, user){
    console.log("1");
    const data = await updateUserDB(_id, user);
    return data;
}
module.exports = {createUser, deleteUser, getAllUsers, updateUser}