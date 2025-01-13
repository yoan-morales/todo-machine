import { ReactComponent as CheckTodo } from "./Check-marck.svg";
import { ReactComponent as DeleteTodo } from "./delete.svg";
import "./TodoIcon.css";

const iconTypes = {
    "check": (color) => <CheckTodo className="Icon-svg" fill={color}/>,
    "delete": (color) => <DeleteTodo className="Icon-svg" fill={color}/>,
}

function TodoIcon({ type, color, onClick }) {
    return (
        <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon };