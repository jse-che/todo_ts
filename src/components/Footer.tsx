
import { FilterValue } from "../type"
import { Filters } from "./Filters"

interface Props{
    activeCount: number,
    completedCount : number,
    filterSelected : FilterValue,
    handleFilterChange: (filter: FilterValue) => void
    onClearCompleted: () => void
}

export const Footer: React.FC<Props> = ({ 
    activeCount = 0, 
    completedCount = 0,
    filterSelected,
    handleFilterChange, 
    onClearCompleted
}) => {
    return(
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> tareas pendientes
            </span>

            <Filters
                filterSelected={filterSelected}
                onFilterChange={handleFilterChange}
            />
        </footer>
        
    )
}