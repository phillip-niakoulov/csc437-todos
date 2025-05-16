import { useState } from 'react'

interface AddTaskFormProps {
    onNewTask: (task: string) => void;
}

function AddTaskForm(props: AddTaskFormProps) {
    const [task, setTask] = useState<string>("");

    const handleButtonClicked = () => {
        props.onNewTask(task);
        setTask("");
    }

    return (
        <div>
            <input 
                placeholder="New task name"
                onChange={(e) => setTask(e.target.value)}
                value={task}
                className="p-2 border border-black rounded-md" 
            />

            <button onClick={handleButtonClicked} className="bg-blue-500 text-white p-1.5 rounded ml-2 hover:bg-blue-600 active:bg-blue-700">
                Add task
            </button>
        </div>
    )
}

export default AddTaskForm;