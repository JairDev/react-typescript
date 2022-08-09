import { useState } from "react"

function Form() {
  const [inputValue, setInputValue] = useState({
    nick: '',
    subMonths: 0,
    avatar: '',
    description: ''
  })

  const handleSubmit = () => {

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nick" placeholder="nickname" />
        <input type="text" name="subMonths" placeholder="months" />
        <input type="text" name="avatar" placeholder="avatar" />
        <input type="text" name="description" placeholder="description" />
        <button>Save new sub</button>
      </form>
    </div>
  )
}

export default Form