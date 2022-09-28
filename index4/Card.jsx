import React from 'react';

// const title = 'title 1';
// const text = 'text 1';

export default class Card extends React.Component {
  render () {
    return  <div className="card">
              <div className="card-body">
                <h4 className="card-title">{this.props.title}</h4>
                <p className="card-text">{this.props.text}</p>
              </div>
            </div>
  }
}

Card.defaultProps = {
  title: 'default title',
  text: 'default text',
};
