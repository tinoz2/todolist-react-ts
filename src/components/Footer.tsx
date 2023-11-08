import { listOfTodos } from "../types/typeTodos"
import Switch from '@mui/material/Switch';

interface Props {
    todos: listOfTodos
    activeTodos: () => void
}

const Footer: React.FC<Props> = ({ todos, activeTodos }) => {

    const label = { inputProps: { 'aria-label': 'Color switch demo' } };

    return (
        <footer className="mt-2">
            <span className=" text-zinc-300">
                <strong className=" text-zinc-50">{todos.length}</strong> Tareas pendientes
            </span>
            <ul className=' text-zinc-50 my-4 text-xl font-medium'>
                <li>
                    <Switch onClick={activeTodos} {...label} defaultChecked />
                    Activos
                </li>
            </ul>
        </footer>
    )
}

export default Footer