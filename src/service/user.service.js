const {createUserDB, deleteUserDB} = require('../repository/user.repository');

async function createUser(user){
    const data = await createUserDB(user);
    return data;
}
async function deleteUser(_id){
    const data = await deleteUserDB(_id);
    return data;
}

module.exports = {createUser, deleteUser}