import React from 'react';

export default class TableHead extends React.Component{
    constructor(props){
        super(props)
        
    }
    sortData = (e)=>{
        let unsortedData = this.props.dataForView;
        let sortingKey = e.target.id;        
        unsortedData.sort((a,b) => (a[sortingKey] > b[sortingKey]) ? 1 : (a[sortingKey] < b[sortingKey]) ? -1 : 0 );
        this.props.updateTable(unsortedData)
        
    }
    render(){
        return(
       <tr onClick={this.sortData}>
           <th id="first_name">First Name</th>
           <th id="last_name">Last Name</th>
           <th id="company_name">Company Name</th>
           <th id="city">City</th>
           <th id="state">State</th>
           <th id="zip">ZIP</th>
           <th id="email">Email</th>
           <th id="web">Web</th>
           <th id="age">Age</th>
       </tr>
        )
    }
}