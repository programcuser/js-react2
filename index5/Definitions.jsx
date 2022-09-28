import React from 'react';

// const definitions = [
//   { dt: 'one', dd: 'two' },
//   { dt: 'another term', dd: 'another description' },
// ];


export default class Definitions extends React.Component {
  renderDefs () {
    return (
      <>
        {this.props.data.map((item) => (
          <React.Fragment>
            <dt>{item.dt}</dt>
            <dd>{item.dd}</dd>
          </React.Fragment>
        ))}
      </>
    );
  }

  render () {
    return (
      <dl>
        {this.renderDefs()}
      </dl>
    );
  }
}
