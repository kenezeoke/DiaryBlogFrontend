import React from "react"
import ReactDom from "react-dom/client"
import App from "./App.js"
import "./styles/index.scss"
import {TasksContextProvider} from "./context/TasksContext.js"

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <TasksContextProvider>
            <App />
        </TasksContextProvider> 
    </React.StrictMode>    
)