import React from "react"

function TodoItem(props) {
    const styles = {
        backgroundColor: "#888", 
        paddingLeft: "10px", 
        paddingRight: "10px",
        borderRadius: "10px"
    }
    
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed}/>
            <p style={styles}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem