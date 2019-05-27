import React from 'react'; 
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CurrentResults from '../components/CurrentResults';
import TableContainer from '../components/TableContainer';

export default class Users extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            dataForView : {},
            startIndex: 0,
            endIndex: 0,
            currPagnPageNum: 0 
        }
        
    }
    updateTable = (dataForView,startIndex = 0,endIndex = 0)=>{
            this.setState({dataForView,
            startIndex,
            endIndex    
            });
    }
    componentWillReceiveProps(nextProps){
        let requiredDisplatData =nextProps.usersList.slice(0,5);
         this.setState({dataForView: requiredDisplatData,
                        startIndex:1,
                        endIndex:requiredDisplatData.length
        });        
        this.calPagination(nextProps.usersList);
    }
    calPagination = (data)=>{
         this.totalPages = (data.length > 5) ? Math.ceil(data.length/5) : 1;
         this.totalPagnPages = (this.totalPages > 9) ? Math.ceil(this.totalPages/9) : 1;
         
         if(this.totalPagnPages !== 1){
          this.setState({currPagnPageNum:1});
         }

    }
    createPagination = (pagnPageNum)=>{

        if (!pagnPageNum){
            return '';
        }
        let eleArr = [];
        let from = (pagnPageNum - 1) * 9 + 1;
        let to = (pagnPageNum !== this.totalPagnPages) ? pagnPageNum * 9 :  this.totalPagnPages/9;
        for(let i=from; i<=to ; i++){
            eleArr.push(<span className="pagn-btn" data-indx={i} key={i} onClick={this.changeTableData}>{i}</span>);
        }        
        return eleArr;
   }
   changeTableData = (e)=>{
       let userStart = ((+(e.target.dataset.indx) -1) * 5) + 1;
       let userEnd = +(e.target.dataset.indx) * 5;
       let tableData = this.props.usersList.slice(userStart,userEnd);
       this.updateTable(tableData,userStart,userEnd);
       
   }
   changePagnPage = (e)=>{
    if(e.target.id === 'pagn-back'){
        this.state.currPagnPageNum > 1 && this.setState(prevState=>{return {currPagnPageNum: --prevState.currPagnPageNum}});
    }else{
        
        this.state.currPagnPageNum < this.totalPagnPages && this.setState(prevState=>{return {currPagnPageNum: ++prevState.currPagnPageNum}});
    } 
   }    
    render(){
        return(
        <div>
            <div>
                <Header backBtn = {false} content={'Data Peace'}/>
            </div>
            <div>
                <SearchBar usersList = {this.props.usersList} updateTable={this.updateTable}/>
                <CurrentResults startIndex = {this.state.startIndex} endIndex = {this.state.endIndex} total = {this.props.usersList.length}/>
            </div>
            <div>
                <TableContainer dataForView = {this.state.dataForView} updateTable={this.updateTable}/>
            </div>
            <div className="pagn-wrap">
               {this.state.currPagnPageNum && <span className="pagn-btn" id='pagn-back' onClick={this.changePagnPage}>Prev</span>}
               {this.createPagination(this.state.currPagnPageNum)}
               {this.state.currPagnPageNum && <span className="pagn-btn" id='pagn-next' onClick={this.changePagnPage}>Next</span>}
            </div>
        </div>)
    }
}