import Task from "../components/Task";

function TaskList({taskList, getColorTask, setTaskDone}) {

  const task=taskList.map((eachTask, index) =>{

   


    return (
      <li key={index}>
        <Task
        index={index}
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
