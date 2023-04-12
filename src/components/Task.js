import '../styles/Task.scss'

const Task = ({eachTask}) =>{

    const getColorTask = (taskType) => {
    if (taskType==='Casa'){
      return 'color_1';
    } else if (taskType==='Ocio'){
      return 'color_2';
    } else if (taskType==='Trabajo'){
      return 'color_3';
    }
  }
    return(
        <article className={getColorTask(eachTask.type)} >
            <div>
                <h3>{eachTask.title}</h3>
                <p>{eachTask.start}</p>
                <p>{eachTask.desc}</p>
            </div>
        </article>
    )
}

export default Task;