import { useState } from "react";
import Todos from "./Todos";
import { todoData } from "./TodoDATA.ts";
import { TodoId, TodoIdCompleted, TodoName } from "../types/typeTodos.ts";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";

const TodosContainer: React.FC = () => {
    const [todos, setTodos] = useState(todoData);
    const [activeFilter, setActiveFilter] = useState(false);

    const handleDelete = ({ id }: TodoId): void => {
        const deletedTodo = todos.filter(todo => todo.id !== id);
        setTodos(deletedTodo);
    }

    const handleCompleted = ({ id, completed }: TodoIdCompleted): void => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed
                };
            }
            return todo;
        });
        setTodos(newTodos);
    }

    const activeTodos = () => {
        setActiveFilter(!activeFilter);
    }

    const filteredTodos = activeFilter ? todos : todos.filter(todo => !todo.completed)

    const handleAddTodo = ({name} : TodoName) : void => {
        const newTodo = {
            name,
            id: 5,
            description: 'In progress',
            completed: false
        }

        const newTodos = [...todos, newTodo]
        setTodos(newTodos)
    }

    return (
        <div className="text-center">
            <Header onAddTodo={handleAddTodo} />
            <Todos
                handleDelete={handleDelete}
                handleCompleted={handleCompleted}
                todos={filteredTodos}
            />
            <Footer
                todos={todos}
                activeTodos={activeTodos}
            />
        </div>
    )
}

export default TodosContainer;
