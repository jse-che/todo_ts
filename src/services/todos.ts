import { type TodoList } from "../type";

const API_URL= 'https://api.jsonbin.io/v3/b/663661ddad19ca34f8646d8e'

interface Todo {
    id: string,
    title: string
    completed: boolean
    order: number
}

export const fetchTodos = async (): Promise<Todo[]> => {
    const res = await fetch(API_URL)
    if (!res.ok) {
        console.error('Error fetching todos')
        return []
    }

    const { record: todos } = await res.json() as {record: Todo[]}
    return todos
}

export const udpateTodos = async ({ todos }: { todos: TodoList}): Promise<boolean> => {
    console.log(import.meta.env.VITE_API_BIN_KEY)
    const res = await fetch(API_URL, {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': import.meta.env.VITE_API_BIN_KEY
            },
        body: JSON.stringify(todos)
    })

    return res.ok
}
