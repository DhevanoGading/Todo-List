import { Todo } from "../type/todo";

interface TodoSummaryProps {
  todos: Todo[];
  deleteAllCompleted: () => void;
}

export default function TodoSummary({
  todos,
  deleteAllCompleted,
}: TodoSummaryProps) {
  const completedTodos = todos.filter((todo) => todo.completed);
  return (
    <div className="text-center space-y-2">
      <p className="font-medium">
        {completedTodos.length}/{todos.length} todos completed
      </p>
      {completedTodos.length > 0 && (
        <button onClick={deleteAllCompleted} className="text-red-700 hover:underline">
          Delete all completed todos
        </button>
      )}
    </div>

  );
}
