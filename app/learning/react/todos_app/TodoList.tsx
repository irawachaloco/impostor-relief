import React from "react";
import TodoItem from "./TodoItem";
import { TodoProps } from "./types";

interface TodoListProps {
  todos: TodoProps[];
  handleEdit: (todo: TodoProps) => void;
  handleDelete: (todo: TodoProps) => void;
  onToggle: (todo: TodoProps) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  handleEdit,
  handleDelete,
  onToggle,
}) => {
  return (
    <div>
      <h2 className="text-lg font-bold pb-2">Todo List:</h2>
      <ul>
        {todos.map((t) => (
          <TodoItem
            todo={t}
            key={t.id}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
