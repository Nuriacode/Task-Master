import Task from "../components/Task";

function TaskList({taskList}) {
  const task=taskList.map((eachTask, index) =>{
    return (
      <li key={index}>
        <Task
        eachTask={eachTask}
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
