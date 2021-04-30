import React, { useState } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar';

function Delete() {
  const [eroll, setEmpRoll] = useState("");
  const [msg, setMessage] = useState("");

  const onChangeEmpRoll = (e) => {
    setEmpRoll(e.target.value);
    setMessage(''); //REMOVE ERROE MSG
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //console.log(`Form submitted:`);
    //console.log(`EMAIL ID: ${eemail}`);

    axios.delete('http://localhost:4500/emp/remove/' + eroll)
      .then(res => {
        console.log(res.data)
        setMessage('SUCCESSFULLY DELETED')
      })
      .catch(err => {
        console.log(err)
        setMessage('INVALID EMAIL ID')
      })

    setEmpRoll('')
  }

  return (
    <div>
      <NavigationBar />
      <br />
      <div className="delete" >
      <h3 >Delete student</h3>
      <b style={{ color: "red" }}>{msg}</b>
      <form onSubmit={handleSubmit}>
        <input type="text" value={eroll}
          onChange={onChangeEmpRoll}
          placeholder="Roll"
          required />
        <br />
        <br />
        <input type="submit" value="delete" className="btn btn-danger" />
      </form>
      </div>
    </div>
  )
}


export default Delete
