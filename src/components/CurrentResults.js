import React from 'react';

export default class CurrentResults extends React.Component{
    constructor(props){
        super(props)
    }
    render(){        
        let content = `${this.props.startIndex} - ${this.props.endIndex} of ${this.props.total}`;
        return(
        <div className="curr-results">{this.props.startIndex === 0 ? '': content}</div>
        )
    }
}