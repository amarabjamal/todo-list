import React from "react"

function TodoItem() {
    const styles = {
        backgroundColor: "#888", 
        paddingLeft: "10px", 
        paddingRight: "10px",
        borderRadius: "10px"
    }
    
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <p style={styles}>Placeholder text here</p>
        </div>
    )
}

export default TodoItem