import styles from "../styles/styles.module.scss"
import {Link} from "react-router-dom"
const TaskHead =({task})=>{
    //to hand deletion from db
    const handleClick  = async() =>{
        const response = await fetch(`http://localhost:3050/api/v1/posts/${task._id}`, {
            method: 'DELETE'
        })

        const body = await response.text()
        const json = JSON.parse(body)

        if(response.ok) console.log(`post deleted`, json)
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
            <div> {task.date} </div>
            <p> {task.content.substring(0,200) + "..." }</p>
        </li>
    )
}

export default TaskHead