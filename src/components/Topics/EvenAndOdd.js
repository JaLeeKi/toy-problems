import React, {Component} from 'react';

class EvenAndOdd extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            evenArray: [],
            oddArray: [],
            userInput: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.orgEvenAndOdd = this.orgEvenAndOdd.bind(this);
    };

    handleChange(e) {
        this.setState({userInput: e.target.value})
    };

    orgEvenAndOdd() {
        const nums = this.state.userInput.split(' ');
        const evenArr = [];
        const oddArr = [];
        for (let i=0; i < nums.length; i++) {
            if (nums[i] % 2 === 0) {
                evenArr.push(nums[i])
            }else{
                oddArr.push(nums[i])
            }
        }
        let i= 0; 
        let j = 0;
        this.setState( {evenArray: evenArr.map(ele => { 
            if (i > 0) 
            {i++; return ' ' + ele } 
            else{i++; return ele}
        }), 
        oddArray: oddArr.map(ele => { 
            if (j > 0) 
            {j++; return ' ' + ele } 
            else{j++; return ele}
            })
    })
    
    
};

    render() {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className='inputLine' type='text' value={this.state.userInput} onChange={this.handleChange}></input>
                <button className='confirmationButton' onClick={this.orgEvenAndOdd}>Organize Numbers</button>
                <span className='resultsBox'>Evens: [{this.state.evenArray}]</span>
                <span className='resultsBox'>Odds: [{this.state.oddArray}]</span>
            </div>
        )
    }; 
};

export default EvenAndOdd;