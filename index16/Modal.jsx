import React from 'react';
import cn from 'classnames';

const Header = (props) => (
  <div className='modal-header'>
    <div className='modal-title'>{this.props.children}</div>
    <button type='button' className='close' data-dismiss='modal' aria-label='Close' onClick={this.props.toggle}>
      <span aria-hidden='true'>×</span>
    </button>
  </div>
);

const Body = (props) => <p class="modal-body">{this.props.children}</p>;

const Footer = (props) => <p class="modal-footer">{this.props.children}</p>;

export default class Modal extends React.Component {
  static Header = Header;
  static Body = Body;
  static Footer = Footer;

  render () {
    const modalClass = cn('modal', {
      fade: !this.props.isOpen,
      show: this.props.isOpen,
    });

    const style = {
      display: this.props.isOpen ? 'block' : 'none',
    };


    return (
      <div className={modalClass} style={style} role='dialog'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
