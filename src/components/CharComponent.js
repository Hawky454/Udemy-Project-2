import React from 'react';

const CharComponent = (props) => {

    let charStyles = {
        display: 'inline-block',
        padding: 16,
        textAlign: 'center',
        margin: 16,
        border: '2px solid black',
        borderRadius: 2,
        background: 'white',
        boxShadow: '0 3px 5px grey'
    }

    let dotBeGone = {
        listStyleType: 'none',
        textAlign: 'center',
        fontWeight: 'bolder',
        fontSize: 32,
        color: 'red'
    }

    
                                        //!I like doing it as words rather than letters
   let finishedProduct = props.seperate.split(' ').map((letters, index) => {
        return(

            <div
              onClick={props.delete} 
              key={index}
              style={charStyles}>
                
                    <li style={dotBeGone}>{letters}</li>
                
            </div>
        );
    });
    
    return <ul>{finishedProduct}</ul>

    
    




}

export default CharComponent;