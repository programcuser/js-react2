import React from 'react';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: [],
    };
  }

  removeLog = (id) => () => {
    const newLogs = this.state.logs.filter((log) => log.id !== id);
    this.setState({ logs: newLogs });
  };

  handleInc = () => {
    this.setState(({ logs }) => {
      const item = (logs.length !== 0) ? (logs[0].item + 1) : 1;
      const newLog = { item, id: item };

      return { logs: [newLog, ...logs] };
    });

    // console.log(this.state)
  };

  handleDec = () => {
    this.setState(({ logs }) => {
      const item = (logs.length !== 0) ? (logs[0].item - 1) : -1;
      const newLog = { item, id: item };

      return { logs: [newLog, ...logs] };
    });
  };

  renderLogs () {
    const { logs } = this.state;

    return (
      <div className='list-group'>
        {logs.map(({ item, id }) => {
          return (
            <button key={id} type='button' className='list-group-item list-group-item-action' onClick={this.removeLog(id)}>
              {item}
            </button>
          );
        })}
      </div>
    );
  }

  render () {
    const { logs } = this.state;

    return (
      <div>
        <div className='btn-group' role='group'>
          <button type='button' className='btn hexlet-inc' onClick={this.handleInc}>+</button>
          <button type='button' className='btn hexlet-dec' onClick={this.handleDec}>-</button>
        </div>
        { logs.length !== 0 ? this.renderLogs() : null }
      </div>
    );
  }
}
