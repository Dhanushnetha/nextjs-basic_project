import EditForm from '@/components/EditForm';
import { getTask } from '@/utils/actions'
import Link from 'next/link'

const EditPage = async ({params}) => {
    const data = await getTask(params.id);
  return (
    <>
        <div className="mb-16">
            <Link href={'/tasks'} className='btn btn-accent'>Back to Tasks</Link>
        </div>
        <EditForm task={data}/>
    </>
  )
}

export default EditPage