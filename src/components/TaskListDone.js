const TaskListDone = ({taskListDone})=>{

        const taskDone = taskListDone.map((eachTaskDone, index)=>{
            return (
                <li key={index}>
                    <article>
                        {eachTaskDone}
                    </article>
                </li>
            )
        })
        return <ul>
            {taskDone}
        </ul>
}

export default TaskListDone;