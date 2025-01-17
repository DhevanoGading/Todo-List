import { useState } from "react";

interface addToFormProps {
  onSubmit: (title: string) => void;
}

export default function AddToForm({ onSubmit }: addToFormProps) {
  const [input, setInput] = useState("");

  function handeSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input.trim()) return;

    onSubmit(input);

    setInput("");
  }

  return (
    <form className="flex" onSubmit={handeSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What needs to be done?"
        className="rounded-s-md grow border border-gray-300 p-2"
      />
      <button
        type="submit"
        className="w-16 rounded-e-md bg-blue-600 text-white hover:bg-blue-500 ml-1"
      >
        Add
      </button>
    </form>
  );
}
