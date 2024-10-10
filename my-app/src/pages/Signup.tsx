import React from 'react'

export default function Signup() {
  return (
    <div>
      Sign up
      <div>
        <form action="">
          <input type="text" placeholder='Förnamn' />
          <input type="text" placeholder='Efternamn' />
          <input type="email" placeholder='E-post' />
          <input type="number" placeholder='Mobilnummer'/>
          <input type="password" placeholder='Lösenord' />
          <input type="submit" value='Registrera' />
        </form>
      </div>
    </div>
  )
}
