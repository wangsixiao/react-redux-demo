import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './action';
 
interface Iprops {
  // onAdd: (value:string) => void,
  todos: {}
}

class AddTodo extends Component<Iprops>{

  private inputRef = React.createRef<HTMLInputElement>()

  constructor(props:any){
    super(props)
  }

  onAddTodo = () => {
    let value = this.inputRef.current!.value
    // if(e.keyCode === 13 && value.trim()){
    // if(value.trim()){
    //   this.props.onAdd(value)
    //   this.inputRef.current!.value = ''
    // }
  }

  render() {
    const {
      todos
    } = this.props
    console.log(todos)
    return (
      <div>
        <input type="text" 
          // onKeyUp={this.onAddTodo}
          ref={this.inputRef}
        />
        <button onClick={this.onAddTodo}>add</button>
      </div>
    )
  }
}

const mapStateToProps = (state:{}) => {
  return {
    todos: state
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     onAdd: (value:string) => dispatch(addTodo(value))
//   }
// }

export default connect(mapStateToProps)(AddTodo)