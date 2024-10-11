import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signin() {

  const [email, SetEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error404, setError404] = useState('');

  const nav = useNavigate();

  const SignInForm = async () => {
    try{
      const res = await fetch('https://pizza-website-wona.vercel.app/adminlogin', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
      });
  
      const userData = await res.json();

      if(email === '' || 
        password === ''){
          alert('Fälten är obligatoriska')
          
        } else if(!res.ok){
          setError404(userData.error404);
          
        } else{
          nav('/');

        }
        
        console.log(userData);

    } catch (error){
      console.log(error);
      
    }  
  }

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    SignInForm();
  };


  return (
    <div>
      Sign in
    <h3 style={{color: "red"}}>{error404}</h3>

      <div>
        <form onSubmit={handleLogin}>
          <input type="email" onChange={(e) => SetEmail(e.target.value)}/>
          <input type="password" onChange={(e) => setPassword(e.target.value)}/>
          <input type="submit" value='Logga in' />
        </form>
      </div>
    </div>
  )
}
