import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/styles.module.scss'

const DiaryPost =()=>{

    const {id} = useParams();
    const [task, setTask] = useState(null)
    useEffect( ()=>{
        const fetchTask = async() =>{
                const response = await fetch(`http://localhost:3050/api/v1/posts/${id}`)
                const json = await response.json()
                response.ok ? setTask(json): console.log("error")
        
            
        }

        fetchTask()
    },[id, setTask])

    if (!task) return null
    return (
        <div className={styles.diaryPost}>
            <h2>{task.title}</h2>
            <h2> {task.date}</h2>
            <h2>{task.content}</h2>
        </div>

    )
}

export default DiaryPost