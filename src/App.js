//import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useRoutes, Navigate} from "react-router-dom"
import Layout from "./pages/layout.js"
import Home from "./pages/Home.js"
import DiaryTask from "./pages/DiaryTask.js"
import Signup from "./pages/Signup.js";
import Login from "./pages/login.js";
import { useAuthContext } from "./hooks/useAuthContext.js";



const App = () =>{
    const {user} = useAuthContext()

    const elements = useRoutes([
        { path: '/', 
            element: <Layout />,
            children: [
                { path: '/', element: user ? <Home /> : <Navigate to="/api/v1/login" /> },
                { path: '/api/v1/posts/:id', element: user ? <DiaryTask /> : <Navigate to="/api/v1/login" /> },
                { path: '/api/v1/signup', element: !user ? <Signup /> : <Navigate to="/" /> },
                { path: '/api/v1/login', element: !user ? <Login /> : <Navigate to="/" /> },
            ]
        }
    ]);

    return elements;

   
}

export default App

 /* return(
        <BrowserRouter>
            <Routes>
                <Route path = "/" element={ <Layout/>}>
                    <Route index element={user ? <Home/> : <Link to="/api/v1/login"/>}/>
                    <Route path="/api/v1/posts/:id" element={<DiaryTask/>}/>
                    <Route path ="api/v1/user/signup" element = {<Signup/>}/>
                    <Route path ="api/v1/user/login" element = {<Login/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        
    )
        */