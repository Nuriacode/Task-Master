import '../styles/Task.scss'

const Task = ({eachTask, getColorTask, setTaskDone}) =>{

   const handleClick =(ev)=>{
    const target = ev.currentTarget.id
    setTaskDone(target)
   
    }
  

    return(
        <article 
        id={eachTask.id}
        className={`article ${getColorTask(eachTask.type)}`} 
        onClick={handleClick}
        >
            <div>
                <h3>{eachTask.title}</h3>
                <p>{eachTask.start}</p>
                <p>{eachTask.desc}</p>
            </div>
        </article>
    )
}

export default Task;