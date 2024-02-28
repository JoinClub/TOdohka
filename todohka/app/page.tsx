import Image from "next/image";
import { MdAddTask } from "react-icons/md";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { getAllTodos } from "@/api";


export default async function Home() {
  const tasks = await getAllTodos();
  return (
    <main className=" max-w-4xl mx-auto mt-10 ">
      <div className="text-center my-5 flex flex-col gap-5">
        <h1 className="text-3xl font-aria">Simple Todo List</h1>
        <AddTask/>
      </div>
      <TodoList />
    </main>
  );
}
