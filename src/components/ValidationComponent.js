import React from 'react';

const ValidationComponent = (props) => {
  if(props.length < 10) {
    return(
      <div>
        <p style={{color: 'red'}}>Text is too short!</p>
        <p>{props.length}</p>
      </div>
    );
  } else if(props.length > 50) {
    return(
      <div>
        <h2 style={{color: 'green'}}>Text is long enough!</h2>
        <p>{props.length}</p>
      </div>
    );
  } else if(props.length > 100) {
    return(
      <div>
        <h1 style={{color: 'red'}}>Enough already, that is way too long!</h1>
        <h1>{props.length}</h1>
      </div>
    );
  }
return <p>{props.length}</p>
}

export default ValidationComponent;