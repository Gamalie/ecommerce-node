"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getOneTodo = exports.addTodo = exports.getAllTodos = void 0;
let todos = [];
const getAllTodos = (req, res) => {
    res.status(200).json(todos);
};
exports.getAllTodos = getAllTodos;
const addTodo = (req, res) => {
    const { title, description } = req.body;
    todos.push({ id: Math.floor(Math.random() * 10000), title, description });
    return res.status(201).json({ message: "Todo added successfully..." });
};
exports.addTodo = addTodo;
const getOneTodo = (req, res) => {
    const { id } = req.params;
    const todo = todos.find(t => {
        return t.id === parseInt(id);
    });
    if (todo) {
        return res.status(200).json(todo);
    }
    else {
        return res.status(404).json({ message: "Todo not Found" });
    }
};
exports.getOneTodo = getOneTodo;
const updateTodo = (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const index = todos.findIndex(t => {
        return t.id === parseInt(id);
    });
    if (index >= 0) {
        todos[index] = { id: parseInt(id), title, description };
        return res.status(204).json({ message: "Todo Updated" });
    }
    return res.status(404).json({ message: "Todo not Found" });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex(t => {
        return t.id === parseInt(id);
    });
    if (index >= 0) {
        todos.splice(index, 1);
        return res.status(204).json({ message: "Todo Deleted" });
    }
    return res.status(404).json({ message: "Todo not Found" });
};
exports.deleteTodo = deleteTodo;
