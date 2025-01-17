import AddToForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

function App() {
  const {
    todos,
    setTodoCompleted,
    addTodo,
    deleteTodo,
    deleteAllCompleted
  } = useTodos()
  return (
    <main className="h-screen bg-blue-400 py-10 space-y-4 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center ">Your Todos</h1>
      <div className="max-w-lg mx-auto border-gray-300 bg-gray-300 rounded-md p-5 space-y-6">
        <AddToForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          onCompletedChanges={setTodoCompleted}
          onDelete={deleteTodo}
        />
      </div>
      <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompleted} />
    </main>
  );
}

export default App;
