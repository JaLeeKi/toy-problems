import React, {Component} from 'react';

class Palindrome extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            userInput: '',
            palindrome: '',
        };
    };

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input className='inputLine'></input>
                <button className='confirmationButton'></button>
                <span className='resultsBox'></span>
                <span className='resultsBox'></span>
            </div>
        )
    } 
};

export default Palindrome;