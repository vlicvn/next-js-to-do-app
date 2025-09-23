import { ITask } from "@/types/tasks"
import Task from "./Task"

interface ToDoListProps {
    tasks: ITask[]
}

const ToDoList: React.FC<ToDoListProps> = ({ tasks }) => {
  return (
        <div className="overflow-x-auto">
            <table className="table w-full">
               {/* head */} 
                <thead>
                    <tr>
                        <th>Task UUID</th>
                        <th>Task Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {/* body */}
                <tbody>
                    {tasks.map((task) => (
                        <Task key={task.id} task={task} />
                    ))}
                </tbody>
            </table>
        </div>
  )
}

export default ToDoList