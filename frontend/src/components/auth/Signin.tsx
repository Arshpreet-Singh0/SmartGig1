import React, { useState } from 'react'
import Form from './Form';
import axios from 'axios';

const Signin = () => {
    const [input, setInput] = useState({
            email: "",
            password: "",
        });
        const handleChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
            setInput((prev)=>(
                {...prev, [e.target.name]: e.target.value}
            ));
        }
    
        const handleSubmit = async(e : React.FormEvent<HTMLFormElement>)=>{
            e.preventDefault();
            console.log(input);try {
                const res = await axios.post("http://localhost:8080/api/v1/user/signin", input);
    
                console.log(res);
                
            } catch (error) {
                console.log(error);
            }
        }
  return (
    <> 
        <Form type="signin" onChange={handleChange} onSubmit={handleSubmit} input={input}/>
    </>
  )
}

export default Signin