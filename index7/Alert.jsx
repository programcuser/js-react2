import React from 'react';
import cn from 'classnames';

export default class Alert extends React.Component {
  render () {
    const alertClasses = cn('alert', `alert-${this.props.type}`);

    return <div className={alertClasses} role="alert">{this.props.text}</div>;
  }
}
