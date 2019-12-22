import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './action';
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';
 

class AddTodo extends Component{

  constructor(props){
    super(props);
    this.inputRef = React.createRef();
  }

  onAddTodo = () => {
    let value = this.inputRef.current.value
    // if(e.keyCode === 13 && value.trim()){
    if(value.trim()){
      this.props.onAdd(value)
      this.inputRef.current.value = ''
    }
  }

  render() {
    const {
      todos
    } = this.props
    console.log(todos)
    return (
      <div>
        <Input type="text" 
          placeholder="please add todo"
          ref={this.inputRef}
        />
        <Button onClick={this.onAddTodo}>add</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAdd: (value) => dispatch(addTodo(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)