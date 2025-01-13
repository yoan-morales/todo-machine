import "./CreateTodoButton.css";

function CreateTodoButton () {
    return (
    <button className="Btn" onClick={() => {console.log('Le diste click')}}>
      <div className="sign">+</div>
      <div className="text">Create</div>
    </button>
    );
  }

 export { CreateTodoButton }