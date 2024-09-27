"use client";

import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState<string[]>([]);
  const [currentTodo, setCurrentTodo] = useState<string>("");

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 my-10">
        <h1>Todo</h1>
        <input
          type="text"
          className="text-black"
          placeholder="Add a new todo"
          value={currentTodo}
          onChange={(e) => {
            setCurrentTodo(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setTodos([...todos, currentTodo]);
            setCurrentTodo("");
          }}
        >
          Add
        </button>
        <ul>
          {todos.map((todo: string, index: number) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
