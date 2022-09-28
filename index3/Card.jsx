import React from 'react';

export default (obj) => {  //obj - { title: 'hi', text: 'how are you?' }
  if (!obj.title && !obj.text) {
    return null;
  }

  return  <div className="card">
            <div className="card-body">
              {obj.title ? <h4 className="card-title">{obj.title}</h4> : null}
              {obj.text ? <p className="card-text">{obj.text}</p> : null}
            </div>
          </div>
};
