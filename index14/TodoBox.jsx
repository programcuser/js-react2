import React from 'react';
import _ from 'lodash';
import Item from './Item.jsx';

export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      currentTodo: '',
    };
  }

  handleChange = (event) => {
    this.setState({ currentTodo: event.target.value });
  };

  addTodo = (event) => {
    event.preventDefault();

    this.setState(({ todos, currentTodo }) => {
      const newTodos = [currentTodo, ...todos];
      return { todos: newTodos, currentTodo: '' };
    });
  };

  removeTodo = (task) => () => {
    const newTodos = this.state.todos.filter((todo) => todo !== task);
    this.setState({ todos: newTodos });
  };

  render () {
    const { todos } = this.state;

    return (
      <div>
        <div className='mb-3'>
          <form className='todo-form form-inline mx-3' onSubmit={this.addTodo}>
            <div className='form-group'>
              <input type='text' required='' className='form-control mr-3' placeholder='I am going...' onChange={this.handleChange} value={this.state.currentTodo}/>
            </div>
            <button type='submit' className='btn btn-primary'>add</button>
          </form>
        </div>
        { todos.map(task => <Item key={_.uniqueId()} task={task} onRemove={this.removeTodo} />) }
      </div>
    );
  }
}
