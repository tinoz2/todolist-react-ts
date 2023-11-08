import { useState } from "react"
import { TodoName } from "../types/typeTodos"

interface Props {
    onAddTodo: ({ name }: TodoName) => void
}

const CreateTodo: React.FC<Props> = ({ onAddTodo }) => {

    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onAddTodo({name: inputValue})
        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className=" p-3 my-6 w-1/6"
                type="text"
                value={inputValue}
                onChange={(e) => { setInputValue(e.target.value)}}
                placeholder="Que quieres hacer?"
                autoFocus />
        </form>
    )
}

export default CreateTodo