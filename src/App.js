import React from "react"
import todosData from "./todosData"

import TodoItem from "./components/TodoItem"

function App() {
    const todosItem = todosData.map(item => <TodoItem key={item.id} item={item}/>)

    return (
        <div className="todo-list">
            {todosItem}
        </div>
    )
}

export default App
