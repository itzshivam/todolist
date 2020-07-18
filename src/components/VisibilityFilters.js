import React from "react";

class VisibilityFilters extends React.Component {
    render() {
        return (
            <div>
                <button>All</button>
                <button>Completed</button>
                <button>Incomplete</button>
            </div>
        );
    }
}

export default VisibilityFilters;