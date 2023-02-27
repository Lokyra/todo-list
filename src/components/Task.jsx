export default function Task ({task, onTaskChange}) {
    return ( 
         <li key={task.id}>{task.nom}{" "}
         <button onClick={() => onTaskChange(task.id)}>X</button>
         </li>
    )
}

