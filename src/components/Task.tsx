export function Task ({task, onTaskChange}: any) {
    return ( 
         <li key={task.id}>{task.nom}{" "}
         <button onClick={() => onTaskChange(task.id)}>X</button>
         </li>
    )
}

