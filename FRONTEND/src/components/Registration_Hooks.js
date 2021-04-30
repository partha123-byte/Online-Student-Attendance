import React, { useState } from 'react'
import axios from 'axios';
import NavigationBar from './NavigationBar';

function Registration() {

    const [ename, setEmpName] = useState("");
    const [eroll, setEmpRoll] = useState("");;
    const [esub1, setSub1] = useState("");
    const [esub2, setSub2] = useState("");;
    const [esub3, setSub3] = useState("");
   
    const [msg, setMessage] = useState("");;

    const onChangeEmpName = (e) => setEmpName(e.target.value);
    const onChangeEmpRoll= (e) => setEmpRoll(e.target.value);
    const onChangeSub1 = (e) => setSub1(e.target.value);
    const onChangeSub2 = (e) => setSub2(e.target.value);
    const onChangeSub3 = (e) => setSub3(e.target.value);
   

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Form submitted:`);
        console.log(`NAME: ${ename}`);
        console.log(`EMAIL: ${eroll}`);

        const empinfo = {
            stdname: ename,
            stdroll: eroll,
            stdsub1: esub1,
            stdsub2: esub2,
            stdsub3: esub3,
            
        }

        axios.post('http://localhost:4500/emp/register', empinfo)
            .then(res => {
                console.log(res.data)
                setMessage('Successful!!..Next Student Please...')
            });

        setEmpName('')
        setEmpRoll('')
        setSub1('')
        setSub2('')
        setSub3('')
        

    }

    return (
        <div >
            <NavigationBar />
            <div className="background">
            <br />
            <div className="register">
            <h3>Register Student</h3>
            <h4 style={{ color: "brown" }}> {msg}</h4>
            <form onSubmit={handleSubmit}>
                <p>
                <input type="text" value={ename}
                    onChange={onChangeEmpName} placeholder="Enter Name"
                    required />
                </p>
                <p>
                <input type="text" value={eroll}
                    onChange={onChangeEmpRoll} placeholder="Enter roll"
                    required />
                </p>
                <p>
                <input type="number" value={esub1}
                    onChange={onChangeSub1} placeholder="Enter sub1 attendance"
                    required />
                </p>
                <p>
                <input type="number" value={esub2}
                    onChange={onChangeSub2} placeholder="Enter sub2 attendance"/>
            
                </p>
                <input type="number" value={esub3}
                    onChange={onChangeSub3} placeholder="Enter sub3 attendance"
                    required /> 
                
                
                <p>
                <input type="submit" value="Submit" />
                </p>
            </form>
            </div>
        </div> 
        </div>
    )
}


export default Registration
