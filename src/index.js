import React from "react"
import ReactDom from "react-dom/client"
import App from "./App.js"
import "./styles/index.scss"
import {BrowserRouter} from "react-router-dom"
import {TasksContextProvider} from "./context/TasksContext.js"
import { AuthContextProvider } from "./context/AuthContext.js"

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(
    //<React.StrictMode>
        <BrowserRouter>
            <AuthContextProvider>
                <TasksContextProvider>
                    <App />
                </TasksContextProvider> 
            </AuthContextProvider> 
        </BrowserRouter>
         
   // </React.StrictMode>    
)