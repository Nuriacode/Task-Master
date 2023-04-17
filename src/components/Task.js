import '../styles/Task.scss'

const Task = ({eachTask, getColorTask, setTaskDone, index}) =>{

   const handleClick =(ev)=>{
    const target = ev.currentTarget.id
    console.log(target)
   setTaskDone(target)
   
    }
  

    return(
        <article 
        className={getColorTask(eachTask.type)} 
        onClick={handleClick}
        index={index}
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