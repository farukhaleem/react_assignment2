import React from 'react';

function Employee(props){

    return(
        <div>
            <h1 style={{ fontSize: '24px'}} >Employee Name is {props.empName} and employee id is Emp-{props.empId}</h1>
        </div>
    );

}

export default Employee;