import './App.css';

import React from 'react';
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Survey from './components/Survey';
import Data from './components/Data';


class App extends React.Component {
  
  constructor(props){
    // Initializes super class
    super(props);

    // Creates state
    this.state = {
      ip : "",
      port : "",
      rosConnected : false
    }

    // Retrieves ROSLIB.js from CDN
    this.ROSLIB = window.ROSLIB;

  }

  // Function to connect to ROS topics
  ROSTopics = (ros) => {
    
    // Subscribes to status topic
    this.tp_status = new this.ROSLIB.Topic({
      ros : ros,
      name : "/gpr20/status",
      messageType : "std_msgs/String"
    });

    this.tp_status.subscribe((message) => {
      alert(message.data)
    });
  }

  handleConnection = () => {
    try {
      // Creates the ROS instance
      this.ros = new this.ROSLIB.Ros({
        url : "ws://" + this.state.ip + ':' + this.state.port
      });

      // If connection is successful
      this.ros.on('connection', () => {
        this.setState({ rosConnected : true });
        this.ROSTopics(this.ros)
      })

      // If connection presents an error
      this.ros.on('error', () => {
        alert("An error has occured when connecting to the web socket!")
      })

      // If connection is closed
      this.ros.on('close', () => {
        this.setState({ rosConnected : false });
      })

    // Handles error related to connection
    } catch {
      alert("An error has occured!")
    }   
  }

  handleDisconnection = () => {
    this.ros.close();
    this.setState({rosConnected : false});
  }
  
  // Hanlder functions for state variables
  handleIpChange = (e) => {this.setState({ip : e.target.value})};
  handlePortChange = (e) => {this.setState({port : e.target.value})};

  render(){
    return (
      <Router>
        
        <Navbar 
          rosConnected={this.state.rosConnected}
          handleConnection={this.handleConnection}
          handleDisconnection={this.handleDisconnection}
          ipChange={this.handleIpChange}
          portChange={this.handlePortChange}
        />

        <Switch>
          <Route path="/gpr20_app/" exact>
            <Home 
              status={this.state.rosConnected}
              ip={this.state.ip}
              port={this.state.port}
              type="grid"
            />
          </Route>

          <Route path="/gpr20_app/survey" component={Survey} />
          <Route path="/gpr20_app/data" component={Data} />
        </Switch>
      </Router>
    );
  }
}

export default App;
