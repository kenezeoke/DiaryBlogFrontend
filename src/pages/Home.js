import {useState, useEffect} from "react"
import TaskHead from "../components/TaskHead.js"
import styles from "../styles/styles.module.scss"
import TaskForm from "../components/TaskForm.js"


const Home = () => {
    const [tasks, setTasks] = useState(null)

    useEffect( ()=>{
        const fetchTasks = async() =>{
                const response = await fetch("http://localhost:3050/api/v1/posts/")
                const json = await response.json()
                response.ok ? setTasks(json): console.log("error")
        
            
        }

        fetchTasks()
    },[])



    return (
        <>
            <div>
                <h1> Posts </h1>

                <ul className={styles.PostList}>
                    {tasks && tasks.map(task =>(
                        <TaskHead key={task._id} task={task}/>
                    ))}
                    
                </ul>
            </div>
            <div>
                <TaskForm/>
            </div>
        </>
    )
}

export default Home