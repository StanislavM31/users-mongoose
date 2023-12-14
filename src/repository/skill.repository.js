const {TableSkills, ObjectId } = require("../../db");

async function getAllData(){
    const data = await TableSkills.find();
    return data;
}
async function createSkillDB(skill){
    await TableSkills.create(skill);
    const data = await getAllData();
    return data;
}
async function getAllDB(){
    const data = await TableSkills.find();
    return data;
}
async function deleteByIdDB(_id){
    await TableSkills.deleteOne({_id: new ObjectId(_id)});
    const data = await TableSkills.find();
    return data;
}
async function updateByIdDB(_id, skill){
    console.log("+");
    await TableSkills.updateOne({_id: new ObjectId(_id)}, {$set: skill});
    const data = await TableSkills.find();
    return data;
}
module.exports = {
    createSkillDB,
    getAllDB,
    deleteByIdDB,
    updateByIdDB};