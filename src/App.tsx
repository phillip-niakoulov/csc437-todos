import { nanoid } from "nanoid";
import { useState } from 'react'
import './App.css'
import TodoItem from "./components/TodoItem";
import AddTaskForm from "./components/AddTaskForm";
import Modal from "./components/Modal";

interface Task {
    id: string;
    name: string;
    completed: boolean;
}

interface AppProps {
    tasks: Task[];
}

function App(props: AppProps) {
    const [taskList, setTaskList] = useState<Task[]>(props.tasks);
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const addTask = (name: string) => {
        const newTask: Task = { id: `todo-${nanoid()}`, name: name, completed: false };
        setTaskList([...taskList, newTask]);
        setModalOpen(false);
    }

    const setTaskCompleted = (id: string, value: boolean) => {
        setTaskList(taskList.map((todo) =>
            todo.id === id ? { ...todo, completed: value } : todo
        ));
    }

    const deleteTask = (id: string) => {
        setTaskList(taskList.filter((todo) => todo.id !== id));
    }



    return (
        <main className="m-4">
            <Modal headerLabel="New Task" isOpen={modalOpen} onCloseRequested={() => {setModalOpen(false)}}>
              <AddTaskForm onNewTask={addTask}/>
            </Modal>
            <button onClick={() => {setModalOpen(true)}} className="bg-blue-500 text-white p-1.5 rounded hover:bg-blue-600 active:bg-blue-700">Add Task</button>
            <section>
                <h1 className="text-xl font-bold mt-4">To do</h1>
                <ul
                    role="list"
                    className="todo-list stack-large stack-exception mt-4"
                    aria-labelledby="list-heading">
                    {taskList.map((task) => (
                        <TodoItem onDelete={deleteTask} onChange={setTaskCompleted} id={task.id} name={task.name} completed={task.completed} key={task.id}/>
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default App;
