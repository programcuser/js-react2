import React from 'react';

export default class Item extends React.Component {
  render () {
    const { task, onRemove } = this.props;

    return (
      <div>
        <div className='row'>
          <div>
            <button type='button' className='btn btn-primary btn-sm' onClick={onRemove(task)}>-</button>
          </div>
          <div className='col-10'>{task}</div>
        </div>
        <hr />
      </div>
    );
  }
}
