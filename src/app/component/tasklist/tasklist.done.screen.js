import React from 'react';
import TaskList from "./tasklist.component";

class TaskListDone extends React.Component{
    render() {
        return(
            <TaskList color={'green'}/>
        );
    }
}

export default TaskListDone;