import { TodoTitle } from "../type"
import { CreateTodo } from "./CreateTodo"


interface Props {
    onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
    return(
        <header className="header">
            <h1>todos<img
              style ={{ width: '60px', height:'auto' }}
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/96px-Typescript.svg.png'/>
              </h1>

              <CreateTodo saveTodo={onAddTodo} />
        </header>
    )
}