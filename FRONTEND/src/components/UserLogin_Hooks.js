import React, { useState } from 'react'
import axios from 'axios';
import NavigationBar from './NavigationBar';

function UserLogin(props) {
  const [ename, setEmpName] = useState("");
  const [eroll, setEmpRoll] = useState("");;
  const [msg, setMessage] = useState("");;

  const onChangeEmpName = (e) => setEmpName(e.target.value);
  const onChangeEmpRoll = (e) => setEmpRoll(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(`NAME: ${ename}`);
    console.log(`ROLL: ${eroll}`);

    const emplogininfo = {
      stdname: ename,
      stdroll: eroll
    }

    axios.post('http://localhost:4500/emp/logincheck', emplogininfo)
      .then(res => {
        console.log(res.data)
        sessionStorage.setItem("Key_Veriable", 'USER')
        sessionStorage.setItem("useremail", res.data[0].stdroll)
        sessionStorage.setItem("username", res.data[0].stdname)
        props.history.push('/userafterlogin')
      })
      .catch(err => {
        console.log(err)
        setMessage('Invalid User')
      })

    setEmpName('')
    setEmpRoll('')
  }

  return (
    <div>
      <NavigationBar />
      <br />
      <h3>Student Login</h3>
      <b style={{ color: "red" }}> {msg} </b>
      <form onSubmit={handleSubmit}>
        <input type="text" value={ename}
          onChange={onChangeEmpName}
          placeholder="Enter Name.."
          required />
        <br /><br />

        <input type="text" value={eroll}
          placeholder="Enter Rollno.."
          onChange={onChangeEmpRoll}
          required />
        <br /><br />
        <input type="submit" value="LOGIN"  />
      </form>
    </div>
  )
}

export default UserLogin
