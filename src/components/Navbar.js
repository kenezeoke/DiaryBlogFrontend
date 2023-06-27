import {Link} from "react-router-dom"

const Navbar =()=>{

    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/"> Home </Link>
                    </li>
                </ul>
            </nav>

            <span> The Diary App</span>

            <div></div>
        </header>
    )
}

export default Navbar