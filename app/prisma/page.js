import prisma from "@/utils/db"

const prismaHandlers =  async()=>{
console.log('prsma example')
    // await prisma.task.create({
    //     data:{
    //         content:'Hey'
    //     }
    // })
    const allTasks = await prisma.task.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })
    return allTasks
}


const PrismaEample = async () => {
    const data = await prismaHandlers();
    if(data.length === 0){
        return <h2 className="mt-8 font-medium text-lg">No tasks to show...</h2>
      }
  return (
    <div className="max-w-lg">
        <ul>
        {data.map((task)=>{
            return <li key={task.id}>{task.content}</li>
        })}
        </ul>
    </div>
  )
}

export default PrismaEample