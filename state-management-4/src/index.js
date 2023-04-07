import  React from 'react'
import ReactDOM from 'react-dom'

 
class Employee extends React.Component
{
  // count =0;
   state={counts:0}
   incrementFunc =()=>{
     this.setState({counts : this.state.counts+1});
    //this.count = this.count + 1;
   // alert('Count is = ' +this.count);
   }
render(){
return<div>
    <label>Employee Component...</label><br/>
    <button onClick={this.incrementFunc}>Page-Click</button><br/>
    <label>Number of time button clicked: <b> {this.state.counts}</b></label>
</div>
}
}

class CountCharactor extends React.Component
{
  increamentTextCount=(text)=>{
      this.setState({message:"message has" + text.length + "number of charactor"})

      }
  constructor(props)
      {
        super(props)
        this.state={message:'',
        counter:10
      };

      }
render(){
  return <div>
      <h1>Welcome to count charactor component...</h1>
      <p>
      <label>Input a text :<input type='text' onChange={e=>this.increamentTextCount(e.target.value)}></input> </label>
      </p>
      <p>
        <label>Details :<b>{this.state.message}</b></label>
        <label>Counter:<b>{this.state.counter}</b></label>
      </p>
      </div>;
}

}

// const element = <Employee></Employee>
// ReactDOM.render(element,document.getElementById('root'))


const element2 = <CountCharactor></CountCharactor>
ReactDOM.render(element2,document.getElementById('root'))
        