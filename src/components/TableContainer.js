import React from 'react';
import TableHead from '../components/TableHead';
import TableRow from '../components/TableRow';


export default class TableContainer extends React.Component{
    constructor(props){
        super(props)
        
    }
    render(){
        console.log(this.props.dataForView.length);
        
        return(
        <div className="table-cont">
            <table>
                <tbody>
                    { this.props.dataForView.length ? <TableHead updateTable={this.props.updateTable} dataForView = {this.props.dataForView}/>: <tr></tr>}
                    { this.props.dataForView.length ? this.props.dataForView.slice(0,5).map(item =>{
                        return <TableRow dataForView={item}/>

                    }) : <tr></tr>}
                </tbody>
            </table>
        </div>
        )
    }
}