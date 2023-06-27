import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/layout.js"
import Home from "./pages/Home.js"
import DiaryTask from "./pages/DiaryTask.js"



const App = () =>{

    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/api/v1/posts/:id" element={<DiaryTask/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        
    )
}

export default App