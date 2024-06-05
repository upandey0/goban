import Header from "../components/Header"
import Todos from "../components/Todos"

const TodoPage = () => {
  return (
    <div className="flex w-screen flex-grow justify-center flex-col">
        <Header/>
        <Todos/>
    </div>
  )
}

export default TodoPage
