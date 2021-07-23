import React, {Component} from 'react';

class Sum extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            number1: 0,
            number2: 0,
            sum: null
        };
    };

    render() {
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine'></input>
                <button className='confirmationButton'></button>
                <span className='resultsBox'></span>
                <span className='resultsBox'></span>
            </div>
        )
    } 
};

export default Sum;