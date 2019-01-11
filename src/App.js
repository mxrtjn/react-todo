import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskHeader from "./components/TaskHeader";
import TaskToolBar from "./components/TaskToolBar";

import "./App.css";

class App extends Component {
  state = {
    taskList: [
      { id: 1, name: "walk dog", isChecked: true },
      { id: 2, name: "walk cat ddd", isChecked: false }
    ],
    showAll: false
  };

  handleAddTask = taskName => {
    this.setState({
      taskList: [...this.state.taskList, { id: this.state.taskList.length + 1,  name: taskName, isChecked: false }]
    });
  };

  handleChangeState = id => {
    this.setState({
      taskList: this.unmutableList(this.state.taskList, id)
    });
  };

  handleShowAll = _ => {
    this.setState({ showAll: !this.state.showAll });
  };

  unmutableList = (list, id) => {
    let index = list.findIndex(r=>r.id === id);
    return [
      ...list.slice(0, index),
      { ...list[index], ...{ isChecked: !list[index].isChecked } },
      ...list.slice(index + 1)
    ];
  };

  render() {
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
                items={this.state.taskList.filter(r => r.isChecked === false)}
                showAll={this.state.showAll}
                onChangeItemState={this.handleChangeState}
              />
            </Col>
            <Col sm={12}>
              { this.state.taskList.some(r => r.isChecked === true) && <TaskList
                title={"Task Done"}
                items={this.state.taskList.filter(r=> r.isChecked === true)}
                showAll={this.state.showAll}
                onChangeItemState={this.handleChangeState}
              />}
            </Col>            
            {/* <Col sm={12}>
              <TaskToolBar
                onChangeShowAll={this.handleShowAll}
                showAll={this.state.showAll}
              />
            </Col> */}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
