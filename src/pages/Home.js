import {/*useState */ useEffect} from "react"
import TaskHead from "../components/TaskHead.js"
import styles from "../styles/styles.module.scss"
import TaskForm from "../components/TaskForm.js"
import {useTasksContext} from "../hooks/useTasksContext.js"
import {useAuthContext} from "../hooks/useAuthContext.js"


const Home = () => {
    const {tasks, dispatch} = useTasksContext()
    const {user} = useAuthContext()
    //const [tasks, setTasks] = useState(null)
    console.log(user)

    useEffect( ()=>{
        const fetchTasks = async() =>{
                const response = await fetch("http://localhost:3060/api/v1/posts/",{
                    headers:{
                        "Authorization": `Bearer ${user.token}`
                    }
                })
                const json = await response.json()
                if (response.ok) dispatch({type: 'SET_TASKS', payload:json});
               // response.ok ? setTasks(json): console.log("error")
        
            
        }

        fetchTasks()
    },[user, dispatch])



    return (
        <>
            <div>
                <h1> Posts </h1>

                <ul className={styles.postList}>
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