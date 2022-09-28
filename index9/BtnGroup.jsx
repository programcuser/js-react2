import React from 'react';
import cn from 'classnames';

export default class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: false,
      right: false,
    };
  }

  activeLeftBtn = () => {
    this.setState(({ left, right }) => ({ left: true, right: false }));
  };

  activeRightBtn = () => {
    this.setState(({ left, right }) => ({ left: false, right: true }));
  };

  render () {
    const leftBtnClass = cn('btn', 'btn-secondary', 'left', {
      active: this.state.left,
    });
    const rightBtnClass = cn('btn', 'btn-secondary', 'right', {
      active: this.state.right,
    });

    return (
      <div className='btn-group' role='group'>
        <button type='button' className={leftBtnClass} onClick={this.activeLeftBtn}>Left</button>
        <button type='button' className={rightBtnClass} onClick={this.activeRightBtn}>Right</button>
      </div>
    );
  }
}
