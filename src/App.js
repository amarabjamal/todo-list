import React, { Component } from "react"
import TodoItem from "./components/TodoItem"
import todosData from "./todosData"


class App extends Component {
    constructor() {
        super()
        this.state = {
            todosData: todosData
        }
    }

    render() {
        const todosItem = this.state.todosData.map(item => <TodoItem key={item.id} item={item}/>)

        return (
            <div className="todo-list">
                {todosItem}
            </div>
        )
    }
}

export default App
