"use client";

// import React from 'react'

import { useCallback, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { TodoProps } from "./types";

const TodosApp = () => {
  const [todosList, setTodosList] = useState<TodoProps[]>([]);
  const [todoToEdit, setTodoToEdit] = useState<TodoProps | null>(null);

  const handleSubmit = useCallback((todo: TodoProps) => {
    setTodosList((prevTodos) =>
      prevTodos.some((t) => t.id === todo.id)
        ? prevTodos.map((t) => (t.id === todo.id ? todo : t))
        : [...prevTodos, todo]
    );
    setTodoToEdit(null);
  }, []);

  const handleEdit = useCallback((todo: TodoProps) => {
    setTodoToEdit(todo);
  }, []);

  const handleDelete = useCallback((todo: TodoProps) => {
    setTodosList((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
  }, []);

  const handleToggle = (todo: TodoProps) => {
    setTodosList((prevTodos) =>
      prevTodos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <main>
      <h1 className="text-xl font-bold">Todos Manager</h1>
      <TodoForm onSubmit={handleSubmit} todoToEdit={todoToEdit} />
      <TodoList
        todos={todosList}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        onToggle={handleToggle}
      />
    </main>
  );
};

export default TodosApp;
