import TaskForm from "@/components/TaskForm"
import TaskFormCustom from "@/components/TaskFormCustom"
import TaskList from "@/components/TaskList"
import Link from "next/link"
export const dynamic = 'force-dynamic' 

const Tasks = () => {
  return (
    <div className="max-w-lg">
      {/* <TaskForm/> */}
      <TaskFormCustom/>
      <TaskList/>
    </div>
  )
}

export default Tasks