import React, {Component} from 'react';

class FilterString extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            unFilteredArray: ['', '', '', ''],
            userInput: '',
            filteredArray: []
        };
    };

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <input className='inputLine'></input>
                <button className='confirmationButton'></button>
                <span className='resultsBox'></span>
                <span className='resultsBox'></span>
            </div>
        )
    } 
};

export default FilterString;