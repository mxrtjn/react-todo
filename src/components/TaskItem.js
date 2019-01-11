import React from "react";
import { Checkbox } from "react-bootstrap";

class TaskItem extends React.Component {
  render() {
    return (
        
      <tr>
        <td>
          <Checkbox
            checked={this.props.item.isChecked}
            onChange={() => this.props.onChangeItemState(this.props.item.id)}
            inline
          >
            {this.props.item.name}
          </Checkbox>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
