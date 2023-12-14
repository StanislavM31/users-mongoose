const {
  createSkillDB,
  getAllDB,
  deleteByIdDB,
  updateByIdDB
} = require("../repository/skill.repository.js");

async function createSkill(skill) {
  const data = await createSkillDB(skill);
  return data;
}
async function getAll() {
  const data = await getAllDB();
  return data;
}
async function deleteById(_id) {
    const data = await deleteByIdDB(_id);
    return data;
}
async function updateById(_id, skill){
    const data = await updateByIdDB(_id, skill);
    return data;
}
module.exports = {
  createSkill,
  getAll,
  deleteById,
  updateById
};
