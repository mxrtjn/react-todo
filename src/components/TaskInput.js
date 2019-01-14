import React from "react";
import { InputGroup, Button, FormControl, Glyphicon } from "react-bootstrap";

class TaskInput extends React.Component {
  state = {
    taskName: ""
  };

  onChangeTaskText = e => {
    this.setState({ taskName: e.target.value });
  };

  onKeyTaskPress = e => {
    if (e.key === "Enter") {
      this.props.onAddTask(this.state.taskName);
      this.setState({ taskName: "" });
    }
  };

  onAddTaskClick = _ => {
    this.props.onAddTask(this.state.taskName);
    this.setState({ taskName: "" });
  };

  render() {
    const { taskName } = this.state;

    return (
      <InputGroup>
        <FormControl
          id="taskText"
          type="text"
          placeholder="Enter the task"
          value={taskName}
          onChange={this.onChangeTaskText}
          onKeyPress={this.onKeyTaskPress}
        />
        <span className="input-group-btn">
          <Button bsSize="small" bsStyle="danger" onClick={this.onAddTaskClick}>
            <Glyphicon glyph="plus" />
          </Button>
        </span>
      </InputGroup>
    );
  }
}

export default TaskInput;
