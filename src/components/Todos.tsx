import { Props } from '../types/typeTodos.ts'
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

const Todos: React.FC<Props> = ({ todos, handleDelete, handleCompleted }) => {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <ul>
            {
                todos.map(todo => (
                    <li className='flex justify-center flex-col text-center w-3/6 m-auto' key={todo.id}>
                        <h2 className='font-bold text-2xl mt-4' style={todo.completed ? {color: 'gray', textDecoration: 'line-through'} : {color: 'white'}} >{todo.name}</h2>
                        <p className=' text-zinc-400 text-base my-4'>{todo.description}</p>
                        <div className='mb-5'>
                            <Button onClick={() => handleDelete({ id: todo.id })} variant="outlined" color="error">
                                Erase
                            </Button>
                            <Checkbox checked={todo.completed}
                                onChange={(e) => handleCompleted({ id: todo.id, completed: e.target.checked })}
                                sx={{ margin: '0 1rem' }}
                                {...label} color="success" />
                        </div>
                        <hr />
                    </li>
                ))
            }
        </ul>
    )
}

export default Todos