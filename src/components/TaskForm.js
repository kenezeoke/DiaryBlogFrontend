import {useForm} from 'react-hook-form'
import styles from "../styles/styles.module.scss"

const TaskForm = () =>{
    const { register, handleSubmit, setError, reset, formState: {errors}} =useForm();

    const onSubmit = async data =>{
        const task = {
            data: data.date,
            title: data.title,
            content: data.content
        }

        try{
            const response = await fetch("http://localhost:3050/api/v1/posts", {
                method: "POST",
                body: JSON.stringify(task),
                headers:{
                    "Content-Type": "application/json"
                }
            })

            const body = await response.text();
            const newTask = JSON.parse(body);

            if(!response.ok) setError("something went wrong",{type:400})

            if(response.ok) {
                reset({title: "", date:"", content:""})
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
                <button type="submit" value="submit"> Post</button>
            </form>
        
        
        </>

    )
}

export default TaskForm