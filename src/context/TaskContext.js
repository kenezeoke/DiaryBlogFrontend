import {createContext, useReducer} from "react"

export const TasksContext = createContext()

export const taskReducer = (state, action) =>{
    switch(action.type){
        case "SET_TASKS":
            return {
                tasks: action.payload
            }
        case "CREATE_POST":
            return {
                tasks: [action.payload, ...state.tasks]
            }
        case "DELETE_TASK":
            return {
                tasks: state.posts.filter(post => post._id != action.payload._id)

            }
        default:
            return state;        
    }
}

export const PostsContextProvider = ({children}) => {
    const [state,dispatcher] = useReducer(taskReducer)
}