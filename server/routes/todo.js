const { Router } = require('express')

const todoRoutes = Router()
const pool = require("../db")


// create todo
todoRoutes.post('/todo', async (req, res) => {
    try {

        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo(description) VALUES($1) RETURNING *", [description]);
        res.json(newTodo.rows)

    }
    catch (err) {
        console.log(err);
    }
})

// getall todo
todoRoutes.get('/todo', async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows)

    }
    catch (err) {
        console.log(err.message);
    }

})

// get todo
todoRoutes.get('/todo/:id', async (req, res) => {
    try {
        const { id } = req.params
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res.json(todo.rows[0])


    }
    catch (err) {
        console.log(err);
    }

})

// update todo
todoRoutes.put('/todo/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { description } = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description=$1 WHERE todo_id = $2", [description, id]);
        res.json("updateTodo")

    }
    catch (err) {
        console.log(err);
    }

})

// delete todo
todoRoutes.delete('/todo/:id', async (req, res) => {
    try {
        const { id } = req.params
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.json("Todo was DELETED")

    }
    catch (err) {
        console.log(err);
    }

})
module.exports = todoRoutes
