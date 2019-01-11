import React from "react";
import { InputGroup, Button, FormControl, Glyphicon } from "react-bootstrap";

class TaskInput extends React.Component {
  state = {
    taskName: ""
  };

  onChangeTaskText(e) {
    this.setState({ taskName: e.target.value });
  }



  render() {
    const { taskName } = this.state;

    return (
      <InputGroup>
        <FormControl
          id="taskText"
          type="text"
          placeholder="Enter the task"
          value={taskName}
          onChange={this.onChangeTaskText.bind(this)}
          onKeyPress={(e) => {
              if (e.key === 'Enter') {
                this.props.onAddTask(taskName);
                this.setState({taskName: ''});
              }
            } 
          }
        />
        <span className="input-group-btn">
          <Button
            bsSize="small"
            bsStyle="danger"
            onClick={_ => {
              this.props.onAddTask(taskName);
              this.setState({taskName: ''});
            }}
          >
            <Glyphicon glyph="plus" />
          </Button>
        </span>
      </InputGroup>
    );
  }
}

export default TaskInput;
