import React from 'react';
import cn from 'classnames';

export default class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: props.opened,
      text: props.text,
    };
  }

  toggleText = () => {
    this.setState(({ opened }) => ({ opened: !opened }));
  };

  render () {
    const { opened, text } = this.state;
    const collapseClass = cn('collapse', {
      show: opened,
    });

    return (
      <div>
        <p>
          <a className='btn btn-primary' href='#' onClick={this.toggleText}>Link with href</a>
        </p>
        <div className={collapseClass}>
          <div className='card card-body'>
            {text}
          </div>
        </div>
      </div>
    );
  }
}

Collapse.defaultProps = {
  opened: true,
  text: 'default text',
};
