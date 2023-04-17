import Task from "../components/Task";

function TaskList({taskList, getColorTask, setTaskDone}) {

  const task=taskList.map((eachTask) =>{

   


    return (
      <li key={eachTask.id}>
        <Task
        getColorTask={getColorTask}
        eachTask={eachTask}
        setTaskDone={setTaskDone}
        />
      </li>
    )
  })
  return (
    <ul>
      {task}
    </ul>
  );
}

export default TaskList;
