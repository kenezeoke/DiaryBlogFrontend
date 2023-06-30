import styles from "../styles/styles.module.scss"
import {Link} from "react-router-dom"
import {useTasksContext} from "../hooks/useTasksContext.js"
import { useAuthContext } from "../hooks/useAuthContext"
import {format} from "date-fns"

const TaskHead =({task})=>{
    const {dispatch} = useTasksContext();
    const {user} = useAuthContext();

    //to hand deletion from db
    const handleClick  = async() =>{
        const response = await fetch(`http://localhost:3060/api/v1/posts/${task._id}`, {
            method: 'DELETE',
            headers: {
                "authorization": `Bearer ${user.token}`
            }
        })
        
        const body = await response.text()
        const json = JSON.parse(body)

     
       if (response.ok){
        dispatch({type: 'DELETE_TASK', payload: json})
        console.log(`post deleted`, json)
       }
    }

    return(
        <li>
            <span className = {styles.postHeadHeader}>
                <h2>
                    <Link to={`/api/v1/posts/${task._id}`}>{task.title}</Link>
                </h2>
                <span class="material-symbols-outlined" onClick={handleClick}>
                    delete
                </span>
            </span>
            <div> {format(new Date(task.date), "MMMM d, y")} </div>
            <p> {task.content.substring(0,200) + "..." }</p>
        </li>
    )
}

export default TaskHead