import { FaToggleOn } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";

function TasksDone() {
    return(
        <div className="tasksDone">
            <h2>Feitas</h2>
            <ul>
                <li>Batata 
                    <span>
                        <FaToggleOn />
                        <BsXLg style={{fontSize: '2.5rem'}}/>
                    </span>
                </li>
                
                <li>Batata 
                    <span>
                        <FaToggleOn />
                        <BsXLg style={{fontSize: '2.5rem'}}/>
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default TasksDone;