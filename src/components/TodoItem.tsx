import { Trash2 } from "lucide-react";
import { Todo } from "../type/todo";

interface TodoListProps {
  todo: Todo;
  onCompletedChanges: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onCompletedChanges, onDelete }: TodoListProps) {
  return (
    <div className="flex gap-2">
      <label className="flex items-center gap-2 border rounded-md border-gray-300 p-2 bg-white hover:bg-gray-100 grow">
        <input
          type="checkbox"
          className="scale-125"
          checked={todo.completed}
          onChange={(e) => onCompletedChanges(todo.id, e.target.checked)}
        />
        <span className={todo.completed ? "line-through text-gray-400" : ""}>
          {todo.title}
        </span>
      </label>
      <button onClick={() => onDelete(todo.id)}>
        <Trash2 size={20} />
      </button>
    </div>
  );
}
