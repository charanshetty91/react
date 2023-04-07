import React from 'react'
import ReactDOM from 'react-dom'

class Employee extends React.Component{
constructor(props)
{
  super(props);
  console.log(this.props);
}

  render(){
    return <div>
      <h1>...Employee Details...</h1>
      <p>
        <label>Employee Name: <b>{this.props.Name}</b></label>
      </p>
      <p>
        <label>Employee Age:<b>{this.props.Age}</b></label>
      </p>
      <p>
        <label>Employee location: <b>{this.props.Location} </b></label>
      </p>
      <p>
        <label>Employee salary: <b>{this.props.Salary}</b></label>
      </p>
    
      <DepartmentInfo DName={this.props.DeptName} HeadName={this.props.DeptHeadName}></DepartmentInfo>
    </div>;
    
  }
}

class DepartmentInfo extends React.Component
{
  constructor(props)
  {
    super(props);
    console.log("child class");
    console.log(this.props);

  }
render(){
return<div>
<h2>...Department details...</h2>
<label>Department Name:<b>{this.props.DName}</b></label><br></br>
<label>Department Head Name:<b>{this.props.HeadName}</b></label>
</div>;
}

}
const element = <Employee Name="Pramodh" Age="29" Salary="10093" Location="Bangalore" DeptName="Chemical" DeptHeadName="Karna"/>
ReactDOM.render(element,document.getElementById('root1'));

