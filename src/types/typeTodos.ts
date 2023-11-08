export interface Todo {
    id: number
    name: string
    description: string
    completed: boolean
}

export type TodoName = Pick<Todo, 'name'>
export type TodoId = Pick<Todo, 'id'>
export type TodoDescription = Pick<Todo, 'description'>
export type TodoCompleted = Pick<Todo, 'completed'>
export type TodoIdCompleted = Pick<Todo, 'id' | 'completed'>

export type listOfTodos = Todo[]

export interface Props {
    todos: listOfTodos
    handleDelete: ({id}: TodoId) => void
    handleCompleted: ({id, completed}: TodoIdCompleted) => void
}