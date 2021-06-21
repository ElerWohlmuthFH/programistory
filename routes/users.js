import express from "express";

const router = express.Router();
import { v4 as uuidv4 } from 'uuid';


let users = [];

//all routes in here are starting with /users

router.get('/', (req, res) => {



    res.send(users);
});

// router.post is used to send the data from client to server
router.post('/', (req, res) => {
console.log('POST ROUTE REACHED');
const user = req.body;



users.push({...user, id: uuidv4()});

res.send(`User with the username ${user.firstName} added to the database!`);
});

// /users/2 => req.params {id:2}
router.get('/:id', (req, res) => {
   const {id} =  req.params;

   const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
});

router.delete('/:id', (req, res) => {
    const {id} =  req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted from the database`)

});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const {firstName, lastName, age} = req.body;
    const updatedUser = users.find((user) => user.id === id );

    if(firstName) updatedUser.firstName = firstName;
    if(lastName) updatedUser.lastName = lastName;
    if(age) updatedUser.age = age;

    res.send(`User with the id ${id} has been updated`)




});

export default router;