import { Todo } from "../type/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onCompletedChanges: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoList({
  todos,
  onCompletedChanges,
  onDelete,
}: TodoListProps) {
  const todoSorted = todos.sort((a,b) => {
    if (a.completed === b.completed) {
      return b.id - a.id
    }

    return a.completed ? 1 : -1;
  })

  return (
    <>
      <div className="space-y-2">
        {todoSorted.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCompletedChanges={onCompletedChanges}
            onDelete={onDelete}
          />
        ))}
      </div>
      {todos.length === 0 && (
        <p className="text-center">
          No Todos yet. Please add new one above.
        </p>
      )}
    </>
  );
}
