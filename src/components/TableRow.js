import React from 'react';
const TableRow = (props)=>{
    let iterrables = Object.values(props.dataForView);
    iterrables.shift();    
    
return (
    <tr>
        {iterrables.map( (item,i) => {            
            return <td id={i}>{item}</td>
        })}
    </tr>
)
};
export default TableRow;