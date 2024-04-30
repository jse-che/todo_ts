import { type Todo as TodoType, type TodoId } from "../type"

interface Props extends TodoType {
    onRemoveTodo: ({id}: TodoId) => void,
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo })  => {
    return (
        <div className="view">
            <input
                className="toggle"
                type="checkbox"
                checked= {completed}
                onChange={()=>{}}
            />
            <label>{title}</label>
            <button
                className="destroy"
                onClick={()=>{
                    onRemoveTodo({ id })
                }}
            />
        </div>
    )
}