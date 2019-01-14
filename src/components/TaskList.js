import React from "react";
import { Panel, Table } from "react-bootstrap";
import TaskItem from "./TaskItem";



const TaskList = ({title, onTaskClick, items}) => {
  return (
    <Panel header={title}>
      <Table fill>
        <tbody>
          {items.map((item, index) => (
            <TaskItem
              key={index}
              item={item}
              onClick={onTaskClick}
            />
          ))}
        </tbody>
      </Table>
    </Panel>
  );
}

export default TaskList;
