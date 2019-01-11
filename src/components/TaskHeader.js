import React from 'react';
import { Navbar} from 'react-bootstrap';

class TaskHeader extends React.Component{
    render(){
        return(
            <Navbar inverse staticTop>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">TODO LIST APP</a>
              </Navbar.Brand>
            </Navbar.Header>
          </Navbar>            
        );
    }
}

export default TaskHeader;