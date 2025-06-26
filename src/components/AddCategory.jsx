import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState()

  const handleChange = ({ target }) => {
    setInputValue(target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return
    // setCategories(categories => [inputValue, ...categories]);
    setInputValue("");
    onNewCategory(inputValue.trim())
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Buscar gifs" value={inputValue || ""} onChange={handleChange} />
    </form>

  )
}
