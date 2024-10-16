import React from 'react'

export default function UserSignin() {
  return (
    <div>
      <form>
        <input type="email" 
        placeholder='E-post'
        />
        <input type="password"
        placeholder='Lösenord'
        />
        <input type="submit" value="Logga in" />
      </form>
    </div>
  )
}
