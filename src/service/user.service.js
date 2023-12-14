const {createUserDB, deleteUserDB, getAllUsersDB, updateUserDB, getUserByIdDB} = require('../repository/user.repository');

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
async function getUserById(_id){
    const data = getUserByIdDB(_id);
    return data;
}
async function updateUser(_id, user){
    const data = await updateUserDB(_id, user);
    return data;
}
module.exports = {createUser, deleteUser, getAllUsers, updateUser, getUserById}