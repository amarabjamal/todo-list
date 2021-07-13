import React, { useEffect } from "react"
import randomColor from "randomcolor"

function TodoItem(props) {

    const completedStyle = {
        fontStyle: "italic",
        textDecoration: "line-through",
        color: "#cdcdcd",
        backgroundColor: "#eee"
    }

    const incompleteStyle = {
        backgroundColor: randomColor({
                                        luminosity: 'dark',
                                        hue: 'green'
                                    })
    }
    
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? completedStyle : incompleteStyle}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem