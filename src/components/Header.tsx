import { CreateTodo } from "./CreateTodo"


interface Props {
    saveTodo: (title: string) => void
}

export const Header: React.FC<Props> = ({ saveTodo }) => {
    return(
        <header className='header'>
            <h1>todos
             <img
                style ={{ width: '60px', height:'auto' }}
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/96px-Typescript.svg.png'/>
            </h1>

            <CreateTodo saveTodo={saveTodo} />
        </header>
    )
}