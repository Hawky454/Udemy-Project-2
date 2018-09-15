import React from 'react';

const ValidationComponent = (props) => {
  if(props.length < 10) {
    return(
      <div>
        <p>Text is too short!</p>
        <p>{props.length}</p>
      </div>
    );
  }
  if(props.length > 100) {
    return(
      <div>
        <p>Text is too long!</p>
        <p>{props.length}</p>
      </div>
    );
  }
return <p>{props.length}</p>
}

export default ValidationComponent;