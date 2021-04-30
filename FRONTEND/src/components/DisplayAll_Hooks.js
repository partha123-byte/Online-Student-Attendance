import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar';

function DisplayAll() {
  const [emplist, setEmpList] = useState([]);

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios.get('http://localhost:4500/emp')
      .then(response => {
        console.log(response.data)
        setEmpList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  function viewEmpList() {
    return emplist.map((currentrow, index) => {
      return (
        <tr key={index}>
          <td>{currentrow.stdname}</td>
          <td>{currentrow.stdroll}</td>
          <td>{currentrow.stdsub1}</td>
          <td>{currentrow.stdsub2}</td>
          <td>{currentrow.stdsub3}</td>
         
        </tr>
      );
    });
  }

  return (
    <div>
      <NavigationBar />
      <br />
      <div className="display">
      <h3>Student details</h3>
      <table  align="center" class="table">
        <thead>
          <tr classsName="row">
            <th>Name</th>
            <th>Roll</th>
            <th>Sub1</th>
            <th>Sub2</th>
            <th>Sub3</th>
          </tr>
        </thead>

        <tbody>
          {viewEmpList()}
        </tbody>
      </table>
      </div>
    </div>
  )
}


export default DisplayAll