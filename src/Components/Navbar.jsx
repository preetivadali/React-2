import {Link} from 'react-router-dom';
import './Navbar.css'

function Navbar(){

    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to ="/">Home</Link>
                        </li>
                    <li>
                         <Link to ="/about">About</Link>
                         </li>
                    <li> 
                        <Link to = "/contact">Contact</Link>
                        </li>

                        <li> 
                        <Link to = "/colorpicker">ColorPicker</Link>
                        </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;