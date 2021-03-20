import React from 'react';
import './App.css';

class App extends React.Component {
  
render(){
  return (
    <Container/>
  );
}
  
}

class Container extends React.Component{

  render(){
    return(
    <div className="container">
      
      <Form/>
    </div>
    );
  }
}


class Form extends React.Component{

  constructor(){
    super()
    this.state = {
      tasks : [],
    }
  }

addTask = () =>{
 var val = document.getElementById("input").value
 this.state.tasks.push(val)
 this.setState({tasks:this.state.tasks}) 
}

  render(){
    return(
    <div>
        <List tasks = {this.state.tasks} />
        <div id="form">
          <div id="i">
          <input id="input" type="text"/>
          <button id="add" onClick={this.addTask}>ADD</button>
        </div>
      </div>
    </div>
    );
  }
}

class List extends React.Component{

  render(){
    return(
      <div className="list">
      <div className="listItem">
        <ListItem items = {this.props.tasks}/>  
      </div>
      </div>
       );
  }
}

class ListItem extends React.Component{
  render(){
    
    return(
        <div id="listItem">{this.props.items.map(item=><div>{item}</div>)}</div>
        );
  }
}


export default App;
