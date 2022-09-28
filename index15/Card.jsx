import React from 'react';

const Body = (props) => <div class="card-body">{props.children}</div>;

const Title = (props) => <h4 class="card-title">{props.children}</h4>;

const Text = (props) => <p class="card-text">{props.children}</p>;

export default class Card extends React.Component {
  static Body = Body;
  static Title = Title;
  static Text = Text;

  render() {
    return <div class="card">{this.props.children}</div>;
  }
}
