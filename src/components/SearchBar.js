import React from 'react';

export default class SearchBar extends React.Component{
    constructor(props){
        super(props)
    }
   
    update = (e)=>{
        this.searchKey(e.target.value);
        
        
    }
    searchKey = (key)=>{
        let allUserData = this.props.usersList;
        if(!key.length){
        allUserData.length && this.props.updateTable(allUserData,1,allUserData.length >= 5 ? 5 : allUserData.length); 

        return;
        }
        let results = allUserData.filter( user => user.first_name.toLowerCase().includes(key.toLowerCase()));
        results = results.length ? results: [];
        this.props.updateTable(results)
        console.log(results);

             
    }
    render(){
        return(
        <div className="search-cont">
            <input type='text' placeholder='Search by first name' onChange={this.update}/>
        </div>
        )
    }
}