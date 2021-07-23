import React, {Component} from 'react';

class Palindrome extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            userInput: '',
            palindrome: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.isPalindrome = this.isPalindrome.bind(this);
    };

    handleChange(e){
        this.setState({userInput: e.target.value})
    };

    isPalindrome() {
        const string = this.state.userInput.split("").reverse().join("");
        if(this.state.userInput === string) {
            this.setState({palindrome: 'true'})
        }else {
            this.setState({palindrome: 'false'})
        }
    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input className='inputLine' type='text' value={this.state.userInput} onChange={this.handleChange}></input>
                <button className='confirmationButton' onClick={this.isPalindrome}>Is this a Palindrome?</button>
                <span className='resultsBox'>Result: {this.state.palindrome}</span>
            </div>
        )
    } 
};

export default Palindrome;