import './App.css';
import Employee from './employee';

function App() {
  return (
    <div>
      <div style={{textAlign:'center', fontFamily:'sans-serif'}}>
        <Employee empName={'Farhan'} empId={1}/><hr />    
        <Employee empName={'Haider'} empId={2}/><hr />    
        <Employee empName={'Zeeshan'} empId={3}/><hr />    
        <Employee empName={'Naqvi'} empId={4}/><hr />   
        <Employee empName={'Syed'} empId={5}/>    
      </div>
    </div>

  );
}

export default App;
