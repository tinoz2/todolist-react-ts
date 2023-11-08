import { TodoName } from "../types/typeTodos"
import CreateTodo from "./CreateTodo"

interface Props {
    onAddTodo: ({ name }: TodoName)  => void
}

const Header: React.FC<Props> = ({ onAddTodo }) => {
    return (
        <header>
            <h1 className=" text-4xl text-zinc-50 font-extrabold my-2">TODOLIST</h1>
            <CreateTodo onAddTodo={onAddTodo} />
        </header>
    )
}

export default Header