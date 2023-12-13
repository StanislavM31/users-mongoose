const express = require ('express');

const {createUser, deleteUser, getAllUsers, updateUser} = require('../service/user.service')

const route = express.Router();

route.post('/', async(req,res)=>{
    try {
        const data = await createUser(req.body);
        res.send(data);
    } catch (error) {
        res.send(error)
    }
})
route.delete('/:_id', async(req,res)=>{
    try {
        const data = await deleteUser(req.params._id);
        res.send(data);
    } catch (error) {
        res.send(error)
    }
})
route.get("/", async(req,res)=>{
    try {
        const data = await getAllUsers();
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})
route.put("/:_id", async(req,res)=>{
    try {
        console.log("1");
        const data = await updateUser(req.params._id, req.body);
        res.send(data);
    } catch (error) {
        res.send(error)
    }
})
module.exports = route;