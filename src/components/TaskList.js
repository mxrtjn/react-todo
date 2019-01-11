import React from "react";
import { Panel, Table } from "react-bootstrap";
import TaskItem from "./TaskItem";

class TaskList extends React.Component {
  render() {
    return (
      <Panel header={this.props.title}>
        <Table fill>
          <tbody>
            {this.props.items.map(
              (item, index) =>
<TaskItem
                    key={index}
                    item={item}
                    onChangeItemState={this.props.onChangeItemState}
                  />
            )}
          </tbody>
        </Table>
      </Panel>
    );
  }
}

export default TaskList;
