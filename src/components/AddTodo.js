import React from "react";
import {connect} from "react-redux"
import { addTodo } from "../redux/actions";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todoInput: ""}
    }

    updateState(value) {
        console.log(this.state);
        this.setState({todoInput: value});
    }

    handleAddTodo() {
        this.props.addTodo(this.state.todoInput);
        this.setState({todoInput: ""});
    }

    render() {
        return (
            <div>
                <input 
                    onChange={e => this.updateState(e.target.value)}
                    value={this.state.todoInput}
                />
                <button onClick={e => this.handleAddTodo()}>Add todo</button>
            </div>
        )
    }
} 

export default connect(
    null,
    {addTodo})(AddTodo);