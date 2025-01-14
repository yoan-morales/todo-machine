import "./CreateTodoButton.css";

function CreateTodoButton ({ setOpenModal }) {
    return (
    <button className="Btn" onClick={() => {setOpenModal(state => !state)}}>
      <div className="sign">+</div>
    </button>
    );
  }

 export { CreateTodoButton }