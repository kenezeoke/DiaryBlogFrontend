import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/styles.module.scss'
import { useAuthContext } from '../hooks/useAuthContext';
import {format} from "date-fns"

const DiaryPost =()=>{

    const {id} = useParams();
    const [task, setTask] = useState(null)
    const {user} = useAuthContext()
    useEffect( ()=>{
        const fetchTask = async() =>{
                const response = await fetch(`http://localhost:3060/api/v1/posts/${id}`,{
                    headers:{
                        "Authorization": `Bearer ${user.token}`
                    }
                })
                const json = await response.json()
                response.ok ? setTask(json): console.log("error")
        
            
        }

        fetchTask()
    },[id, user])

    if (!task) return null
    return (
        <div className={styles.diaryPost}>
            <h2>{task.title}</h2>
            <h2> {format(new Date(task.date), "MMMM d, y")}</h2>
            <h2>{task.content}</h2>
        </div>

    )
}

export default DiaryPost