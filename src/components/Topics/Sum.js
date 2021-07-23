import React, {Component} from 'react';

class Sum extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            number1: 0,
            number2: 0,
            sum: null
        };
        this.modNum1 = this.modNum1.bind(this);
        this.modNum2 = this.modNum2.bind(this);
        this.sumNums = this.sumNums.bind(this);
    };

    modNum1(e) {
        this.setState({number1: e.target.value})
    };

    modNum2(e) {
        this.setState({number2: e.target.value})
    };

    sumNums() {
        const sum = parseInt(this.state.number1, 10) + parseInt(this.state.number2, 10);
        this.setState({sum: sum})
    };

    render() {
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' type='number' value={this.state.number1} onChange={this.modNum1}></input>
                <input className='inputLine' type='number' value={this.state.number2} onChange={this.modNum2}></input>
                <button className='confirmationButton' onClick={this.sumNums}>Sum Nums!</button>
                <span className='resultsBox'>Sum:{this.state.sum}</span>
            </div>
        )
    } 
};

export default Sum;