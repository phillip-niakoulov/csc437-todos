import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

interface Task {
  id: string;
  name: string;
  completed: boolean;
}

const INITIAL_TASK_LIST: Task[] = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <StrictMode>
      <App tasks={INITIAL_TASK_LIST}/>
    </StrictMode>,
  )
}