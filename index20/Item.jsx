import React from 'react';

const CrossingElement = (props) => {

  if (props.state === 'active') {
    return props.children;
  } else if (props.state === 'finished') {
    return <s>{props.children}</s>;
  }
  // return props.state === 'active' ? props.children : <s>{props.children}</s>;
};

export default class Item extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className='col-1'>{this.props.itemObj.id}</div>
        <div className='col'>
          <CrossingElement state={this.props.itemObj.state}>
            <a href='#' className='todo-task' onClick={this.props.onClick(this.props.itemObj)}>
              {this.props.itemObj.text}
            </a>
          </CrossingElement>
        </div>
      </div>
    );
  }
}
