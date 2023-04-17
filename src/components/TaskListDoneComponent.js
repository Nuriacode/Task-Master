const TaskListDoneComponent = ({taskListDone, getColorTask})=>{

        const taskDone = taskListDone.map((eachTaskDone)=>{
            return (
                <li key={eachTaskDone.id}>
                    <article
                    className={getColorTask(eachTaskDone.type)} >
                        <div>
                            <h3>{eachTaskDone.title}</h3>
                            <p>{eachTaskDone.start}</p>
                            <p>{eachTaskDone.desc}</p>
                        </div>
                    </article>
                </li>
            )
        })
        return (<ul>
            {taskDone}
        </ul>)
}

export default TaskListDoneComponent;