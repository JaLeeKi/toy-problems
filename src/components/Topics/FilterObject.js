import React, {Component} from 'react';

class FilterObject extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            unFilteredArray: [
                {name: 'Cold War', released: 2020, fun: true},
                {name: 'Warzone', released: 2020, fun: false},
                {name: 'Dead Space', released: 2008, fun: true},
                {name: 'GoldenEye', released: 1995, fun: true}
            ],
            userInput: '',
            filteredArray: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.filterObject = this.filterObject.bind(this);
    };

    handleChange(e) {
        this.setState({userInput: e.target.value})
    };

    filterObject() {
        const userInput = this.state.userInput;
        const result = this.state.unFilteredArray.filter(game => game[userInput]);
        this.setState({filteredArray: result});
    };

    render() {
        const unFilteredArr = JSON.stringify(this.state.unFilteredArray);
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>{unFilteredArr}</span>
                <input className='inputLine' type='text' value={this.state.userInput} onChange={this.handleChange}></input>
                <button className='confirmationButton' onClick={this.filterObject}>Filter Objects</button>
                <span className='resultsBox filterObjectRB'>Filtered:{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    } 
};

export default FilterObject;