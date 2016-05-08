import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import { connect } from 'react-redux';

class QuizAdminApp extends Component{
  componentWillMount(){

  }
  
  render(){
    return(
      <div>
        <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">Quiz Admin</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="#">List</NavItem>
              <NavItem eventKey={2} href="#">Create New</NavItem>
            </Nav>
          </Navbar>
          {this.props.children}
      </div>
    );
  }
}

export default connect()(QuizAdminApp);
