import React from 'react';


class TaskToolBar extends React.Component{

    render(){
        return(
            <div>
                <button onClick={this.props.onChangeShowAll} >{this.props.showAll ? 'See Incompleted To Do' : 'See Completed To Do'}</button>
            </div>
        );
    }
}

export default TaskToolBar;