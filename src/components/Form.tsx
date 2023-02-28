export default function Form({newTask, handleChange, handleSubmit}) {
    return (
    <form action="submit" onSubmit={handleSubmit}>
        <input 
            value={newTask} 
            type="text" 
            placeholder="Ajouter une tache" 
            onChange={handleChange}
        />
        <button type="submit">Ajouter +</button>
    </form>
    )
}
