export default function ToDo(props) {

  function inputOnClick(event) {
    event.preventDefault()

    props.setTasks(prev => {
      let index = prev.indexOf(event.target.innerText)

      if (index == -1) {
        return prev;
      }

      prev.splice(index, 1)

      return [...prev]
    })
  }

  function createListItems(item) {
    return <li onClick={inputOnClick} key={item}>{item}</li>
  }


  return (
    <>
      {props.tasks.map(createListItems)}
    </>
  )
}