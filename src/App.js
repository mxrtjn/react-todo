import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskHeader from "./components/TaskHeader";

import "./App.css";

class App extends Component {
  state = {
    taskList: []
  };

  handleAddTask = taskName => {
    this.setState({
      taskList: [
        ...this.state.taskList,
        { id: this.state.taskList.length + 1, name: taskName, isChecked: false }
      ]
    });
  };

  handleToogleChecked = id => {
    const newTaskList = this.state.taskList.map(taskItem => {
      if (taskItem.id === id)
        return { ...taskItem, isChecked: !taskItem.isChecked };
      else return taskItem;
    });
    this.setState({
      taskList: newTaskList
    });
  };

  handleShowAll = _ => {
    this.setState({ showAll: !this.state.showAll });
  };

  render() {
    let pendingList = this.state.taskList.filter(r => r.isChecked === false);
    let doneList = this.state.taskList.filter(r => r.isChecked === true);

    return (
      <div>
        <TaskHeader />
        <Grid>
          <Row>
            <Col sm={12}>
              <TaskInput onAddTask={this.handleAddTask} />
            </Col>
            <Col sm={12}>
              <TaskList
                title={"Task to Do"}
                items={pendingList}
                onTaskClick={this.handleToogleChecked}
              />
            </Col>
            <Col sm={12}>
              {doneList.length > 0 && (
                <TaskList
                  title={"Task Done"}
                  items={doneList}
                  onTaskClick={this.handleToogleChecked}
                />
              )}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
