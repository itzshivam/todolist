import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Todo
                id={1}
                value={"test"}
            />
        );
    }
}

export default TodoList;