import React, {Component} from 'react';

class FilterString extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            unFilteredArray: ['"', 'Jade', ' ', 'is', ' ', 'an', ' ', 'amazing', ' ', 'coder', '"'],
            userInput: '',
            filteredArray: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.filterString = this.filterString.bind(this);
    };

    handleChange(e) {
        this.setState({userInput: e.target.value})
    };

    filterString() {
        const userInput = this.state.userInput;
        const result = this.state.unFilteredArray.filter(string => string.includes(userInput));
        this.setState({filteredArray: result})
    };

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>{this.state.unFilteredArray}</span>
                <input className='inputLine' type='text' value ={this.state.userInput} onChange={this.handleChange}></input>
                <button className='confirmationButton' onClick={this.filterString}>Filter String</button>
                <span className='resultsBox filterStringRB'>Filtered Words: {this.state.filteredArray}</span>
            </div>
        )
    } 
};

export default FilterString;