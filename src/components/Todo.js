import React from 'react'

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    // fetch the data from store
    render() {
        return(
        <div>
            <input type="checkbox" id={this.props.id}/>
            <label for={this.props.id}> {this.props.value} </label><br/>
        </div>
        );
    }
}

export default Todo;