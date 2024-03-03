'use client'
import { updateTask } from '@/utils/actions'
import {useFormStatus, useFormState} from 'react-dom'
import { useEffect } from "react";
import toast from "react-hot-toast";

const EditBtn =()=>{
    const {pending} =  useFormStatus();
    return (
        <button className='btn btn-primary btn-block btn-sm' type='submit' disabled={pending}>{pending? 'Editing...': 'Edit'}</button>
    )
}

const initialState = {
    message: null,
  }

const EditForm = ({task}) => {
    const [state, formAction] = useFormState(updateTask, initialState);
  useEffect(()=>{
    if(state.message === 'error') {
      toast.error('there was an error...');
      return;
    }
    if(state.message === 'success'){
      toast.success('Task edited...');
    }
  },[state])
  return (
    <form action={formAction} className='max-w-sm p-12 border border-base-300 rounded-lg'>
        <input type='hidden' defaultValue={task.id} name='id'/>
        <input className='input input-bordered w-full' defaultValue={task.content} name='content' required type='text' />
        <div className="flex justify-between items-center my-4">
            <label htmlFor="completed" className='label cursor-pointer'>
                <span className='label-text'>completed</span>
            </label>
            <input type="checkbox" className='checkbox checkbox-primary checkbox-sm' name="completed" id="completed" defaultChecked={task.completed}/>
        </div>
        <EditBtn />
    </form>
  )
}

export default EditForm