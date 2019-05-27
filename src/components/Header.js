import React from 'react';

export default class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div>
            <div className="header-cont">
                {this.props.backBtn ?  <span className="back-btn"></span>:<span className="hamburger"></span>}
                <span className="header-text">{this.props.content}</span>
            </div>
        </div>
        )
    }
}