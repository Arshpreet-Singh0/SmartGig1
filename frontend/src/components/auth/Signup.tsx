import React, { useState } from "react"
import Form from "./Form"
import axios from "axios";

const Signup = () => {
    const [input, setInput] = useState({
        email: "",
        name : "",
        password: "",
    });
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
        setInput((prev)=>(
            {...prev, [e.target.name]: e.target.value}
        ));
    }

    const handleSubmit = async(e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8080/api/v1/user/signup", input);

            console.log(res);
            
        } catch (error) {
            console.log(error);
        }
        
    }

  return (
    <> 
        <Form type="signup" onChange={handleChange} onSubmit={handleSubmit} input={input}/>
    </>
  )
}

export default Signup