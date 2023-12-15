const express = require("express");

const {
  createSkill,
  getAll,
  deleteById,
  updateById,
  getSkillById
} = require("../service/skill.service");

const routeSkill = express.Router();

routeSkill.post("/", async (req, res) => {
  try {
    const data = await createSkill(req.body);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});
routeSkill.get("/", async (req, res) => {
  try {
    const data = await getAll();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

routeSkill.delete("/:_id", async (req, res) => {
  try {
    const data = await deleteById(req.params._id);
    res.send(data);
} catch (error) {
    res.send(error);
}
});
routeSkill.put("/:_id", async(req,res)=>{
    try {
        const data = await updateById(req.params._id, req.body);
        console.log(req.params._id, req.body);
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})
routeSkill.get('/:_id', async(req,res)=>{
  try {
    const data = await getSkillById(req.params._id);
    res.send(data);
  } catch (error) {
    res.send(error)
  }
})

module.exports = routeSkill;
