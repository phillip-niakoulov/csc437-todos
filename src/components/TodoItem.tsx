import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

interface TodoItemProps {
    id: string;
    name: string;
    completed: boolean;
    onChange: (id: string, completed: boolean) => void;
    onDelete: (id: string) => void;
}

function TodoItem(props: TodoItemProps) {
    const [completed, setCompleted] = useState<boolean>(props.completed);

    const handleCheckboxChange = () => {
        setCompleted(!completed);
        if (props.onChange) {
            props.onChange(props.id, !completed);
        }
    };

    const handleDeletion = () => {
        props.onDelete(props.id)
    }

    return (
        <li>
            <label className="todo-label mr-8" htmlFor={props.id}>
                <input onChange={handleCheckboxChange} className="mb-4 mr-1" id={props.id} type="checkbox" checked={completed} />
                {props.name}
            </label>
            <button onClick={handleDeletion}><FontAwesomeIcon className="text-gray-600" title="delete" icon={faTrash}/></button>
        </li>
    );
}

export default TodoItem;
