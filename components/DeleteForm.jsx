'use client'
import { deleteTask } from "@/utils/actions"
import { useEffect } from "react"
import {useFormStatus, useFormState} from 'react-dom'
import toast from "react-hot-toast"

const DeleteBtn = ()=>{
  const {pending} = useFormStatus();
  return (
    <button className="btn btn-error btn-xs" type="submit" disabled={pending}>{pending? `Deleting...` : `Delete`}</button>
  )
}

const initialState = {
  message: null,
}

const DeleteForm = ({id}) => {
  const [deleteState, deleteAction] = useFormState(deleteTask, initialState);
  useEffect(()=>{
    if(deleteState.message === 'error') {
      toast.error('there was an error...');
      return;
    }
    if(deleteState.message === 'success'){
      toast.success('Task deleted');
    }
  },[deleteState])

  return (
    <form action={deleteAction}>
        <input type="hidden" name="id" value={id} />
        <DeleteBtn/>
    </form>
  )
}

export default DeleteForm