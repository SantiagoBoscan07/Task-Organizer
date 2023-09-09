import { useState } from "react"
export default function Input(props) {
  const [text, setText] = useState("");

  function updateText(event) {
    setText(event.target.value)
  }

  function addTask(event) {
    props.setTasks(prev => [...prev, text])
    setText(" ")
  }
  return (
    <>
      <input className="input" placeholder="Write Task here..." type="text" onChange={updateText} value={text} />
      <button className="button" onClick={addTask}>Add Task</button>
    </>

  )
}