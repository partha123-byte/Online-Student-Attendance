import React, { useState } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar';

function Search() {
  const [emplist, setEmpList] = useState([]);
  const [eroll, setEmpRoll] = useState("");
  const [status, setStatus] = useState(false);
  const [msg, setMessage] = useState("");

  const onChangeEmpRoll = (e) => {
    setEmpRoll(e.target.value);
    setMessage(''); //REMOVE ERROE MSG
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    axios.get('http://localhost:4500/emp/search/' + eroll)
      .then(res => {
        console.log(res.data)
        setEmpList(res.data)
        setStatus(true)
      })
      .catch(err => {
        console.log(err)
        setMessage('INVALID EMAIL ID')
      })

    setEmpRoll('')
  }

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

  if (status === false) {
    return (<div>
      <NavigationBar />
      <br />
      <div className="searchup">
      <h3>Enter rollno to search</h3>
      <b style={{ color: "red" }}>{msg}</b>
      <form onSubmit={handleSubmit}>
        <input type="text" value={eroll}
          onChange={onChangeEmpRoll}
          placeholder="Roll no..."
          required />
        <br />
        <br />
        <input type="submit" value="Search" className="btn btn-success" />
      </form>
      </div>
    </div>);
  }
  else {
    return (
      <div>
        <NavigationBar />
        <br />
        <div className="searchup">
        <h3>Enter rollno to search</h3>
        <b>{msg}</b>
        <form onSubmit={handleSubmit}>
          <input type="text" value={eroll}
            onChange={onChangeEmpRoll} placeholder="Roll.."
            required />
          <br />
          <br />
          <input type="submit" value="Search" />
        </form>
        <br /><br />

        <h3>Student Details</h3>
        <table align="center" className="table">
          <thead>
            <tr className="row1">
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
}

export default Search
