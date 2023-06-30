import {useForm} from 'react-hook-form'
import styles from "../styles/styles.module.scss"
import {useTasksContext} from "../hooks/useTasksContext"
import { useAuthContext } from '../hooks/useAuthContext'

const TaskForm = () =>{
    const { register, handleSubmit, setError, reset, formState: {errors}} =useForm();
    const {dispatch} = useTasksContext()
    const {user} = useAuthContext()
    const onSubmit = async data =>{
        const task = {
            date: data.date,
            title: data.title,
            content: data.content
        }

        try{
            const response = await fetch("http://localhost:3060/api/v1/posts", {
                method: "POST",
                body: JSON.stringify(task),
                headers:{
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${user.token}`
                }
            })

            const body = await response.text();
            const newTask = JSON.parse(body);

            if(!response.ok) setError("something went wrong",{type:400})

            if(response.ok) {
                reset({title: "", date:"", content:""})
                dispatch({ type: 'CREATE_TASK', payload: newTask })
                console.log("new Task created", newTask)
            }
        
        } catch(err){
            console.log(err)
        }
    }
    return (
        <>
            <form className={styles.postForm} onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <h3> Create a post</h3>
                </div>
                <input type="text" {...register("title", {required: "required field"})} placeholder = "Title"/>
                <input type="date" {...register("date")} placeholder = "enter date"/>
                <textarea rows="25" className={styles.content} {...register("content", {required: "required field"})} placeholder = "enter diary blog content"/>
                <p>{errors.content?.message}</p>
                <button type="submit" value="submit"> Create Post</button>
            </form>
        
        
        </>

    )
}

export default TaskForm