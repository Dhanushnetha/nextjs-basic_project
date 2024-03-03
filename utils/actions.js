'use server';
import { redirect } from "next/navigation";
import prisma from "./db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const getAllTasks = async()=>{
    return await prisma.task.findMany({
        orderBy:{
            createdAt: 'desc'
        }
      })
}

export const createTask = async(formData)=>{
    const content = formData.get('content');
    await prisma.task.create({
        data:{
            content
        }
    });
    revalidatePath('/tasks');
}

export const createTaskCustom = async(prevState, formData)=>{
    const content = formData.get('content');
    const Task = z.object({
        content: z.string().min(5),
    })
    try {
        Task.parse({content})
        await prisma.task.create({
            data:{
                content
            }
        });
        revalidatePath('/tasks');
        return  {message: 'success'}
    } catch (error) {
        console.log(error);
        return {message: 'error'}
    }
}

export const deleteTask = async(prevState, formData)=>{
    const id = formData.get('id');
    try {
        await prisma.task.delete({
            where:{
                id
            }
        })
        revalidatePath('/tasks');
        return  {message: 'success'}
        
    } catch (error) {
        console.log(error);
        return {message: 'error'}
    }
}

export const getTask = async(id)=>{
    return await prisma.task.findFirst({
        where:{
            id
        }
    })
}

export const updateTask = async(prevState,formData)=>{
    const content = formData.get('content');
    const completed = formData.get('completed');
    const id = formData.get('id');
    await prisma.task.update({
        where:{
            id
        },
        data:{
            content, 
            completed: Boolean(completed)
        }
    })
    redirect('/tasks');
}