function TaskList({Task}){
    return(
        <ul>
            {Task.map((Task,index)=>{
                return <li key={index}>{Task}</li>
            })}
        </ul>
    )
}
export default TaskList;