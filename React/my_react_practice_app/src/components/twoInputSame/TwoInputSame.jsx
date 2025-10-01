import React from 'react'
import { useState } from 'react'

const TwoInputSame = () => {
    const [password, setPassword] = useState("");
    const [confirm, setConfirm]= useState("");

    const handleSubmit =(e) => {
        e.preventDefault();
        if(password === confirm){
            alert("Password match!");
        } else {
            alert("Password do not match!")
        }
    }
  return (
    <div>
        <form
            onSubmit={handleSubmit}
        >
            <input 
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
            />
            <input type="password" 
                value ={confirm}
                placeholder='confirm password'
                onChange={(e) => setConfirm(e.target.value)}
            />
            <button type='submit'>Submit</button>
        </form>
      
    </div>
  )
}

export default TwoInputSame
