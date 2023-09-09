import './App.css'
import { useState } from "react"
import Input from './components/Input'
import ToDo from './components/ToDo'

export default function App() {
  const [tasks, setTasks] = useState([]);


  return (
    <main>
      <h1> My Tasks </h1>
      <Input setTasks={setTasks} />
      <ToDo tasks={tasks} setTasks={setTasks} />
    </main>
  )
}
