import React, {Component} from 'react';
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'

class TopicBrowser extends React.Component{
    render(){
        return (
            <div>
                <h1>Jade's React Toy Problems!</h1>
                <EvenAndOdd />
                <FilterObject />
                <FilterString />
                <Palindrome />
                <Sum />
            </div>
        )
    };
};

export default TopicBrowser;