import FormContainer from "../FormContainer/FormContainer"
import useTodosStore from "../../Stores/TodosStore"
import "./HeroSection.css"

function HeroSection() {

    const todos = useTodosStore(state => state.todos);

    let todosRemaining = 0;

    for(let i = 0; i<todos.length; i++) {
        if(todos[i].complete === false){
            todosRemaining ++;
        }
    }


  return (
    <div className="hero-section">
      <h2 className="greeting-text">Hello Levis 👋🏾</h2>

      <h1 className="info-text">You have {todosRemaining} remaining {todosRemaining === 1 ? "todo" : "todos" }</h1>

      <FormContainer />
    </div>
  )
}

export default HeroSection
