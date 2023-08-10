import React, { useState } from 'react';
import './App.css';
import '../src/components/table.css';

const App = () => {

  const [input,setInput] = useState([
    {
      fullname : '',
      email : '',
      salary : '',
    }
  ])

  const handleAdd = () => {
    let Row = { fullname : '', email : '', salary : '' };
    let data = [...input, Row];
    console.log(data);
    setInput(data);
  }

  const handleDelete = (index) => {
    let data = [...input];
    data.splice(index,1);
    setInput(data);
  }

  const handleInput = (index,e) => {
    let data = [...input];
    data[index][e.target.name] = e.target.value;
    setInput(data);
  }

  return (
    <div className="App">
      <h1>Dynamic Table</h1>
      <table>
        <tr>
          <td>Full Name</td>
          <td>Email</td>
          <td>Salary</td>
          <td>Actions</td>
        </tr>
      </table>  
      <div className='new'>
        <table>
          {
            input.map((item,index) => {
              return(
                <tr key={index}>
                  <td><input type='text' name='name' value={item.name} onChange={(e)=>handleInput(index,e)}></input></td>
                  <td><input type='text' name='email' value={item.email} onChange={(e)=>handleInput(index,e)}></input></td>
                  <td><input type='text' name='salary' value={item.salary} onChange={(e)=>handleInput(index,e)}></input></td>
                  <td><button onClick={()=>handleAdd()}>add</button></td>
                  <td><button onClick={()=>handleDelete()}>Delete</button></td>
                </tr>
              )
            })
          }
        </table>
      </div>
    </div>
  );
}

export default App;
