import React from 'react';

{/* <Progress percentage={40} />; */}

export default class Progress extends React.Component {
  render () {
    const progressSyle = {
      width: `${this.props.percentage}%`,
    }

    return (
      <div className="progress">
        <div className='progress-bar' role='progressbar' aria-valuenow={this.props.percentage} aria-valuemin='0' aria-valuemax='100' aria-label='progressbar' style={progressSyle}>
        </div>
      </div>
    );
  }
}

